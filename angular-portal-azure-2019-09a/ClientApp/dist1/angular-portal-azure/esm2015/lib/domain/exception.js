/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ValidationsExceptionDotNet } from './exception-dot-net';
export class Exception extends ValidationsExceptionDotNet {
    // #endregion
    // #region Static Methods
    /**
     * @param {?} exception
     * @return {?}
     */
    static getOneLineMessage(exception) {
        /** @type {?} */
        let message = '';
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
                let innerException = exception.InnerException;
                if (exception.InnerException.Message.toLowerCase().indexOf('see the inner exception for details') >= 0) {
                    // Second innerException
                    /** @type {?} */
                    let innerException = exception.InnerException.InnerException;
                    if (exception.InnerException.InnerException.Message.toLowerCase().indexOf('see the inner exception for details') >= 0) {
                        // Third innerException
                        /** @type {?} */
                        let innerException = exception.InnerException.InnerException.InnerException;
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
                (item, index) => {
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
    }
    // TODO:2018-10-10/hp: [angular.IHttpPromiseCallbackArg<Exception>] should be Response
    /**
     * @param {?} response
     * @return {?}
     */
    static prepareException(response) {
        /** @type {?} */
        let exception = Exception.createException();
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
    }
    /**
     * @private
     * @return {?}
     */
    static createException() {
        /** @type {?} */
        let exception = new Exception();
        exception.Messages = [];
        return exception;
    }
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
    static processResponseData(exception, data) {
        /** @type {?} */
        let i = 1;
        while (data[i + ''] !== undefined) {
            exception.Messages.push(data[i + '']);
            i++;
        }
        return exception;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvZG9tYWluL2V4Y2VwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakUsTUFBTSxPQUFPLFNBQVUsU0FBUSwwQkFBMEI7Ozs7Ozs7SUFlckQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFNBQW9COztZQUNyQyxPQUFPLEdBQVcsRUFBRTtRQUV4QixJQUFJLFNBQVMsQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ2pDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsdUNBQXVDLENBQUMsSUFBSSxDQUFDO21CQUNsRixTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDL0UsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sNERBQTRELENBQUM7YUFDdkU7WUFFRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLCtEQUErRCxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvRyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakMsT0FBTyxpRkFBaUYsQ0FBQzthQUM1RjtZQUVELElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMscUNBQXFDLENBQUMsSUFBSSxDQUFDLEVBQUU7OztvQkFFakYsY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjO2dCQUM3QyxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9B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UUFBUSxDQUFDLEdBQUcsQ0FBQztRQUM3QixTQUFTLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDbkMsU0FBUyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBRTNDLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU8sTUFBTSxDQUFDLGVBQWU7O1lBQ3RCLFNBQVMsR0FBYyxJQUFJLFNBQVMsRUFBRTtRQUMxQyxTQUFTLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN4QixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qk8sTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQW9CLEVBQUUsSUFBVzs7WUFDNUQsQ0FBQyxHQUFHLENBQUM7UUFDVCxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQy9CLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QyxDQUFDLEVBQUUsQ0FBQztTQUNQO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztDQWNKOzs7SUF0TEcseUJBQWE7O0lBQ2Isa0NBQXNCOztJQUN0Qiw2QkFBbUI7O0lBQ25CLDJCQUEyQjs7SUFDM0IsK0JBQStCOztJQUMvQix3QkFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25zRXhjZXB0aW9uRG90TmV0IH0gZnJvbSAnLi9leGNlcHRpb24tZG90LW5ldCc7XG5cbmV4cG9ydCBjbGFzcyBFeGNlcHRpb24gZXh0ZW5kcyBWYWxpZGF0aW9uc0V4Y2VwdGlvbkRvdE5ldCB7XG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXG5cbiAgICAvLyBIVFRQIFNlcnZlclxuICAgIFR5cGU6IHN0cmluZztcbiAgICBNZXNzYWdlRGV0YWlsOiBzdHJpbmc7XG4gICAgTWVzc2FnZXM6IHN0cmluZ1tdO1xuICAgIFN0YXR1czogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIFN0YXR1c1RleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBVcmw6IHN0cmluZztcblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gU3RhdGljIE1ldGhvZHNcblxuICAgIHN0YXRpYyBnZXRPbmVMaW5lTWVzc2FnZShleGNlcHRpb246IEV4Y2VwdGlvbik6IHN0cmluZyB7XG4gICAgICAgIGxldCBtZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICAgICAgICBpZiAoZXhjZXB0aW9uLk1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGV4Y2VwdGlvbi5NZXNzYWdlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2Fubm90IGluc2VydCBkdXBsaWNhdGUga2V5IGluIG9iamVjdCcpID49IDBcbiAgICAgICAgICAgICAgICB8fCBleGNlcHRpb24uTWVzc2FnZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3RoZSBkdXBsaWNhdGUga2V5IHZhbHVlIGlzJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoZXhjZXB0aW9uLk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnRGF0ZW5zYXR6IG1pdCBnbGVpY2hlbSBLZXkgKFNjaGzDg8K8c3NlbCkgYmVyZWl0cyB2b3JoYW5kZW4hJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV4Y2VwdGlvbi5NZXNzYWdlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndGhlIGRlbGV0ZSBzdGF0ZW1lbnQgY29uZmxpY3RlZCB3aXRoIHRoZSByZWZlcmVuY2UgY29uc3RyYWludCcpID49IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGV4Y2VwdGlvbi5NZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0RhdGVuc2F0eiBrYW5uIG5pY2h0IGdlbMODwrZzY2h0IHdlcmRlbiwgZGEgbm9jaCBhYmjDg8KkbmdpZ2UgRGF0ZW4gdm9yaGFuZGVuIHNpbmQhJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV4Y2VwdGlvbi5NZXNzYWdlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VlIHRoZSBpbm5lciBleGNlcHRpb24gZm9yIGRldGFpbHMnKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gRnJpc3QgaW5uZXJFeGNlcHRpb25cbiAgICAgICAgICAgICAgICBsZXQgaW5uZXJFeGNlcHRpb24gPSBleGNlcHRpb24uSW5uZXJFeGNlcHRpb247XG4gICAgICAgICAgICAgICAgaWYgKGV4Y2VwdGlvbi5Jbm5lckV4Y2VwdGlvbi5NZXNzYWdlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VlIHRoZSBpbm5lciBleGNlcHRpb24gZm9yIGRldGFpbHMnKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlY29uZCBpbm5lckV4Y2VwdGlvblxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5uZXJFeGNlcHRpb24gPSBleGNlcHRpb24uSW5uZXJFeGNlcHRpb24uSW5uZXJFeGNlcHRpb247XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGNlcHRpb24uSW5uZXJFeGNlcHRpb24uSW5uZXJFeGNlcHRpb24uTWVzc2FnZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlZSB0aGUgaW5uZXIgZXhjZXB0aW9uIGZvciBkZXRhaWxzJykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcmQgaW5uZXJFeGNlcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbm5lckV4Y2VwdGlvbiA9IGV4Y2VwdGlvbi5Jbm5lckV4Y2VwdGlvbi5Jbm5lckV4Y2VwdGlvbi5Jbm5lckV4Y2VwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGV4Y2VwdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlubmVyRXhjZXB0aW9uLk1lc3NhZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlICsgZXhjZXB0aW9uLk1lc3NhZ2UgKyAnICc7XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleGNlcHRpb24uTWVzc2FnZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGV4Y2VwdGlvbi5NZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgICAgIGV4Y2VwdGlvbi5NZXNzYWdlcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZSArICcgLSAnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlICsgaXRlbTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleGNlcHRpb24uRXhjZXB0aW9uTWVzc2FnZSAhPT0gdW5kZWZpbmVkICYmICg8c3RyaW5nPmV4Y2VwdGlvbi5FeGNlcHRpb25NZXNzYWdlKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlZSB0aGUgaW5uZXIgZXhjZXB0aW9uIGZvciBkZXRhaWxzJykgPCAwKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZSArICc6ICcgKyBleGNlcHRpb24uRXhjZXB0aW9uTWVzc2FnZSArICcgJztcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4Y2VwdGlvbi5FeGNlcHRpb25NZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgKDxzdHJpbmc+ZXhjZXB0aW9uLkV4Y2VwdGlvbk1lc3NhZ2UpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VlIHRoZSBpbm5lciBleGNlcHRpb24gZm9yIGRldGFpbHMnKSA+PSAwKSB7XG4gICAgICAgICAgICBpZiAoZXhjZXB0aW9uLklubmVyRXhjZXB0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXhjZXB0aW9uLklubmVyRXhjZXB0aW9uLklubmVyRXhjZXB0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgKyAnOiAnICsgZXhjZXB0aW9uLklubmVyRXhjZXB0aW9uLklubmVyRXhjZXB0aW9uLkV4Y2VwdGlvbk1lc3NhZ2UgKyAnICc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlICsgJzogJyArIGV4Y2VwdGlvbi5Jbm5lckV4Y2VwdGlvbi5FeGNlcHRpb25NZXNzYWdlICsgJyAnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZhdWx0IGhhbmRsZXJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhleGNlcHRpb24pO1xuICAgICAgICBtZXNzYWdlID0gbWVzc2FnZSArICc6IEphdmFTY3JpcHQtRmVobGVyIG9kZXIgUHJvYmxlbWUgbWl0IGRlciBJbnRlcm5ldHZlcmJpbmR1bmcuIFdlaXRlcmUgSW5mb3JtYXRpb25lbiBpbSBMb2cgKGNoYW5nZSBsb2cgdG8gZnVsbCA9IGRlYnVnKS4gJyArIGV4Y2VwdGlvbjtcblxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOjIwMTgtMTAtMTAvaHA6IFthbmd1bGFyLklIdHRwUHJvbWlzZUNhbGxiYWNrQXJnPEV4Y2VwdGlvbj5dIHNob3VsZCBiZSBSZXNwb25zZVxuICAgIHN0YXRpYyBwcmVwYXJlRXhjZXB0aW9uKHJlc3BvbnNlOiBQcm9taXNlPEV4Y2VwdGlvbj4gfCBhbnkpOiBFeGNlcHRpb24ge1xuICAgICAgICBsZXQgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmNyZWF0ZUV4Y2VwdGlvbigpO1xuXG4gICAgICAgIC8vICNyZWdpb24gUHJvY2VzcyAoQW5ndWxhciAxKSByZXNwb25zZS5kYXRhLkRhdGFcblxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAhPT0gdW5kZWZpbmVkICYmIHJlc3BvbnNlLmRhdGEuRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24ucHJvY2Vzc1Jlc3BvbnNlRGF0YShleGNlcHRpb24sIHJlc3BvbnNlLmRhdGEuRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgICAgLy8gI3JlZ2lvbiBQcm9jZXNzIChBbmd1bGFyIDIpIHJlc3BvbnNlLmpzb24oKS5EYXRhIChFbnRpdHlWYWxpZGF0aW9uRXhjZXB0aW9uLCBldGMuKVxuXG4gICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLmpzb24gIT09IHVuZGVmaW5lZCAmJiByZXNwb25zZS5qc29uKCkuRGF0YSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5wcm9jZXNzUmVzcG9uc2VEYXRhKGV4Y2VwdGlvbiwgcmVzcG9uc2UuanNvbigpLkRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vICNyZWdpb24gUHJvY2VzcyAoQW5ndWxhciAyKSByZXNwb25zZS5fYm9keVxuXG4gICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLl9ib2R5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gSlNPTi5wYXJzZShyZXNwb25zZS5fYm9keSk7XG4gICAgICAgICAgICBpZiAoYm9keS5NZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgZXhjZXB0aW9uLk1lc3NhZ2UgPSBib2R5Lk1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgICAgLy8gI3JlZ2lvbiBQcm9jZXNzIChBbmd1bGFyIDIpIHJlc3BvbnNlLklubmVyRXhjZXB0aW9uLklubmVyRXhjZXB0aW9uLk1lc3NhZ2VcblxuICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5qc29uICE9PSB1bmRlZmluZWQgJiYgcmVzcG9uc2UuanNvbiAhPT0gbnVsbFxuICAgICAgICAgICAgJiYgcmVzcG9uc2UuanNvbigpLklubmVyRXhjZXB0aW9uICE9PSB1bmRlZmluZWQgJiYgcmVzcG9uc2UuanNvbigpLklubmVyRXhjZXB0aW9uICE9PSBudWxsXG4gICAgICAgICAgICAmJiByZXNwb25zZS5qc29uKCkuSW5uZXJFeGNlcHRpb24uSW5uZXJFeGNlcHRpb24gIT09IHVuZGVmaW5lZCAmJiByZXNwb25zZS5qc29uKCkuSW5uZXJFeGNlcHRpb24uSW5uZXJFeGNlcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGV4Y2VwdGlvbi5NZXNzYWdlID0gcmVzcG9uc2UuanNvbigpLklubmVyRXhjZXB0aW9uLklubmVyRXhjZXB0aW9uLk1lc3NhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgICAgLy9leGNlcHRpb24uY29udmVydFJlc3BvbnNlKHJlc3BvbnNlKTtcblxuICAgICAgICBleGNlcHRpb24uVXJsID0gcmVzcG9uc2UudXJsO1xuICAgICAgICBleGNlcHRpb24uU3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICBleGNlcHRpb24uU3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG5cbiAgICAgICAgcmV0dXJuIGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVFeGNlcHRpb24oKTogRXhjZXB0aW9uIHtcbiAgICAgICAgbGV0IGV4Y2VwdGlvbjogRXhjZXB0aW9uID0gbmV3IEV4Y2VwdGlvbigpO1xuICAgICAgICBleGNlcHRpb24uTWVzc2FnZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICAvL3ByaXZhdGUgc3RhdGljIHByb2Nlc3NSZXNwb25zZVdpdGhEYXRhKGV4Y2VwdGlvbjogRXhjZXB0aW9uLCByZXNwb25zZTogYW5ndWxhci5JSHR0cFByb21pc2VDYWxsYmFja0FyZzxFeGNlcHRpb24+KTogRXhjZXB0aW9uIHtcbiAgICAvLyAgICBjb25zb2xlLmRlYnVnKCdFeGNlcHRpb24ucHJvY2Vzc1Jlc3BvbnNlV2l0aERhdGEnKTtcbiAgICAvLyAgICAvLyAjcmVnaW9uIENvbnZlcnQgZGF0YSB0byBNZXNzYWdlc1xuXG4gICAgLy8gICAgaWYgKHJlc3BvbnNlLmRhdGEuRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gICAgICAgIGV4Y2VwdGlvbi5NZXNzYWdlcy5wdXNoKCdObyBmdXJ0aGVyIGluZm9ybWF0aW9uIGZvdW5kIGluIFtyZXNwb25zZS5kYXRhLkRhdGFdLicpO1xuICAgIC8vICAgICAgICBleGNlcHRpb24uTWVzc2FnZXMucHVzaCgnTm8gZnVydGhlciBpbmZvcm1hdGlvbiBmb3VuZCBpbiBbcmVzcG9uc2UuZGF0YS5EYXRhXS4nKTtcbiAgICAvLyAgICB9IGVsc2Uge1xuXG4gICAgLy8gICAgICAgIGxldCBpID0gMTtcbiAgICAvLyAgICAgICAgd2hpbGUgKHJlc3BvbnNlLmRhdGEuRGF0YVtpICsgJyddICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ0FkZCB0byBleGNlcHRpb24uTWVzc2FnZXMgOiAnICsgcmVzcG9uc2UuZGF0YS5EYXRhW2kgKyAnJ10pO1xuICAgIC8vICAgICAgICAgICAgZXhjZXB0aW9uLk1lc3NhZ2VzLnB1c2gocmVzcG9uc2UuZGF0YS5EYXRhW2kgKyAnJ10pO1xuICAgIC8vICAgICAgICAgICAgaSsrO1xuICAgIC8vICAgICAgICB9XG4gICAgLy8gICAgfVxuXG4gICAgLy8gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gICAgcmV0dXJuIGV4Y2VwdGlvbjtcbiAgICAvL31cblxuICAgIHByaXZhdGUgc3RhdGljIHByb2Nlc3NSZXNwb25zZURhdGEoZXhjZXB0aW9uOiBFeGNlcHRpb24sIGRhdGE6IGFueVtdKTogRXhjZXB0aW9uIHtcbiAgICAgICAgbGV0IGkgPSAxO1xuICAgICAgICB3aGlsZSAoZGF0YVtpICsgJyddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGV4Y2VwdGlvbi5NZXNzYWdlcy5wdXNoKGRhdGFbaSArICcnXSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIC8vIFRPRE86MjAxNy0wMS0wOS9ocDogSW1wbGVtZW50IHRoaXMgZnVuY3Rpb24gZm9yIGFuZ3VsYXIyXG4gICAgLy9wcml2YXRlIHN0YXRpYyBwcm9jZXNzRG90TmV0RXhjZXB0aW9uMihleGNlcHRpb246IEV4Y2VwdGlvbiwgcmVzcG9uc2U6IGFueSk6IEV4Y2VwdGlvbiB7XG4gICAgLy8gICAgY29uc29sZS5kZWJ1ZygnRXhjZXB0aW9uLnByb2Nlc3NEb3ROZXRFeGNlcHRpb24yJyk7XG5cbiAgICAvLyAgICBpZiAocmVzcG9uc2UuanNvbigpLmRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vICAgICAgICBjb25zb2xlLmRlYnVnKCdbRXhjZXB0aW9uLnByb2Nlc3NEb3ROZXRFeGNlcHRpb24yXSBub3QgaW1wbGVtZW50ZWQuIEltcGxlbWVudCBpdCB0byBnZXQgcHJvcGVyIGV4Y2VwdGlvbiBkYXRhLicpO1xuICAgIC8vICAgIH1cblxuICAgIC8vICAgIHJldHVybiBleGNlcHRpb247XG4gICAgLy99XG5cbiAgICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=