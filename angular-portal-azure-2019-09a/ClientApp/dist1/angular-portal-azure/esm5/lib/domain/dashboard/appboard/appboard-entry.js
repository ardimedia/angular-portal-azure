var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { MainService } from '../../../service/main/main.service';
import { Tile } from '../tile/tile';
var AppboardEntry = /** @class */ (function (_super) {
    __extends(AppboardEntry, _super);
    // #region Properties
    //mainService: MainService
    // #endregion
    // #region Constructors
    function AppboardEntry(title, routerPath, subTitle, iconClass, iconColor) {
        if (subTitle === void 0) { subTitle = ''; }
        if (iconClass === void 0) { iconClass = ''; }
        if (iconColor === void 0) { iconColor = ''; }
        var _this = _super.call(this, title, routerPath) || this;
        _this.title = title;
        _this.routerPath = routerPath;
        _this.subTitle = subTitle;
        _this.iconClass = iconClass;
        _this.iconColor = iconColor;
        return _this;
    }
    return AppboardEntry;
}(Tile));
export { AppboardEntry };
if (false) {
    /** @type {?} */
    AppboardEntry.prototype.title;
    /** @type {?} */
    AppboardEntry.prototype.routerPath;
    /** @type {?} */
    AppboardEntry.prototype.subTitle;
    /** @type {?} */
    AppboardEntry.prototype.iconClass;
    /** @type {?} */
    AppboardEntry.prototype.iconColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwYm9hcmQtZW50cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vZGFzaGJvYXJkL2FwcGJvYXJkL2FwcGJvYXJkLWVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFcEM7SUFBbUMsaUNBQUk7SUFDbkMscUJBQXFCO0lBRXJCLDBCQUEwQjtJQUUxQixhQUFhO0lBRWIsdUJBQXVCO0lBRXZCLHVCQUFtQixLQUFhLEVBQVMsVUFBa0IsRUFBUyxRQUFxQixFQUFTLFNBQXNCLEVBQVMsU0FBc0I7UUFBbkYseUJBQUEsRUFBQSxhQUFxQjtRQUFTLDBCQUFBLEVBQUEsY0FBc0I7UUFBUywwQkFBQSxFQUFBLGNBQXNCO1FBQXZKLFlBQ0ksa0JBQU0sS0FBSyxFQUFFLFVBQVUsQ0FBQyxTQUMzQjtRQUZrQixXQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFBUyxjQUFRLEdBQVIsUUFBUSxDQUFhO1FBQVMsZUFBUyxHQUFULFNBQVMsQ0FBYTtRQUFTLGVBQVMsR0FBVCxTQUFTLENBQWE7O0lBRXZKLENBQUM7SUFPTCxvQkFBQztBQUFELENBQUMsQUFsQkQsQ0FBbUMsSUFBSSxHQWtCdEM7Ozs7SUFUZSw4QkFBb0I7O0lBQUUsbUNBQXlCOztJQUFFLGlDQUE0Qjs7SUFBRSxrQ0FBNkI7O0lBQUUsa0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBNYWluU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2UvbWFpbi9tYWluLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi4vdGlsZS90aWxlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBib2FyZEVudHJ5IGV4dGVuZHMgVGlsZSB7XHJcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcclxuXHJcbiAgICAvL21haW5TZXJ2aWNlOiBNYWluU2VydmljZVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yc1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nLCBwdWJsaWMgcm91dGVyUGF0aDogc3RyaW5nLCBwdWJsaWMgc3ViVGl0bGU6IHN0cmluZyA9ICcnLCBwdWJsaWMgaWNvbkNsYXNzOiBzdHJpbmcgPSAnJywgcHVibGljIGljb25Db2xvcjogc3RyaW5nID0gJycpIHtcclxuICAgICAgICBzdXBlcih0aXRsZSwgcm91dGVyUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHVibGljIE1ldGhvZHNcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19