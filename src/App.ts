import { SpriteSheetEditor } from "./SpriteSheetEditor";

export class App {
    private _editor: SpriteSheetEditor;
    private _initPromise: Promise<void>;

    constructor() {
        this.setDefaults();
    }

    private setDefaults() {
        this._editor = new SpriteSheetEditor();
        this._initPromise = null;
    }

    public init(): Promise<void> {
        if(!this._initPromise) {
            this._initPromise = new Promise<void>((resolve, reject) => {
                try {
                    this._editor.init().then(() => {
                        resolve();
                    });
                } catch (error) {
                    reject(error);
                }
            });
        }

        return this._initPromise;
    }

    public start() {

    }
}

window.onload = () => {
    let app: App = new App();
    app.init().then(() => {
        app.start();
    });
}