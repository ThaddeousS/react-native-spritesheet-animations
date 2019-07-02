(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteSheetEditor_1 = require("./SpriteSheetEditor");
var App = /** @class */ (function () {
    function App() {
        var spriteSheetEditor = new SpriteSheetEditor_1.SpriteSheetEditor();
        spriteSheetEditor.init();
    }
    return App;
}());
exports.App = App;
window.onload = function () {
    var app = new App();
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
var SpriteSheetEditor = /** @class */ (function () {
    function SpriteSheetEditor() {
        this.setDefaults();
    }
    SpriteSheetEditor.prototype.setDefaults = function () {
        this._sheetPath = null;
    };
    SpriteSheetEditor.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var image;
            return __generator(this, function (_a) {
                this._sheetPath = prompt('Please enter path to sprite sheet file:', '');
                image = document.createElement('img');
                image.id = 'image-content';
                image.src = this._sheetPath;
                document.body.appendChild(image);
                return [2 /*return*/];
            });
        });
    };
    return SpriteSheetEditor;
}());
exports.SpriteSheetEditor = SpriteSheetEditor;

},{}],4:[function(require,module,exports){
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

},{}]},{},[1,2,3,4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQXBwLnRzIiwic3JjL1Nwcml0ZVNoZWV0LnRzIiwic3JjL1Nwcml0ZVNoZWV0RWRpdG9yLnRzIiwic3JjL1Nwcml0ZVNoZWV0TWFuaWZlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLHlEQUF3RDtBQUV4RDtJQUNJO1FBQ0ksSUFBSSxpQkFBaUIsR0FBc0IsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO1FBQ25FLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSxrQkFBRztBQU9oQixNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ1osSUFBSSxHQUFHLEdBQVEsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQUE7Ozs7O0FDVEQ7SUFHSTtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU8saUNBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLGtDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnhCO0lBR0k7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLHVDQUFXLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVZLGdDQUFJLEdBQWpCOzs7O2dCQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLHlDQUF5QyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUVwRSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVELEtBQUssQ0FBQyxFQUFFLEdBQUcsZUFBZSxDQUFDO2dCQUMzQixLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBRTVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O0tBQ3BDO0lBQ0wsd0JBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLDhDQUFpQjs7Ozs7QUNBOUI7SUFDSTtJQUVBLENBQUM7SUFFTSxtQ0FBSyxHQUFaO0lBRUEsQ0FBQztJQUVNLGtDQUFJLEdBQVg7SUFFQSxDQUFDO0lBRU0sa0NBQUksR0FBWDtJQUVBLENBQUM7SUFDTCwwQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksa0RBQW1CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgU3ByaXRlU2hlZXRFZGl0b3IgfSBmcm9tIFwiLi9TcHJpdGVTaGVldEVkaXRvclwiO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbGV0IHNwcml0ZVNoZWV0RWRpdG9yOiBTcHJpdGVTaGVldEVkaXRvciA9IG5ldyBTcHJpdGVTaGVldEVkaXRvcigpO1xuICAgICAgICBzcHJpdGVTaGVldEVkaXRvci5pbml0KCk7XG4gICAgfVxufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGxldCBhcHA6IEFwcCA9IG5ldyBBcHAoKTtcbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldE1hbmlmZXN0IH0gZnJvbSBcIi4vU3ByaXRlU2hlZXRNYW5pZmVzdFwiO1xuXG5leHBvcnQgY2xhc3MgU3ByaXRlU2hlZXQge1xuICAgIHByaXZhdGUgX21hbmlmZXN0OiBTcHJpdGVTaGVldE1hbmlmZXN0O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldERlZmF1bHRzKCkge1xuICAgICAgICB0aGlzLl9tYW5pZmVzdCA9IG51bGw7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldEVkaXRvciB7XG4gICAgcHJpdmF0ZSBfc2hlZXRQYXRoOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RGVmYXVsdHMoKSB7XG4gICAgICAgIHRoaXMuX3NoZWV0UGF0aCA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXQoKSB7XG4gICAgICAgIHRoaXMuX3NoZWV0UGF0aCA9IHByb21wdCgnUGxlYXNlIGVudGVyIHBhdGggdG8gc3ByaXRlIHNoZWV0IGZpbGU6JywgJycpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLmlkID0gJ2ltYWdlLWNvbnRlbnQnO1xuICAgICAgICBpbWFnZS5zcmMgPSB0aGlzLl9zaGVldFBhdGg7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldE1hbmlmZXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZSgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzYXZlKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQoKSB7XG4gICAgICAgIFxuICAgIH1cbn0iXX0=
