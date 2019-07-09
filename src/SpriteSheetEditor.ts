import { StyleHelper } from "./StyleHelper";

export enum SpriteSheetEditorState {
    IDLE = 0,
    EDITING = 1
}

export class SpriteSheetEditor {
    private _loadedImg: HTMLImageElement[];
    private _initPromise: Promise<void>;
    private _currState: SpriteSheetEditorState;
    private _prevState: SpriteSheetEditorState;

    constructor() {
        this.setDefaults();
    }

    private setDefaults() {
        this._initPromise = null;
        this._loadedImg = [];
    }

    public async init(): Promise<void> {
        if(!this._initPromise) {
            this._initPromise = new Promise<void>((resolve, reject) => {
                try {
                    this.setState(SpriteSheetEditorState.IDLE);
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });
        }
        
        return this._initPromise;
    }

    private buildIdleUi() {
        this.createSheetContainer();
        this.createButtons();
    }

    private createSheetContainer() {
        let sheetContainer: HTMLElement = document.createElement('div');
        sheetContainer.id = 'sprite-sheet-container';
        StyleHelper.applyStyle(sheetContainer, {
            'top': '0px',
            'left': '0px',
            'position': 'absolute',
            'width': '100%',
            'height': '100%'
        });

        document.body.appendChild(sheetContainer);
    }

    private createButtons() {
        let createFile: HTMLInputElement = document.createElement('input');
        createFile.type = 'file';
        createFile.id = 'sprite-sheet-create-file';

        createFile.onchange = (e: any) => {
            let fileList: FileList = e.target.files;
            let singleFile: File = fileList[0];

            let fileReader: FileReader = new FileReader();

            fileReader.onload = async (readerEvent: Event) => {
                let content: string = readerEvent.target['result'];
                let spriteSheetImage: HTMLImageElement = await this.loadSheet(content);
                if(spriteSheetImage) {
                    this.addToContainer(spriteSheetImage);
                    this.removeFromContainer(createFile);
                }
            };

            fileReader.readAsDataURL(singleFile);
        };

        StyleHelper.applyStyle(createFile, {
            top: '50px',
            left: '50px',
            position: 'relative'
        });

        this.addToContainer(createFile);
    }

    private addToContainer(ele: HTMLElement) {
        let container: HTMLElement = document.getElementById('sprite-sheet-container');
        if(container) {
            container.appendChild(ele);
        }
    }

    private removeFromContainer(ele: HTMLElement) {
        let container: HTMLElement = document.getElementById('sprite-sheet-container');
        if(container) {
            container.removeChild(ele);
        }
    }

    private async loadSheet(content: string): Promise<HTMLImageElement> {
        return new Promise<HTMLImageElement>(async (resolve, reject) => {
            try {
                let image: HTMLImageElement = (document.getElementById('sprite-sheet-content') || document.createElement('img')) as HTMLImageElement;
                image.id = 'sprite-sheet-content';

                image.onload = () => {
                    this._loadedImg.push(image);
                    resolve(image);
                }

                image.onerror = (error) => {
                    reject(error);
                };

                image.src = content;

                StyleHelper.applyStyle(image, {
                    top: '0px',
                    left: '0px',
                    position: 'relative',
                    display: 'block'
                });

            } catch (error) {
                reject(error);
            }
        });
    }

    public setState(state: SpriteSheetEditorState) {
        if(this._currState === state) {
            return;
        }

        this._prevState = this._currState;
        this._currState = state;

        switch(state) {
            case SpriteSheetEditorState.IDLE: {
                this.buildIdleUi();
                break;
            }

            case SpriteSheetEditorState.EDITING: {
                break;
            }
        }
    }
}