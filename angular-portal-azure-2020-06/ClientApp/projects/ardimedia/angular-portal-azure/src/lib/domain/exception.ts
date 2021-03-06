import { ValidationsExceptionDotNet } from './exception-dot-net';

export class Exception extends ValidationsExceptionDotNet {
  // #region Properties

  // HTTP Server
  Type: string;
  MessageDetail: string;
  Messages: string[];
  Status: number | undefined;
  StatusText: string | undefined;
  Url: string;

  // #endregion

  // #region Static Methods

  static getOneLineMessage(exception: Exception): string {
    let message: string = '';

    if (exception.Message !== undefined) {
      if (exception.Message.toLowerCase().indexOf('cannot insert duplicate key in object') >= 0
        || exception.Message.toLowerCase().indexOf('the duplicate key value is') >= 0) {
        console.debug(exception.Message);
        return 'Datensatz mit gleichem Key (Schlüssel) bereits vorhanden!';
      }

      if (exception.Message.toLowerCase().indexOf('the delete statement conflicted with the reference constraint') >= 0) {
        console.debug(exception.Message);
        return 'Datensatz kann nicht gelöscht werden, da noch abhängige Daten vorhanden sind!';
      }

      if (exception.Message.toLowerCase().indexOf('see the inner exception for details') >= 0) {
        // Frist innerException
        let innerException = exception.InnerException;
        if (exception.InnerException.Message.toLowerCase().indexOf('see the inner exception for details') >= 0) {
          // Second innerException
          let innerException = exception.InnerException.InnerException;
          if (exception.InnerException.InnerException.Message.toLowerCase().indexOf('see the inner exception for details') >= 0) {
            // Third innerException
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
        exception.Messages.forEach((item, index) => {
          if (index > 0) {
            message = message + ' - ';
          }
          message = message + item;
        });
        return message;
      }
    }

    if (exception.ExceptionMessage !== undefined && (<string>exception.ExceptionMessage).toLowerCase().indexOf('see the inner exception for details') < 0) {
      message = message + ': ' + exception.ExceptionMessage + ' ';
      return message;
    }

    if (exception.ExceptionMessage !== undefined && (<string>exception.ExceptionMessage).toLowerCase().indexOf('see the inner exception for details') >= 0) {
      if (exception.InnerException !== undefined) {
        if (exception.InnerException.InnerException !== undefined) {
          message = message + ': ' + exception.InnerException.InnerException.ExceptionMessage + ' ';
          return message;
        } else {
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
  //static prepareException(response: angular.IHttpPromiseCallbackArg<Exception> | any): Exception {
  static prepareException(response: Promise<Exception> | any): Exception {
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

  private static createException(): Exception {
    let exception: Exception = new Exception();
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

  private static processResponseData(exception: Exception, data: any[]): Exception {
    let i = 1;
    while (data[i + ''] !== undefined) {
      exception.Messages.push(data[i + '']);
      i++;
    }

    return exception;
  }

  // TODO:2017-01-09/hp: Implement this function for angular2
  //private static processDotNetException2(exception: Exception, response: any): Exception {
  //    console.debug('Exception.processDotNetException2');

  //    if (response.json().data !== undefined) {
  //        console.debug('[Exception.processDotNetException2] not implemented. Implement it to get proper exception data.');
  //    }

  //    return exception;
  //}

  // #endregion
}
