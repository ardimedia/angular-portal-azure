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
var ValidationResultDotNet = /** @class */ (function () {
    function ValidationResultDotNet() {
    }
    return ValidationResultDotNet;
}());
export { ValidationResultDotNet };
if (false) {
    /** @type {?} */
    ValidationResultDotNet.prototype.ErrorMessage;
    /** @type {?} */
    ValidationResultDotNet.prototype.MemberNames;
}
var ExceptionDotNet = /** @class */ (function () {
    function ExceptionDotNet() {
    }
    return ExceptionDotNet;
}());
export { ExceptionDotNet };
if (false) {
    /** @type {?} */
    ExceptionDotNet.prototype.ClassName;
    /** @type {?} */
    ExceptionDotNet.prototype.Data;
    /** @type {?} */
    ExceptionDotNet.prototype.ExceptionMethod;
    /** @type {?} */
    ExceptionDotNet.prototype.HelpURL;
    /** @type {?} */
    ExceptionDotNet.prototype.HelpLink;
    /** @type {?} */
    ExceptionDotNet.prototype.HResult;
    /** @type {?} */
    ExceptionDotNet.prototype.InnerException;
    /** @type {?} */
    ExceptionDotNet.prototype.Message;
    /** @type {?} */
    ExceptionDotNet.prototype.RemoteStackIndex;
    /** @type {?} */
    ExceptionDotNet.prototype.RemoteStackTraceString;
    /** @type {?} */
    ExceptionDotNet.prototype.Source;
    /** @type {?} */
    ExceptionDotNet.prototype.StackTrace;
    /** @type {?} */
    ExceptionDotNet.prototype.WatsonBuckets;
    /**
     * @deprecated ExceptionMessage is obsolete
     * @type {?}
     */
    ExceptionDotNet.prototype.ExceptionMessage;
    /**
     * @deprecated ExceptionType is obsolete
     * @type {?}
     */
    ExceptionDotNet.prototype.ExceptionType;
}
var ArgumentNullException = /** @class */ (function (_super) {
    __extends(ArgumentNullException, _super);
    function ArgumentNullException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ArgumentNullException;
}(ExceptionDotNet));
export { ArgumentNullException };
if (false) {
    /** @type {?} */
    ArgumentNullException.prototype.ParamName;
}
var EntityValidationException = /** @class */ (function (_super) {
    __extends(EntityValidationException, _super);
    function EntityValidationException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EntityValidationException;
}(ExceptionDotNet));
export { EntityValidationException };
if (false) {
    /** @type {?} */
    EntityValidationException.prototype.Data;
    /** @type {?} */
    EntityValidationException.prototype.ValidationResults;
}
/**
 * @deprecated ValidationsExceptionDotNet should be replaced by EntityValidationException
 */
var /**
 * @deprecated ValidationsExceptionDotNet should be replaced by EntityValidationException
 */
ValidationsExceptionDotNet = /** @class */ (function (_super) {
    __extends(ValidationsExceptionDotNet, _super);
    function ValidationsExceptionDotNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ValidationsExceptionDotNet;
}(EntityValidationException));
/**
 * @deprecated ValidationsExceptionDotNet should be replaced by EntityValidationException
 */
export { ValidationsExceptionDotNet };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLWRvdC1uZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vZXhjZXB0aW9uLWRvdC1uZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBR0EsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGRyw4Q0FBcUI7O0lBQ3JCLDZDQUFzQjs7QUFHMUI7SUFBQTtJQXdCQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDOzs7O0lBdEJHLG9DQUF5Qjs7SUFDekIsK0JBQThDOztJQUM5QywwQ0FBK0I7O0lBQy9CLGtDQUE4Qjs7SUFDOUIsbUNBQStCOztJQUMvQixrQ0FBZ0I7O0lBQ2hCLHlDQUF1Qzs7SUFDdkMsa0NBQXVCOztJQUN2QiwyQ0FBZ0M7O0lBQ2hDLGlEQUE2Qzs7SUFDN0MsaUNBQWU7O0lBQ2YscUNBQW1COztJQUNuQix3Q0FBb0M7Ozs7O0lBS3BDLDJDQUFnQzs7Ozs7SUFJaEMsd0NBQTZCOztBQUdqQztJQUEyQyx5Q0FBZTtJQUExRDs7SUFFQSxDQUFDO0lBQUQsNEJBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBMkMsZUFBZSxHQUV6RDs7OztJQURHLDBDQUFrQjs7QUFHdEI7SUFBK0MsNkNBQWU7SUFBOUQ7O0lBa0RBLENBQUM7SUFBRCxnQ0FBQztBQUFELENBQUMsQUFsREQsQ0FBK0MsZUFBZSxHQWtEN0Q7Ozs7SUFqREcseUNBQXVDOztJQUN2QyxzREFBNEM7Ozs7O0FBcURoRDs7OztJQUFnRCw4Q0FBeUI7SUFBekU7O0lBQ0EsQ0FBQztJQUFELGlDQUFDO0FBQUQsQ0FBQyxBQURELENBQWdELHlCQUF5QixHQUN4RSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uUmVzdWx0RG90TmV0IHtcbiAgICBFcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBNZW1iZXJOYW1lczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25Eb3ROZXQge1xuICAgIC8vIC5ORVQgRXhjZXB0aW9uICh0aGUgZm9sbG93aW5nIGZpZWxkcyBhcmUgdHJhbnNtaXR0ZWQgb3ZlciB0aGUgd2lyZSlcbiAgICBDbGFzc05hbWU6IHN0cmluZyB8IHZvaWQ7XG4gICAgRGF0YTogeyBrZXk6IG51bWJlciwgdmFsdWU6IHN0cmluZyB9W10gfCBudWxsO1xuICAgIEV4Y2VwdGlvbk1ldGhvZDogc3RyaW5nIHwgdm9pZDtcbiAgICBIZWxwVVJMOiBzdHJpbmcgfCBudWxsIHwgdm9pZDtcbiAgICBIZWxwTGluazogc3RyaW5nIHwgbnVsbCB8IHZvaWQ7XG4gICAgSFJlc3VsdDogbnVtYmVyO1xuICAgIElubmVyRXhjZXB0aW9uOiBFeGNlcHRpb25Eb3ROZXQgfCBudWxsO1xuICAgIE1lc3NhZ2U6IHN0cmluZyB8IG51bGw7XG4gICAgUmVtb3RlU3RhY2tJbmRleDogbnVtYmVyIHwgdm9pZDtcbiAgICBSZW1vdGVTdGFja1RyYWNlU3RyaW5nOiBzdHJpbmcgfCBudWxsIHwgdm9pZDtcbiAgICBTb3VyY2U6IHN0cmluZztcbiAgICBTdGFja1RyYWNlOiBzdHJpbmc7XG4gICAgV2F0c29uQnVja2V0czogc3RyaW5nIHwgbnVsbCB8IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiAgQGRlcHJlY2F0ZWQgRXhjZXB0aW9uTWVzc2FnZSBpcyBvYnNvbGV0ZVxuICAgICAqL1xuICAgIEV4Y2VwdGlvbk1lc3NhZ2U6IHN0cmluZyB8IHZvaWQ7XG4gICAgLyoqXG4gICAgICogIEBkZXByZWNhdGVkIEV4Y2VwdGlvblR5cGUgaXMgb2Jzb2xldGVcbiAgICAgKi9cbiAgICBFeGNlcHRpb25UeXBlOiBzdHJpbmcgfCB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQXJndW1lbnROdWxsRXhjZXB0aW9uIGV4dGVuZHMgRXhjZXB0aW9uRG90TmV0IHtcbiAgICBQYXJhbU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEVudGl0eVZhbGlkYXRpb25FeGNlcHRpb24gZXh0ZW5kcyBFeGNlcHRpb25Eb3ROZXQge1xuICAgIERhdGE6IHsga2V5OiBudW1iZXIsIHZhbHVlOiBzdHJpbmcgfVtdO1xuICAgIFZhbGlkYXRpb25SZXN1bHRzOiBWYWxpZGF0aW9uUmVzdWx0RG90TmV0W107XG5cbiAgICAvL3B1YmxpYyBjb252ZXJ0UmVzcG9uc2UocmVzcG9uc2U6IGFueSkge1xuICAgIC8vICAgIGlmIChyZXNwb25zZS5oZWFkZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyAgICAgICAgY29uc29sZS5kZWJ1ZygnRW50aXR5VmFsaWRhdGlvbkV4Y2VwdGlvbi5jb252ZXJ0UmVzcG9uc2UgLSByZXNwb25zZS5kYXRhJyk7XG4gICAgLy8gICAgICAgIFZhbGlkYXRpb25zRXhjZXB0aW9uRG90TmV0LmNvbnZlcnRSZXNwb25zZSh0aGlzLCByZXNwb25zZS5kYXRhKTtcbiAgICAvLyAgICAgICAgVmFsaWRhdGlvbnNFeGNlcHRpb25Eb3ROZXQuY29udmVydEV4Y2VwdGlvblR5cGUodGhpcywgcmVzcG9uc2UuZGF0YSk7XG4gICAgLy8gICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgY29uc29sZS5kZWJ1ZygnRW50aXR5VmFsaWRhdGlvbkV4Y2VwdGlvbi5jb252ZXJ0UmVzcG9uc2UgLSByZXNwb25zZS5qc29uKCknKTtcbiAgICAvLyAgICAgICAgVmFsaWRhdGlvbnNFeGNlcHRpb25Eb3ROZXQuY29udmVydFJlc3BvbnNlKHRoaXMsIHJlc3BvbnNlLmpzb24oKSk7XG4gICAgLy8gICAgICAgIFZhbGlkYXRpb25zRXhjZXB0aW9uRG90TmV0LmNvbnZlcnRFeGNlcHRpb25UeXBlKHRoaXMsIHJlc3BvbnNlLmpzb24oKSk7XG4gICAgLy8gICAgfVxuICAgIC8vfVxuXG4gICAgLy9wcm90ZWN0ZWQgc3RhdGljIGNvbnZlcnRSZXNwb25zZShleGNlcHRpb25UbzogRW50aXR5VmFsaWRhdGlvbkV4Y2VwdGlvbiB8IFZhbGlkYXRpb25zRXhjZXB0aW9uRG90TmV0LCByZXNwb25zZURhdGFGcm9tOiBFeGNlcHRpb25Eb3ROZXQpOiB2b2lkIHtcbiAgICAvLyAgICBjb25zb2xlLmRlYnVnKCdFbnRpdHlWYWxpZGF0aW9uRXhjZXB0aW9uLmNvbnZlcnRSZXNwb25zZScpO1xuXG4gICAgLy8gICAgZXhjZXB0aW9uVG8uRXhjZXB0aW9uTWVzc2FnZSA9IHJlc3BvbnNlRGF0YUZyb20uRXhjZXB0aW9uTWVzc2FnZTtcbiAgICAvLyAgICBleGNlcHRpb25Uby5NZXNzYWdlID0gcmVzcG9uc2VEYXRhRnJvbS5NZXNzYWdlO1xuICAgIC8vICAgIGV4Y2VwdGlvblRvLlN0YWNrVHJhY2UgPSByZXNwb25zZURhdGFGcm9tLlN0YWNrVHJhY2U7XG4gICAgLy8gICAgZXhjZXB0aW9uVG8uSW5uZXJFeGNlcHRpb24gPSByZXNwb25zZURhdGFGcm9tLklubmVyRXhjZXB0aW9uO1xuICAgIC8vfVxuXG4gICAgLy9wcm90ZWN0ZWQgc3RhdGljIGNvbnZlcnRFeGNlcHRpb25UeXBlKGV4Y2VwdGlvbjogRW50aXR5VmFsaWRhdGlvbkV4Y2VwdGlvbiB8IFZhbGlkYXRpb25zRXhjZXB0aW9uRG90TmV0LCByZXNwb25zZURhdGE6IGFueSk6IHZvaWQge1xuICAgIC8vICAgIGlmIChyZXNwb25zZURhdGEuRXhjZXB0aW9uVHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gICAgICAgIGNvbnNvbGUuZGVidWcoJ0VudGl0eVZhbGlkYXRpb25FeGNlcHRpb24uY29udmVydEV4Y2VwdGlvblR5cGUgLSB1bmRlZmluZWQnKTtcbiAgICAvLyAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgIH1cbiAgICAvLyAgICBlbHNlIGlmIChyZXNwb25zZURhdGEuRXhjZXB0aW9uVHlwZSA9PT0gJ1N5c3RlbS5EYXRhLkVudGl0eS5WYWxpZGF0aW9uLkRiRW50aXR5VmFsaWRhdGlvbkV4Y2VwdGlvbicpIHtcbiAgICAvLyAgICAgICAgY29uc29sZS5kZWJ1ZygnRW50aXR5VmFsaWRhdGlvbkV4Y2VwdGlvbi5jb252ZXJ0RXhjZXB0aW9uVHlwZSAtIERiRW50aXR5VmFsaWRhdGlvbkV4Y2VwdGlvbicpO1xuICAgIC8vICAgICAgICBleGNlcHRpb24uRXhjZXB0aW9uVHlwZSA9ICdEYkVudGl0eVZhbGlkYXRpb25FeGNlcHRpb24nO1xuICAgIC8vICAgICAgICByZXR1cm47XG4gICAgLy8gICAgfVxuICAgIC8vICAgIGVsc2UgaWYgKHJlc3BvbnNlRGF0YS5FeGNlcHRpb25UeXBlID09PSAnU3lzdGVtLkRhdGEuRW50aXR5LkluZnJhc3RydWN0dXJlLkRiVXBkYXRlQ29uY3VycmVuY3lFeGNlcHRpb24nKSB7XG4gICAgLy8gICAgICAgIGNvbnNvbGUuZGVidWcoJ0VudGl0eVZhbGlkYXRpb25FeGNlcHRpb24uY29udmVydEV4Y2VwdGlvblR5cGUgLSBEYlVwZGF0ZUNvbmN1cnJlbmN5RXhjZXB0aW9uJyk7XG4gICAgLy8gICAgICAgIGV4Y2VwdGlvbi5FeGNlcHRpb25UeXBlID0gJ0RiVXBkYXRlQ29uY3VycmVuY3lFeGNlcHRpb24nO1xuICAgIC8vICAgICAgICByZXR1cm47XG4gICAgLy8gICAgfVxuICAgIC8vICAgIGVsc2UgaWYgKHJlc3BvbnNlRGF0YS5DbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiByZXNwb25zZURhdGEuQ2xhc3NOYW1lLmluZGV4T2YoJ1ZhbGlkYXRpb25zRXhjZXB0aW9uJykgPiAwKSB7XG4gICAgLy8gICAgICAgIGNvbnNvbGUuZGVidWcoJ0VudGl0eVZhbGlkYXRpb25FeGNlcHRpb24uY29udmVydEV4Y2VwdGlvblR5cGUgLSBWYWxpZGF0aW9uc0V4Y2VwdGlvbicpO1xuICAgIC8vICAgICAgICBleGNlcHRpb24uRXhjZXB0aW9uVHlwZSA9ICdWYWxpZGF0aW9uc0V4Y2VwdGlvbic7XG4gICAgLy8gICAgICAgIHJldHVybjtcbiAgICAvLyAgICB9XG4gICAgLy8gICAgZWxzZSB7XG4gICAgLy8gICAgICAgIGNvbnNvbGUuZGVidWcoJ0VudGl0eVZhbGlkYXRpb25FeGNlcHRpb24uY29udmVydEV4Y2VwdGlvblR5cGUgLSBlbHNlJyk7XG4gICAgLy8gICAgICAgIGV4Y2VwdGlvbi5FeGNlcHRpb25UeXBlID0gcmVzcG9uc2VEYXRhLkV4Y2VwdGlvblR5cGU7XG4gICAgLy8gICAgfVxuICAgIC8vfVxufVxuXG4vKipcbiAqICBAZGVwcmVjYXRlZCBWYWxpZGF0aW9uc0V4Y2VwdGlvbkRvdE5ldCBzaG91bGQgYmUgcmVwbGFjZWQgYnkgRW50aXR5VmFsaWRhdGlvbkV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbnNFeGNlcHRpb25Eb3ROZXQgZXh0ZW5kcyBFbnRpdHlWYWxpZGF0aW9uRXhjZXB0aW9uIHtcbn1cbiJdfQ==