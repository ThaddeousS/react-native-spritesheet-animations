import { SpriteSheetManifest } from "./SpriteSheetManifest";

export class SpriteSheet {
    private _manifest: SpriteSheetManifest;

    constructor() {
        this.setDefaults();
    }

    private setDefaults() {
        this._manifest = null;
    }
}