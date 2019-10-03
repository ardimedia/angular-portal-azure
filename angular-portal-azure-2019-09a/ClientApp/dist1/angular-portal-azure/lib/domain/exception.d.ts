import { ValidationsExceptionDotNet } from './exception-dot-net';
export declare class Exception extends ValidationsExceptionDotNet {
    Type: string;
    MessageDetail: string;
    Messages: string[];
    Status: number | undefined;
    StatusText: string | undefined;
    Url: string;
    static getOneLineMessage(exception: Exception): string;
    static prepareException(response: Promise<Exception> | any): Exception;
    private static createException;
    private static processResponseData;
}
