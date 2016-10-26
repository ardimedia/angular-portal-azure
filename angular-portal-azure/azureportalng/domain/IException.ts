namespace azureportalng {
    /** If a Web API through an exception, the following interface should be available. */
    export interface IException {
        ExceptionType: string;  // provided by Web API
        ClassName: string;      // provided by Web API
        Message: string;        // provided by Web API
        Data: Object;           // provided by Web API: contains additional information
        Type: string;           //
        Messages?: string[];    //
    }
}
