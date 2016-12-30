namespace angularportalazure {
    export class IExceptionDotNet {
        //#region Properites

        ExceptionType: string;  // provided by the server
        ClassName: string;      // provided by the server - .NET exception class name
        Data: Object;           // provided by the server - Object having trouble
        Type: string;           // provided by the server
        Message: string;        // provided by the server
        Messages: string[];     // provided by the server

        //#endregion
    }
}
