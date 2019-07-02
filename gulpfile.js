var gulp = require('gulp');
var gulpExec = require('gulp-exec');
var gulpUglify = require('gulp-uglify');

var browserify = require('browserify');
var tsify = require('tsify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var glob = require('glob');
var buildConfigs = require('./build_configs.json');

function promiseifyGlob(pattern) {
    return new Promise((resolve, reject) => {
        try {
            glob(pattern, (error, files) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(files);
                }
            });
        } catch (error) {
            reject(error)
        }
    });
}

function findArgs(args) {
    let currArg = null;
    let retArgs = {};

    for(let i = 0; i < args.length; ++i) {
        let thisArg = args[i].trim();
        let actualArg = thisArg.replace(/^\-+/, '');

        if(actualArg === thisArg) {
            if(currArg) {
                retArgs[currArg] = actualArg;
            }

            currArg = null;
        } else {
            currArg = actualArg;
            retArgs[currArg] = true;
        }
    }

    console.log(`Env: ${JSON.stringify(retArgs)}`);
    return retArgs;
}

function copyHtml(dest) {
    return gulpExec(`rm -rf ${dest}/index.html`)
        .pipe(gulpExec(`cp index.html ${dest}/index.html`));
}

function copyAssets(dest) {
    return gulpExec(`rm -rf ${dest}/assets`)
        .pipe(gulpExec(`cp -a src/assets/. ${dest}/assets`));
}

async function doBuild(files, dest, main, isDev) {
    console.log(`Found num files: ${files.length}, Files: ${files.toString()}`);

    var buildObj = browserify({
        basedir: '.',
        debug: isDev,
        sourcemaps: isDev,
        entries: files,
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(vinylSourceStream(main))
    .pipe(vinylBuffer());

    if(isDev === false) {
        buildObj = buildObj.pipe(gulpUglify());
    }

    return buildObj.pipe(copyHtml(dest))
        .pipe(gulp.dest(dest));
}

gulp.task('build', async () => {
    let processArgs = findArgs(process.argv);
    let buildConfig = processArgs.env ? buildConfigs[processArgs.env] : buildConfigs['dev'];
    let configIncludedFiles = buildConfig.includedFiles;
    let configDest = buildConfig.dest ? buildConfig.dest : 'dist';
    let configMain = buildConfig.main ? buildConfig.main : 'App.js';

    let files = [];
    for(i = 0; i < configIncludedFiles.length; ++i) {
        let globbed = await promiseifyGlob(configIncludedFiles[i]);
        files = files.concat(globbed);
    }

    return doBuild(files, configDest, configMain, processArgs.env === 'dev');
});