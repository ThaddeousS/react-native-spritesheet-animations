export class SpriteSheetEditor {
    private _sheetPath: string;
    private _loadedImg: HTMLImageElement[];
    private _initPromise: Promise<void>;

    constructor() {
        this.setDefaults();
    }

    private setDefaults() {
        this._sheetPath = null;
        this._initPromise = null;
        this._loadedImg = [];
    }

    public async init(): Promise<void> {
        if(!this._initPromise) {
            this._initPromise = new Promise<void>((resolve, reject) => {
                try {
                    this.buildUi();
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });
        }
        
        return this._initPromise;
    }

    private buildUi() {
        this.createSheetContainer();
    }

    private createSheetContainer() {
        let sheetContainer: HTMLElement = document.createElement('div');
    }

    public async loadSheet(): Promise<HTMLImageElement> {
        return new Promise<HTMLImageElement>(async (resolve, reject) => {
            try {
                this._sheetPath = await prompt('Please enter path to sprite sheet file:', '');
                
                let image: HTMLImageElement = document.createElement('img');
                image.id = 'image-content';
                image.src = this._sheetPath;

                this._loadedImg.push(image);
                resolve(image);
            } catch (error) {
                reject(error);
            }
        });
    }
}