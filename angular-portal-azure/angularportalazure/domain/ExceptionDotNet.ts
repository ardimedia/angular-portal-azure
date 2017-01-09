namespace angularportalazure {
    export class ExceptionDotNet {
        // .NET Exception (the following fields are transmitted over the wire)
        ExceptionMessage: string;
        ExceptionType: string;
        Message: string;
        StackTrace: string;

        // This .NET Exception fields are not transmitted and shouldn't be used on the client
        //Data: { key: number, value: string }[];
        //HelpLink: string;
        //HResult: number;
        //InnerException: Exception;
        //Source: string;
        //ClassName: string;
    }

    export class ValidationResultDotNet {
        ErrorMessage: string;
        MemberNames: string[];
    }

    export class ValidationsExceptionDotNet extends ExceptionDotNet {
        ClassName: string;
        Data: { key: number, value: string }[];
        ValidationResults: ValidationResultDotNet[];
    }
}
