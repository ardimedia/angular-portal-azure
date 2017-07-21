import { ExceptionDotNet } from './ExceptionDotNet';
import { ValidationResultDotNet } from './ValidationResultDotNet';

export class ValidationsExceptionDotNet extends ExceptionDotNet {
    ClassName: string;
    Data: { key: number, value: string }[];
    ValidationResults: ValidationResultDotNet[];

    public convertResponse(response: any) {
        if (response.headers === undefined) {
            ValidationsExceptionDotNet.convertResponse(this, response.data);
            ValidationsExceptionDotNet.convertExceptionType(this, response.data);
        } else {
            ValidationsExceptionDotNet.convertResponse(this, response.json());
            ValidationsExceptionDotNet.convertExceptionType(this, response.json());
        }
    }

    private static convertResponse(exception: ValidationsExceptionDotNet, responseData: ExceptionDotNet) {
        // ExceptionDotNet
        exception.ExceptionMessage = responseData.ExceptionMessage;
        exception.Message = responseData.Message;
        exception.StackTrace = responseData.StackTrace;
        exception.InnerException = responseData.InnerException;

        // ValidationsExceptionDotNet
        // exception.ClassName = 'Not yet implemented';
        // exception.Data = [{ key: 0, value: 'Not yet implemented' }];

        // ValidationResultDotNet
        // exception.ValidationResults = [{ ErrorMessage: 'Not yet implemented', MemberNames: [] }];
    }

    private static convertExceptionType(exception: ValidationsExceptionDotNet, responseData: any): void {
        if (responseData.ExceptionType === undefined) {
            return;
        }

        if (responseData.ExceptionType === 'System.Data.Entity.Validation.DbEntityValidationException') {
            exception.ExceptionType = 'DbEntityValidationException';
            return;
        } else if (responseData.ExceptionType === 'System.Data.Entity.Infrastructure.DbUpdateConcurrencyException') {
            exception.ExceptionType = 'DbUpdateConcurrencyException';
            return;
        }

        // ClassName should by ExceptionType
        if (responseData.ClassName !== undefined && responseData.ClassName.indexOf('ValidationsException') > 0) {
            console.log('[angularportalazure.Exception.setExceptionType2] Why is this in ClassName? Can this be changed?');
            exception.ExceptionType = 'ValidationsException';
            return;
        }

        exception.ExceptionType = responseData.ExceptionType;
    }
}
