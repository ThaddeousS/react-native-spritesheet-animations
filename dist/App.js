(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteSheetEditor_1 = require("./SpriteSheetEditor");
var App = /** @class */ (function () {
    function App() {
        this.setDefaults();
    }
    App.prototype.setDefaults = function () {
        this._editor = new SpriteSheetEditor_1.SpriteSheetEditor();
        this._initPromise = null;
    };
    App.prototype.init = function () {
        var _this = this;
        if (!this._initPromise) {
            this._initPromise = new Promise(function (resolve, reject) {
                try {
                    _this._editor.init().then(function () {
                        resolve();
                    });
                }
                catch (error) {
                    reject(error);
                }
            });
        }
        return this._initPromise;
    };
    App.prototype.start = function () {
    };
    return App;
}());
exports.App = App;
window.onload = function () {
    var app = new App();
    app.init().then(function () {
        app.start();
    });
};

},{"./SpriteSheetEditor":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteSheet = /** @class */ (function () {
    function SpriteSheet() {
        this.setDefaults();
    }
    SpriteSheet.prototype.setDefaults = function () {
        this._manifest = null;
    };
    return SpriteSheet;
}());
exports.SpriteSheet = SpriteSheet;

},{}],3:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var StyleHelper_1 = require("./StyleHelper");
var SpriteSheetEditorState;
(function (SpriteSheetEditorState) {
    SpriteSheetEditorState[SpriteSheetEditorState["IDLE"] = 0] = "IDLE";
    SpriteSheetEditorState[SpriteSheetEditorState["EDITING"] = 1] = "EDITING";
})(SpriteSheetEditorState = exports.SpriteSheetEditorState || (exports.SpriteSheetEditorState = {}));
var SpriteSheetEditor = /** @class */ (function () {
    function SpriteSheetEditor() {
        this.setDefaults();
    }
    SpriteSheetEditor.prototype.setDefaults = function () {
        this._sheetPath = null;
        this._initPromise = null;
        this._loadedImg = [];
    };
    SpriteSheetEditor.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this._initPromise) {
                    this._initPromise = new Promise(function (resolve, reject) {
                        try {
                            _this.setState(SpriteSheetEditorState.IDLE);
                            resolve();
                        }
                        catch (error) {
                            reject(error);
                        }
                    });
                }
                return [2 /*return*/, this._initPromise];
            });
        });
    };
    SpriteSheetEditor.prototype.buildIdleUi = function () {
        this.createSheetContainer();
        this.createButtons();
    };
    SpriteSheetEditor.prototype.createSheetContainer = function () {
        var sheetContainer = document.createElement('div');
        sheetContainer.id = 'sprite-sheet-container';
        StyleHelper_1.StyleHelper.applyStyle(sheetContainer, {
            'top': '0px',
            'left': '0px',
            'position': 'absolute',
            'width': '100%',
            'height': '100%'
        });
        document.body.appendChild(sheetContainer);
    };
    SpriteSheetEditor.prototype.createButtons = function () {
        var _this = this;
        var createFile = document.createElement('input');
        createFile.type = 'file';
        createFile.id = 'sprite-sheet-create-file';
        createFile.onchange = function (e) {
            var fileList = e.target.files;
            var singleFile = fileList[0];
            var fileReader = new FileReader();
            fileReader.onload = function (readerEvent) { return __awaiter(_this, void 0, void 0, function () {
                var content, spriteSheetImage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            content = readerEvent.target['result'];
                            return [4 /*yield*/, this.loadSheet(content)];
                        case 1:
                            spriteSheetImage = _a.sent();
                            if (spriteSheetImage) {
                                this.addToContainer(spriteSheetImage);
                                this.removeFromContainer(createFile);
                            }
                            return [2 /*return*/];
                    }
                });
            }); };
            fileReader.readAsDataURL(singleFile);
        };
        StyleHelper_1.StyleHelper.applyStyle(createFile, {
            top: '50px',
            left: '50px',
            position: 'relative'
        });
        this.addToContainer(createFile);
    };
    SpriteSheetEditor.prototype.addToContainer = function (ele) {
        var container = document.getElementById('sprite-sheet-container');
        if (container) {
            container.appendChild(ele);
        }
    };
    SpriteSheetEditor.prototype.removeFromContainer = function (ele) {
        var container = document.getElementById('sprite-sheet-container');
        if (container) {
            container.removeChild(ele);
        }
    };
    SpriteSheetEditor.prototype.loadSheet = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var image_1;
                        return __generator(this, function (_a) {
                            try {
                                image_1 = (document.getElementById('sprite-sheet-content') || document.createElement('img'));
                                image_1.id = 'sprite-sheet-content';
                                image_1.onload = function () {
                                    resolve(image_1);
                                };
                                image_1.onerror = function (error) {
                                    reject(error);
                                };
                                image_1.src = content;
                                StyleHelper_1.StyleHelper.applyStyle(image_1, {
                                    top: '0px',
                                    left: '0px',
                                    position: 'relative',
                                    display: 'block'
                                });
                            }
                            catch (error) {
                                reject(error);
                            }
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    SpriteSheetEditor.prototype.setState = function (state) {
        if (this._currState === state) {
            return;
        }
        this._prevState = this._currState;
        this._currState = state;
        switch (state) {
            case SpriteSheetEditorState.IDLE: {
                this.buildIdleUi();
                break;
            }
            case SpriteSheetEditorState.EDITING: {
                break;
            }
        }
    };
    return SpriteSheetEditor;
}());
exports.SpriteSheetEditor = SpriteSheetEditor;

},{"./StyleHelper":6}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteSheetManifest = /** @class */ (function () {
    function SpriteSheetManifest() {
    }
    SpriteSheetManifest.prototype.write = function () {
    };
    SpriteSheetManifest.prototype.save = function () {
    };
    SpriteSheetManifest.prototype.load = function () {
    };
    return SpriteSheetManifest;
}());
exports.SpriteSheetManifest = SpriteSheetManifest;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteSheetSettings = /** @class */ (function () {
    function SpriteSheetSettings() {
    }
    return SpriteSheetSettings;
}());
exports.SpriteSheetSettings = SpriteSheetSettings;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StyleHelper = /** @class */ (function () {
    function StyleHelper() {
    }
    StyleHelper.applyStyle = function (styleObj, style) {
        var origStyle = styleObj.style;
        var styleKeys = Object.keys(style);
        styleKeys.map(function (key) {
            if (key in origStyle) {
                origStyle[key] = style[key];
            }
        });
    };
    return StyleHelper;
}());
exports.StyleHelper = StyleHelper;

},{}]},{},[1,2,3,4,5,6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQXBwLnRzIiwic3JjL1Nwcml0ZVNoZWV0LnRzIiwic3JjL1Nwcml0ZVNoZWV0RWRpdG9yLnRzIiwic3JjL1Nwcml0ZVNoZWV0TWFuaWZlc3QudHMiLCJzcmMvU3ByaXRlU2hlZXRTZXR0aW5ncy50cyIsInNyYy9TdHlsZUhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEseURBQXdEO0FBRXhEO0lBSUk7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLHlCQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVNLGtCQUFJLEdBQVg7UUFBQSxpQkFjQztRQWJHLElBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQU8sVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDbEQsSUFBSTtvQkFDQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDckIsT0FBTyxFQUFFLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLENBQUM7aUJBQ047Z0JBQUMsT0FBTyxLQUFLLEVBQUU7b0JBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVNLG1CQUFLLEdBQVo7SUFFQSxDQUFDO0lBQ0wsVUFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ1ksa0JBQUc7QUFrQ2hCLE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFDWixJQUFJLEdBQUcsR0FBUSxJQUFJLEdBQUcsRUFB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SUFBQTtBQWpKWSw4Q0FBaUI7Ozs7O0FDUDlCO0lBQ0k7SUFFQSxDQUFDO0lBRU0sbUNBQUssR0FBWjtJQUVBLENBQUM7SUFFTSxrQ0FBSSxHQUFYO0lBRUEsQ0FBQztJQUVNLGtDQUFJLEdBQVg7SUFFQSxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLGtEQUFtQjs7Ozs7QUNBaEM7SUFBQTtJQUVBLENBQUM7SUFBRCwwQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksa0RBQW1COzs7OztBQ0NoQztJQUFBO0lBV0EsQ0FBQztJQVZpQixzQkFBVSxHQUF4QixVQUF5QixRQUFxQixFQUFFLEtBQWE7UUFDekQsSUFBSSxTQUFTLEdBQXdCLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDcEQsSUFBSSxTQUFTLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU3QyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBVztZQUN0QixJQUFHLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBQ2pCLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDL0I7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxrQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksa0NBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBTcHJpdGVTaGVldEVkaXRvciB9IGZyb20gXCIuL1Nwcml0ZVNoZWV0RWRpdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICAgIHByaXZhdGUgX2VkaXRvcjogU3ByaXRlU2hlZXRFZGl0b3I7XG4gICAgcHJpdmF0ZSBfaW5pdFByb21pc2U6IFByb21pc2U8dm9pZD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RGVmYXVsdHMoKSB7XG4gICAgICAgIHRoaXMuX2VkaXRvciA9IG5ldyBTcHJpdGVTaGVldEVkaXRvcigpO1xuICAgICAgICB0aGlzLl9pbml0UHJvbWlzZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmKCF0aGlzLl9pbml0UHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5faW5pdFByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWRpdG9yLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9pbml0UHJvbWlzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG5cbiAgICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgbGV0IGFwcDogQXBwID0gbmV3IEFwcCgpO1xuICAgIGFwcC5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIGFwcC5zdGFydCgpO1xuICAgIH0pO1xufSIsImltcG9ydCB7IFNwcml0ZVNoZWV0TWFuaWZlc3QgfSBmcm9tIFwiLi9TcHJpdGVTaGVldE1hbmlmZXN0XCI7XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XG4gICAgcHJpdmF0ZSBfbWFuaWZlc3Q6IFNwcml0ZVNoZWV0TWFuaWZlc3Q7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RGVmYXVsdHMoKSB7XG4gICAgICAgIHRoaXMuX21hbmlmZXN0ID0gbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3R5bGVIZWxwZXIgfSBmcm9tIFwiLi9TdHlsZUhlbHBlclwiO1xuXG5leHBvcnQgZW51bSBTcHJpdGVTaGVldEVkaXRvclN0YXRlIHtcbiAgICBJRExFID0gMCxcbiAgICBFRElUSU5HID0gMVxufVxuXG5leHBvcnQgY2xhc3MgU3ByaXRlU2hlZXRFZGl0b3Ige1xuICAgIHByaXZhdGUgX3NoZWV0UGF0aDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2xvYWRlZEltZzogSFRNTEltYWdlRWxlbWVudFtdO1xuICAgIHByaXZhdGUgX2luaXRQcm9taXNlOiBQcm9taXNlPHZvaWQ+O1xuICAgIHByaXZhdGUgX2N1cnJTdGF0ZTogU3ByaXRlU2hlZXRFZGl0b3JTdGF0ZTtcbiAgICBwcml2YXRlIF9wcmV2U3RhdGU6IFNwcml0ZVNoZWV0RWRpdG9yU3RhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RGVmYXVsdHMoKSB7XG4gICAgICAgIHRoaXMuX3NoZWV0UGF0aCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2luaXRQcm9taXNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbG9hZGVkSW1nID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmKCF0aGlzLl9pbml0UHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5faW5pdFByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShTcHJpdGVTaGVldEVkaXRvclN0YXRlLklETEUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luaXRQcm9taXNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRJZGxlVWkoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlU2hlZXRDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdXR0b25zKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVTaGVldENvbnRhaW5lcigpIHtcbiAgICAgICAgbGV0IHNoZWV0Q29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGVldENvbnRhaW5lci5pZCA9ICdzcHJpdGUtc2hlZXQtY29udGFpbmVyJztcbiAgICAgICAgU3R5bGVIZWxwZXIuYXBwbHlTdHlsZShzaGVldENvbnRhaW5lciwge1xuICAgICAgICAgICAgJ3RvcCc6ICcwcHgnLFxuICAgICAgICAgICAgJ2xlZnQnOiAnMHB4JyxcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTAwJScsXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEwMCUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2hlZXRDb250YWluZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQnV0dG9ucygpIHtcbiAgICAgICAgbGV0IGNyZWF0ZUZpbGU6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjcmVhdGVGaWxlLnR5cGUgPSAnZmlsZSc7XG4gICAgICAgIGNyZWF0ZUZpbGUuaWQgPSAnc3ByaXRlLXNoZWV0LWNyZWF0ZS1maWxlJztcblxuICAgICAgICBjcmVhdGVGaWxlLm9uY2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IGZpbGVMaXN0OiBGaWxlTGlzdCA9IGUudGFyZ2V0LmZpbGVzO1xuICAgICAgICAgICAgbGV0IHNpbmdsZUZpbGU6IEZpbGUgPSBmaWxlTGlzdFswXTtcblxuICAgICAgICAgICAgbGV0IGZpbGVSZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGFzeW5jIChyZWFkZXJFdmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudDogc3RyaW5nID0gcmVhZGVyRXZlbnQudGFyZ2V0WydyZXN1bHQnXTtcbiAgICAgICAgICAgICAgICBsZXQgc3ByaXRlU2hlZXRJbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IGF3YWl0IHRoaXMubG9hZFNoZWV0KGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGlmKHNwcml0ZVNoZWV0SW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcihzcHJpdGVTaGVldEltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tQ29udGFpbmVyKGNyZWF0ZUZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChzaW5nbGVGaWxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBTdHlsZUhlbHBlci5hcHBseVN0eWxlKGNyZWF0ZUZpbGUsIHtcbiAgICAgICAgICAgIHRvcDogJzUwcHgnLFxuICAgICAgICAgICAgbGVmdDogJzUwcHgnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcihjcmVhdGVGaWxlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRvQ29udGFpbmVyKGVsZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ByaXRlLXNoZWV0LWNvbnRhaW5lcicpO1xuICAgICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVGcm9tQ29udGFpbmVyKGVsZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ByaXRlLXNoZWV0LWNvbnRhaW5lcicpO1xuICAgICAgICBpZihjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChlbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkU2hlZXQoY29udGVudDogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50Pihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ByaXRlLXNoZWV0LWNvbnRlbnQnKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSkgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgICAgICBpbWFnZS5pZCA9ICdzcHJpdGUtc2hlZXQtY29udGVudCc7XG5cbiAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW1hZ2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gY29udGVudDtcblxuICAgICAgICAgICAgICAgIFN0eWxlSGVscGVyLmFwcGx5U3R5bGUoaW1hZ2UsIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFN0YXRlKHN0YXRlOiBTcHJpdGVTaGVldEVkaXRvclN0YXRlKSB7XG4gICAgICAgIGlmKHRoaXMuX2N1cnJTdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ByZXZTdGF0ZSA9IHRoaXMuX2N1cnJTdGF0ZTtcbiAgICAgICAgdGhpcy5fY3VyclN0YXRlID0gc3RhdGU7XG5cbiAgICAgICAgc3dpdGNoKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFNwcml0ZVNoZWV0RWRpdG9yU3RhdGUuSURMRToge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRJZGxlVWkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSBTcHJpdGVTaGVldEVkaXRvclN0YXRlLkVESVRJTkc6IHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgU3ByaXRlU2hlZXRNYW5pZmVzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGUoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZSgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKCkge1xuICAgICAgICBcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFNwcml0ZVNoZWV0U2V0dGluZ3Mge1xuICAgIFxufSIsIlxuZXhwb3J0IGNsYXNzIFN0eWxlSGVscGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGFwcGx5U3R5bGUoc3R5bGVPYmo6IEhUTUxFbGVtZW50LCBzdHlsZTogb2JqZWN0KSB7XG4gICAgICAgIGxldCBvcmlnU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSBzdHlsZU9iai5zdHlsZTtcbiAgICAgICAgbGV0IHN0eWxlS2V5czogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhzdHlsZSk7XG5cbiAgICAgICAgc3R5bGVLZXlzLm1hcCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGlmKGtleSBpbiBvcmlnU3R5bGUpIHtcbiAgICAgICAgICAgICAgICBvcmlnU3R5bGVba2V5XSA9IHN0eWxlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=
