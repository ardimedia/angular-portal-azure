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
import { ValidationsExceptionDotNet } from './exception-dot-net';
var Exception = /** @class */ (function (_super) {
    __extends(Exception, _super);
    function Exception() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // #endregion
    // #region Static Methods
    // #endregion
    // #region Static Methods
    /**
     * @param {?} exception
     * @return {?}
     */
    Exception.getOneLineMessage = 
    // #endregion
    // #region Static Methods
    /**
     * @param {?} exception
     * @return {?}
     */
    function (exception) {
        /** @type {?} */
        var message = '';
        if (exception.Message !== undefined) {
            if (exception.Message.toLowerCase().indexOf('cannot insert duplicate key in object') >= 0
                || exception.Message.toLowerCase().indexOf('the duplicate key value is') >= 0) {
                console.debug(exception.Message);
                return 'Datensatz mit gleichem Key (SchlÃ¼ssel) bereits vorhanden!';
            }
            if (exception.Message.toLowerCase().indexOf('the delete statement conflicted with the reference constraint') >= 0) {
                console.debug(exception.Message);
                return 'Datensatz kann nicht gelÃ¶scht werden, da noch abhÃ¤ngige Daten vorhanden sind!';
            }
            if (exception.Message.toLowerCase().indexOf('see the inner exception for details') >= 0) {
                // Frist innerException
                /** @type {?} */
                var innerException = exception.InnerException;
                if (exception.InnerException.Message.toLowerCase().indexOf('see the inner exception for details') >= 0) {
                    // Second innerException
                    /** @type {?} */
                    var innerException_1 = exception.InnerException.InnerException;
                    if (exception.InnerException.InnerException.Message.toLowerCase().indexOf('see the inner exception for details') >= 0) {
                        // Third innerException
                        /** @type {?} */
                        var innerException_2 = exception.InnerException.InnerException.InnerException;
                    }
                }
                console.debug(exception);
                return innerException.Message;
            }
            message = message + exception.Message + ' ';
            return message;
        }
        if (exception.Messages !== undefined) {
            if (exception.Messages.length > 0) {
                message = '';
                exception.Messages.forEach((/**
                 * @param {?} item
                 * @param {?} index
                 * @return {?}
                 */
                function (item, index) {
                    if (index > 0) {
                        message = message + ' - ';
                    }
                    message = message + item;
                }));
                return message;
            }
        }
        if (exception.ExceptionMessage !== undefined && ((/** @type {?} */ (exception.ExceptionMessage))).toLowerCase().indexOf('see the inner exception for details') < 0) {
            message = message + ': ' + exception.ExceptionMessage + ' ';
            return message;
        }
        if (exception.ExceptionMessage !== undefined && ((/** @type {?} */ (exception.ExceptionMessage))).toLowerCase().indexOf('see the inner exception for details') >= 0) {
            if (exception.InnerException !== undefined) {
                if (exception.InnerException.InnerException !== undefined) {
                    message = message + ': ' + exception.InnerException.InnerException.ExceptionMessage + ' ';
                    return message;
                }
                else {
                    message = message + ': ' + exception.InnerException.ExceptionMessage + ' ';
                    return message;
                }
            }
        }
        // Default handler
        console.debug(exception);
        message = message + ': JavaScript-Fehler oder Probleme mit der Internetverbindung. Weitere Informationen im Log (change log to full = debug). ' + exception;
        return message;
    };
    // TODO:2018-10-10/hp: [angular.IHttpPromiseCallbackArg<Exception>] should be Response
    // TODO:2018-10-10/hp: [angular.IHttpPromiseCallbackArg<Exception>] should be Response
    /**
     * @param {?} response
     * @return {?}
     */
    Exception.prepareException = 
    // TODO:2018-10-10/hp: [angular.IHttpPromiseCallbackArg<Exception>] should be Response
    /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        /** @type {?} */
        var exception = Exception.createException();
        // #region Process (Angular 1) response.data.Data
        if (response.data !== undefined && response.data.Data !== undefined) {
            exception = Exception.processResponseData(exception, response.data.Data);
        }
        // #endregion
        // #region Process (Angular 2) response.json().Data (EntityValidationException, etc.)
        else if (response.json !== undefined && response.json().Data != undefined) {
            exception = Exception.processResponseData(exception, response.json().Data);
        }
        // #endregion
        // #region Process (Angular 2) response._body
        else if (response._body !== undefined) {
            /** @type {?} */
            var body = JSON.parse(response._body);
            if (body.Message) {
                exception.Message = body.Message;
            }
        }
        // #endregion
        // #region Process (Angular 2) response.InnerException.InnerException.Message
        else if (response.json !== undefined && response.json !== null
            && response.json().InnerException !== undefined && response.json().InnerException !== null
            && response.json().InnerException.InnerException !== undefined && response.json().InnerException.InnerException !== null) {
            exception.Message = response.json().InnerException.InnerException.Message;
        }
        // #endregion
        //exception.convertResponse(response);
        exception.Url = response.url;
        exception.Status = response.status;
        exception.StatusText = response.statusText;
        return exception;
    };
    /**
     * @private
     * @return {?}
     */
    Exception.createException = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var exception = new Exception();
        exception.Messages = [];
        return exception;
    };
    //private static processResponseWithData(exception: Exception, response: angular.IHttpPromiseCallbackArg<Exception>): Exception {
    //    console.debug('Exception.processResponseWithData');
    //    // #region Convert data to Messages
    //    if (response.data.Data === undefined) {
    //        exception.Messages.push('No further information found in [response.data.Data].');
    //        exception.Messages.push('No further information found in [response.data.Data].');
    //    } else {
    //        let i = 1;
    //        while (response.data.Data[i + ''] !== undefined) {
    //            console.debug('Add to exception.Messages : ' + response.data.Data[i + '']);
    //            exception.Messages.push(response.data.Data[i + '']);
    //            i++;
    //        }
    //    }
    //    // #endregion
    //    return exception;
    //}
    //private static processResponseWithData(exception: Exception, response: angular.IHttpPromiseCallbackArg<Exception>): Exception {
    //    console.debug('Exception.processResponseWithData');
    //    // #region Convert data to Messages
    //    if (response.data.Data === undefined) {
    //        exception.Messages.push('No further information found in [response.data.Data].');
    //        exception.Messages.push('No further information found in [response.data.Data].');
    //    } else {
    //        let i = 1;
    //        while (response.data.Data[i + ''] !== undefined) {
    //            console.debug('Add to exception.Messages : ' + response.data.Data[i + '']);
    //            exception.Messages.push(response.data.Data[i + '']);
    //            i++;
    //        }
    //    }
    //    // #endregion
    //    return exception;
    //}
    /**
     * @private
     * @param {?} exception
     * @param {?} data
     * @return {?}
     */
    Exception.processResponseData = 
    //private static processResponseWithData(exception: Exception, response: angular.IHttpPromiseCallbackArg<Exception>): Exception {
    //    console.debug('Exception.processResponseWithData');
    //    // #region Convert data to Messages
    //    if (response.data.Data === undefined) {
    //        exception.Messages.push('No further information found in [response.data.Data].');
    //        exception.Messages.push('No further information found in [response.data.Data].');
    //    } else {
    //        let i = 1;
    //        while (response.data.Data[i + ''] !== undefined) {
    //            console.debug('Add to exception.Messages : ' + response.data.Data[i + '']);
    //            exception.Messages.push(response.data.Data[i + '']);
    //            i++;
    //        }
    //    }
    //    // #endregion
    //    return exception;
    //}
    /**
     * @private
     * @param {?} exception
     * @param {?} data
     * @return {?}
     */
    function (exception, data) {
        /** @type {?} */
        var i = 1;
        while (data[i + ''] !== undefined) {
            exception.Messages.push(data[i + '']);
            i++;
        }
        return exception;
    };
    return Exception;
}(ValidationsExceptionDotNet));
export { Exception };
if (false) {
    /** @type {?} */
    Exception.prototype.Type;
    /** @type {?} */
    Exception.prototype.MessageDetail;
    /** @type {?} */
    Exception.prototype.Messages;
    /** @type {?} */
    Exception.prototype.Status;
    /** @type {?} */
    Exception.prototype.StatusText;
    /** @type {?} */
    Exception.prototype.Url;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvZG9tYWluL2V4Y2VwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpFO0lBQStCLDZCQUEwQjtJQUF6RDs7SUEwTEEsQ0FBQztJQS9LRyxhQUFhO0lBRWIseUJBQXlCOzs7Ozs7O0lBRWxCLDJCQUFpQjs7Ozs7OztJQUF4QixVQUF5QixTQUFvQjs7WUFDckMsT0FBTyxHQUFXLEVBQUU7UUFFeEIsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUNqQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLHVDQUF1QyxDQUFDLElBQUksQ0FBQzttQkFDbEYsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQy9FLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLDREQUE0RCxDQUFDO2FBQ3ZFO1lBRUQsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQywrREFBK0QsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDL0csT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8saUZBQWlGLENBQUM7YUFDNUY7WUFFRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxDQUFDLElBQUksQ0FBQyxFQUFFOzs7b0JBRWpGLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYztnQkFDN0MsSUFBSSxTQUFT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Q3RCLDZCQUFtQjs7SUFDbkIsMkJBQTJCOztJQUMzQiwrQkFBK0I7O0lBQy9CLHdCQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbnNFeGNlcHRpb25Eb3ROZXQgfSBmcm9tICcuL2V4Y2VwdGlvbi1kb3QtbmV0JztcblxuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbiBleHRlbmRzIFZhbGlkYXRpb25zRXhjZXB0aW9uRG90TmV0IHtcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcblxuICAgIC8vIEhUVFAgU2VydmVyXG4gICAgVHlwZTogc3RyaW5nO1xuICAgIE1lc3NhZ2VEZXRhaWw6IHN0cmluZztcbiAgICBNZXNzYWdlczogc3RyaW5nW107XG4gICAgU3RhdHVzOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgU3RhdHVzVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIFVybDogc3RyaW5nO1xuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBTdGF0aWMgTWV0aG9kc1xuXG4gICAgc3RhdGljIGdldE9uZUxpbmVNZXNzYWdlKGV4Y2VwdGlvbjogRXhjZXB0aW9uKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IG1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gICAgICAgIGlmIChleGNlcHRpb24uTWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoZXhjZXB0aW9uLk1lc3NhZ2UudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjYW5ub3QgaW5zZXJ0IGR1cGxpY2F0ZSBrZXkgaW4gb2JqZWN0JykgPj0gMFxuICAgICAgICAgICAgICAgIHx8IGV4Y2VwdGlvbi5NZXNzYWdlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndGhlIGR1cGxpY2F0ZSBrZXkgdmFsdWUgaXMnKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhleGNlcHRpb24uTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdEYXRlbnNhdHogbWl0IGdsZWljaGVtIEtleSAoU2NobMODwrxzc2VsKSBiZXJlaXRzIHZvcmhhbmRlbiEnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXhjZXB0aW9uLk1lc3NhZ2UudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd0aGUgZGVsZXRlIHN0YXRlbWVudCBjb25mbGljdGVkIHdpdGggdGhlIHJlZmVyZW5jZSBjb25zdHJhaW50JykgPj0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoZXhjZXB0aW9uLk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnRGF0ZW5zYXR6IGthbm4gbmljaHQgZ2Vsw4PCtnNjaHQgd2VyZGVuLCBkYSBub2NoIGFiaMODwqRuZ2lnZSBEYXRlbiB2b3JoYW5kZW4gc2luZCEnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXhjZXB0aW9uLk1lc3NhZ2UudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZWUgdGhlIGlubmVyIGV4Y2VwdGlvbiBmb3IgZGV0YWlscycpID49IDApIHtcbiAgICAgICAgICAgICAgICAvLyBGcmlzdCBpbm5lckV4Y2VwdGlvblxuICAgICAgICAgICAgICAgIGxldCBpbm5lckV4Y2VwdGlvbiA9IGV4Y2VwdGlvbi5Jbm5lckV4Y2VwdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAoZXhjZXB0aW9uLklubmVyRXhjZXB0aW9uLk1lc3NhZ2UudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZWUgdGhlIGlubmVyIGV4Y2VwdGlvbiBmb3IgZGV0YWlscycpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2Vjb25kIGlubmVyRXhjZXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbm5lckV4Y2VwdGlvbiA9IGV4Y2VwdGlvbi5Jbm5lckV4Y2VwdGlvbi5Jbm5lckV4Y2VwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2VwdGlvbi5Jbm5lckV4Y2VwdGlvbi5Jbm5lckV4Y2VwdGlvbi5NZXNzYWdlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VlIHRoZSBpbm5lciBleGNlcHRpb24gZm9yIGRldGFpbHMnKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlyZCBpbm5lckV4Y2VwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlubmVyRXhjZXB0aW9uID0gZXhjZXB0aW9uLklubmVyRXhjZXB0aW9uLklubmVyRXhjZXB0aW9uLklubmVyRXhjZXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoZXhjZXB0aW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5uZXJFeGNlcHRpb24uTWVzc2FnZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgKyBleGNlcHRpb24uTWVzc2FnZSArICcgJztcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4Y2VwdGlvbi5NZXNzYWdlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoZXhjZXB0aW9uLk1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gJyc7XG4gICAgICAgICAgICAgICAgZXhjZXB0aW9uLk1lc3NhZ2VzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlICsgJyAtICc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgKyBpdGVtO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4Y2VwdGlvbi5FeGNlcHRpb25NZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgKDxzdHJpbmc+ZXhjZXB0aW9uLkV4Y2VwdGlvbk1lc3NhZ2UpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VlIHRoZSBpbm5lciBleGNlcHRpb24gZm9yIGRldGFpbHMnKSA8IDApIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlICsgJzogJyArIGV4Y2VwdGlvbi5FeGNlcHRpb25NZXNzYWdlICsgJyAnO1xuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhjZXB0aW9uLkV4Y2VwdGlvbk1lc3NhZ2UgIT09IHVuZGVmaW5lZCAmJiAoPHN0cmluZz5leGNlcHRpb24uRXhjZXB0aW9uTWVzc2FnZSkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZWUgdGhlIGlubmVyIGV4Y2VwdGlvbiBmb3IgZGV0YWlscycpID49IDApIHtcbiAgICAgICAgICAgIGlmIChleGNlcHRpb24uSW5uZXJFeGNlcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChleGNlcHRpb24uSW5uZXJFeGNlcHRpb24uSW5uZXJFeGNlcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZSArICc6ICcgKyBleGNlcHRpb24uSW5uZXJFeGNlcHRpb24uSW5uZXJFeGNlcHRpb24uRXhjZXB0aW9uTWVzc2FnZSArICcgJztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgKyAnOiAnICsgZXhjZXB0aW9uLklubmVyRXhjZXB0aW9uLkV4Y2VwdGlvbk1lc3NhZ2UgKyAnICc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmF1bHQgaGFuZGxlclxuICAgICAgICBjb25zb2xlLmRlYnVnKGV4Y2VwdGlvbik7XG4gICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlICsgJzogSmF2YVNjcmlwdC1GZWhsZXIgb2RlciBQcm9ibGVtZSBtaXQgZGVyIEludGVybmV0dmVyYmluZHVuZy4gV2VpdGVyZSBJbmZvcm1hdGlvbmVuIGltIExvZyAoY2hhbmdlIGxvZyB0byBmdWxsID0gZGVidWcpLiAnICsgZXhjZXB0aW9uO1xuXG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cblxuICAgIC8vIFRPRE86MjAxOC0xMC0xMC9ocDogW2FuZ3VsYXIuSUh0dHBQcm9taXNlQ2FsbGJhY2tBcmc8RXhjZXB0aW9uPl0gc2hvdWxkIGJlIFJlc3BvbnNlXG4gICAgc3RhdGljIHByZXBhcmVFeGNlcHRpb24ocmVzcG9uc2U6IFByb21pc2U8RXhjZXB0aW9uPiB8IGFueSk6IEV4Y2VwdGlvbiB7XG4gICAgICAgIGxldCBleGNlcHRpb24gPSBFeGNlcHRpb24uY3JlYXRlRXhjZXB0aW9uKCk7XG5cbiAgICAgICAgLy8gI3JlZ2lvbiBQcm9jZXNzIChBbmd1bGFyIDEpIHJlc3BvbnNlLmRhdGEuRGF0YVxuXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhICE9PSB1bmRlZmluZWQgJiYgcmVzcG9uc2UuZGF0YS5EYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5wcm9jZXNzUmVzcG9uc2VEYXRhKGV4Y2VwdGlvbiwgcmVzcG9uc2UuZGF0YS5EYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICNlbmRyZWdpb25cblxuICAgICAgICAvLyAjcmVnaW9uIFByb2Nlc3MgKEFuZ3VsYXIgMikgcmVzcG9uc2UuanNvbigpLkRhdGEgKEVudGl0eVZhbGlkYXRpb25FeGNlcHRpb24sIGV0Yy4pXG5cbiAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuanNvbiAhPT0gdW5kZWZpbmVkICYmIHJlc3BvbnNlLmpzb24oKS5EYXRhICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLnByb2Nlc3NSZXNwb25zZURhdGEoZXhjZXB0aW9uLCByZXNwb25zZS5qc29uKCkuRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgICAgLy8gI3JlZ2lvbiBQcm9jZXNzIChBbmd1bGFyIDIpIHJlc3BvbnNlLl9ib2R5XG5cbiAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuX2JvZHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBKU09OLnBhcnNlKHJlc3BvbnNlLl9ib2R5KTtcbiAgICAgICAgICAgIGlmIChib2R5Lk1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBleGNlcHRpb24uTWVzc2FnZSA9IGJvZHkuTWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vICNlbmRyZWdpb25cblxuICAgICAgICAvLyAjcmVnaW9uIFByb2Nlc3MgKEFuZ3VsYXIgMikgcmVzcG9uc2UuSW5uZXJFeGNlcHRpb24uSW5uZXJFeGNlcHRpb24uTWVzc2FnZVxuXG4gICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLmpzb24gIT09IHVuZGVmaW5lZCAmJiByZXNwb25zZS5qc29uICE9PSBudWxsXG4gICAgICAgICAgICAmJiByZXNwb25zZS5qc29uKCkuSW5uZXJFeGNlcHRpb24gIT09IHVuZGVmaW5lZCAmJiByZXNwb25zZS5qc29uKCkuSW5uZXJFeGNlcHRpb24gIT09IG51bGxcbiAgICAgICAgICAgICYmIHJlc3BvbnNlLmpzb24oKS5Jbm5lckV4Y2VwdGlvbi5Jbm5lckV4Y2VwdGlvbiAhPT0gdW5kZWZpbmVkICYmIHJlc3BvbnNlLmpzb24oKS5Jbm5lckV4Y2VwdGlvbi5Jbm5lckV4Y2VwdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZXhjZXB0aW9uLk1lc3NhZ2UgPSByZXNwb25zZS5qc29uKCkuSW5uZXJFeGNlcHRpb24uSW5uZXJFeGNlcHRpb24uTWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICNlbmRyZWdpb25cblxuICAgICAgICAvL2V4Y2VwdGlvbi5jb252ZXJ0UmVzcG9uc2UocmVzcG9uc2UpO1xuXG4gICAgICAgIGV4Y2VwdGlvbi5VcmwgPSByZXNwb25zZS51cmw7XG4gICAgICAgIGV4Y2VwdGlvbi5TdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgIGV4Y2VwdGlvbi5TdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcblxuICAgICAgICByZXR1cm4gZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZUV4Y2VwdGlvbigpOiBFeGNlcHRpb24ge1xuICAgICAgICBsZXQgZXhjZXB0aW9uOiBFeGNlcHRpb24gPSBuZXcgRXhjZXB0aW9uKCk7XG4gICAgICAgIGV4Y2VwdGlvbi5NZXNzYWdlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIC8vcHJpdmF0ZSBzdGF0aWMgcHJvY2Vzc1Jlc3BvbnNlV2l0aERhdGEoZXhjZXB0aW9uOiBFeGNlcHRpb24sIHJlc3BvbnNlOiBhbmd1bGFyLklIdHRwUHJvbWlzZUNhbGxiYWNrQXJnPEV4Y2VwdGlvbj4pOiBFeGNlcHRpb24ge1xuICAgIC8vICAgIGNvbnNvbGUuZGVidWcoJ0V4Y2VwdGlvbi5wcm9jZXNzUmVzcG9uc2VXaXRoRGF0YScpO1xuICAgIC8vICAgIC8vICNyZWdpb24gQ29udmVydCBkYXRhIHRvIE1lc3NhZ2VzXG5cbiAgICAvLyAgICBpZiAocmVzcG9uc2UuZGF0YS5EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyAgICAgICAgZXhjZXB0aW9uLk1lc3NhZ2VzLnB1c2goJ05vIGZ1cnRoZXIgaW5mb3JtYXRpb24gZm91bmQgaW4gW3Jlc3BvbnNlLmRhdGEuRGF0YV0uJyk7XG4gICAgLy8gICAgICAgIGV4Y2VwdGlvbi5NZXNzYWdlcy5wdXNoKCdObyBmdXJ0aGVyIGluZm9ybWF0aW9uIGZvdW5kIGluIFtyZXNwb25zZS5kYXRhLkRhdGFdLicpO1xuICAgIC8vICAgIH0gZWxzZSB7XG5cbiAgICAvLyAgICAgICAgbGV0IGkgPSAxO1xuICAgIC8vICAgICAgICB3aGlsZSAocmVzcG9uc2UuZGF0YS5EYXRhW2kgKyAnJ10gIT09IHVuZGVmaW5lZCkge1xuICAgIC8vICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnQWRkIHRvIGV4Y2VwdGlvbi5NZXNzYWdlcyA6ICcgKyByZXNwb25zZS5kYXRhLkRhdGFbaSArICcnXSk7XG4gICAgLy8gICAgICAgICAgICBleGNlcHRpb24uTWVzc2FnZXMucHVzaChyZXNwb25zZS5kYXRhLkRhdGFbaSArICcnXSk7XG4gICAgLy8gICAgICAgICAgICBpKys7XG4gICAgLy8gICAgICAgIH1cbiAgICAvLyAgICB9XG5cbiAgICAvLyAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAgICByZXR1cm4gZXhjZXB0aW9uO1xuICAgIC8vfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcHJvY2Vzc1Jlc3BvbnNlRGF0YShleGNlcHRpb246IEV4Y2VwdGlvbiwgZGF0YTogYW55W10pOiBFeGNlcHRpb24ge1xuICAgICAgICBsZXQgaSA9IDE7XG4gICAgICAgIHdoaWxlIChkYXRhW2kgKyAnJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZXhjZXB0aW9uLk1lc3NhZ2VzLnB1c2goZGF0YVtpICsgJyddKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleGNlcHRpb247XG4gICAgfVxuXG4gICAgLy8gVE9ETzoyMDE3LTAxLTA5L2hwOiBJbXBsZW1lbnQgdGhpcyBmdW5jdGlvbiBmb3IgYW5ndWxhcjJcbiAgICAvL3ByaXZhdGUgc3RhdGljIHByb2Nlc3NEb3ROZXRFeGNlcHRpb24yKGV4Y2VwdGlvbjogRXhjZXB0aW9uLCByZXNwb25zZTogYW55KTogRXhjZXB0aW9uIHtcbiAgICAvLyAgICBjb25zb2xlLmRlYnVnKCdFeGNlcHRpb24ucHJvY2Vzc0RvdE5ldEV4Y2VwdGlvbjInKTtcblxuICAgIC8vICAgIGlmIChyZXNwb25zZS5qc29uKCkuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gICAgICAgIGNvbnNvbGUuZGVidWcoJ1tFeGNlcHRpb24ucHJvY2Vzc0RvdE5ldEV4Y2VwdGlvbjJdIG5vdCBpbXBsZW1lbnRlZC4gSW1wbGVtZW50IGl0IHRvIGdldCBwcm9wZXIgZXhjZXB0aW9uIGRhdGEuJyk7XG4gICAgLy8gICAgfVxuXG4gICAgLy8gICAgcmV0dXJuIGV4Y2VwdGlvbjtcbiAgICAvL31cblxuICAgIC8vICNlbmRyZWdpb25cbn1cbiJdfQ==