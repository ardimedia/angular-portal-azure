/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BladeData } from './blade-data';
export class BladeNav extends BladeData {
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    /**
     * @param {?} portalService
     * @param {?} path
     * @param {?=} title
     * @param {?=} subtitle
     * @param {?=} width
     */
    constructor(portalService, path, title = '', subtitle = '', width = 315) {
        super(portalService, path, title, subtitle, width); //$scope,
        this.isInnerHtml = false;
        this.isNav = true;
    }
    // #endregion
    // #region Properties
    //items: Array<BladeNavItem> = new Array<BladeNavItem>();
    // #endregion
    // #region Methods
    /**
     * @param {?} path
     * @return {?}
     */
    onNavigateTo(path) {
        if (path === '') {
            return;
        }
        this.portalService.areaBlades.raiseAddBladeEvent({ path: path, pathSender: this.path });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUtbmF2LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvZG9tYWluL2JsYWRlLW5hdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUl6QyxNQUFNLE9BQU8sUUFBUyxTQUFRLFNBQXVCOzs7Ozs7Ozs7O0lBSWpELFlBQVksYUFBNEIsRUFBRSxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxFQUFFLFdBQW1CLEVBQUUsRUFBRSxRQUFnQixHQUFHO1FBQ2xILEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQSxTQUFTO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7Ozs7Ozs7SUFZRCxZQUFZLENBQUMsSUFBWTtRQUNyQixJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1RixDQUFDO0NBR0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbGFkZURhdGEgfSBmcm9tICcuL2JsYWRlLWRhdGEnO1xuaW1wb3J0IHsgQmxhZGVOYXZJdGVtIH0gZnJvbSAnLi9ibGFkZS1uYXYtaXRlbSc7XG5pbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi9wb3J0YWwtc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBCbGFkZU5hdiBleHRlbmRzIEJsYWRlRGF0YTxCbGFkZU5hdkl0ZW0+IHtcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yXG5cbiAgICAvL3N0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnLCAncG9ydGFsU2VydmljZSddO1xuICAgIGNvbnN0cnVjdG9yKHBvcnRhbFNlcnZpY2U6IFBvcnRhbFNlcnZpY2UsIHBhdGg6IHN0cmluZywgdGl0bGU6IHN0cmluZyA9ICcnLCBzdWJ0aXRsZTogc3RyaW5nID0gJycsIHdpZHRoOiBudW1iZXIgPSAzMTUpIHsvLyRzY29wZTogYW55LFxuICAgICAgICBzdXBlcihwb3J0YWxTZXJ2aWNlLCBwYXRoLCB0aXRsZSwgc3VidGl0bGUsIHdpZHRoKTsvLyRzY29wZSxcbiAgICAgICAgdGhpcy5pc0lubmVySHRtbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTmF2ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcblxuICAgIC8vaXRlbXM6IEFycmF5PEJsYWRlTmF2SXRlbT4gPSBuZXcgQXJyYXk8QmxhZGVOYXZJdGVtPigpO1xuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBNZXRob2RzXG5cbiAgICBvbk5hdmlnYXRlVG8ocGF0aDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChwYXRoID09PSAnJykgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFCbGFkZXMucmFpc2VBZGRCbGFkZUV2ZW50KHsgcGF0aDogcGF0aCwgcGF0aFNlbmRlcjogdGhpcy5wYXRoIH0pO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cbn1cbiJdfQ==