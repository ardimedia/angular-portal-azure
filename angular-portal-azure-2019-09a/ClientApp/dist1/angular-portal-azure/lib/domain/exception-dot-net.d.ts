export declare class ValidationResultDotNet {
    ErrorMessage: string;
    MemberNames: string[];
}
export declare class ExceptionDotNet {
    ClassName: string | void;
    Data: {
        key: number;
        value: string;
    }[] | null;
    ExceptionMethod: string | void;
    HelpURL: string | null | void;
    HelpLink: string | null | void;
    HResult: number;
    InnerException: ExceptionDotNet | null;
    Message: string | null;
    RemoteStackIndex: number | void;
    RemoteStackTraceString: string | null | void;
    Source: string;
    StackTrace: string;
    WatsonBuckets: string | null | void;
    /**
     *  @deprecated ExceptionMessage is obsolete
     */
    ExceptionMessage: string | void;
    /**
     *  @deprecated ExceptionType is obsolete
     */
    ExceptionType: string | void;
}
export declare class ArgumentNullException extends ExceptionDotNet {
    ParamName: string;
}
export declare class EntityValidationException extends ExceptionDotNet {
    Data: {
        key: number;
        value: string;
    }[];
    ValidationResults: ValidationResultDotNet[];
}
/**
 *  @deprecated ValidationsExceptionDotNet should be replaced by EntityValidationException
 */
export declare class ValidationsExceptionDotNet extends EntityValidationException {
}
