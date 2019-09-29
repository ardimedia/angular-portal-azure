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
import { Tiles } from './tiles';
import { UserControlBase } from './user-control-base';
var Startboard = /** @class */ (function (_super) {
    __extends(Startboard, _super);
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    function Startboard(portalService) {
        var _this = _super.call(this, portalService) || this;
        _this.tiles = new Tiles();
        return _this;
    }
    return Startboard;
}(UserControlBase));
export { Startboard };
if (false) {
    /** @type {?} */
    Startboard.prototype.tiles;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnRib2FyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2RvbWFpbi9zdGFydGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQ7SUFBZ0MsOEJBQWU7SUFDM0Msc0JBQXNCO0lBRXRCLCtDQUErQztJQUMvQyxvQkFBWSxhQUE0QjtRQUF4QyxZQUNJLGtCQUFNLGFBQWEsQ0FBQyxTQUV2QjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQzs7SUFDN0IsQ0FBQztJQVNMLGlCQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUFnQyxlQUFlLEdBZ0I5Qzs7OztJQUhHLDJCQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4vcG9ydGFsLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaWxlcyB9IGZyb20gJy4vdGlsZXMnO1xyXG5pbXBvcnQgeyBVc2VyQ29udHJvbEJhc2UgfSBmcm9tICcuL3VzZXItY29udHJvbC1iYXNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFydGJvYXJkIGV4dGVuZHMgVXNlckNvbnRyb2xCYXNlIHtcclxuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JcclxuXHJcbiAgICAvL3N0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnLCAncG9ydGFsU2VydmljZSddO1xyXG4gICAgY29uc3RydWN0b3IocG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSkgeyAvLyAkc2NvcGU6IGFueSxcclxuICAgICAgICBzdXBlcihwb3J0YWxTZXJ2aWNlKTsgLy8gJHNjb3BlLFxyXG4gICAgICAgIHRoaXMudGlsZXMgPSBuZXcgVGlsZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgdGlsZXM6IFRpbGVzO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=