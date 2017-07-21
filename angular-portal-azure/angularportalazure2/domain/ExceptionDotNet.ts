import * as angular from 'angular';

export class ExceptionDotNet {
    // .NET Exception (the following fields are transmitted over the wire)
    ExceptionMessage: string;
    ExceptionType: string;
    InnerException: ExceptionDotNet;
    Message: string;
    StackTrace: string;

    // This .NET Exception fields are not transmitted and shouldn't be used on the client
    // Data: { key: number, value: string }[];
    // HelpLink: string;
    // HResult: number;
    // Source: string;
    // ClassName: string;
}
