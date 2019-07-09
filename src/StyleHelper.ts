
export class StyleHelper {
    public static applyStyle(styleObj: HTMLElement, style: object) {
        let origStyle: CSSStyleDeclaration = styleObj.style;
        let styleKeys: string[] = Object.keys(style);

        styleKeys.map((key: string) => {
            if(key in origStyle) {
                origStyle[key] = style[key];
            }
        });
    }
}