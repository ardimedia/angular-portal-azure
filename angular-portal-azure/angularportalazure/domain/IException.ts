//namespace angularportalazure {
//    /** If a Web API throws an exception, the following interface should be used to communicate the execption. */
//    export interface IException {
//        ExceptionType: string;  // provided by the server
//        ClassName: string;      // provided by the server - .NET exception class name
//        Data: Object;           // provided by the server - object having trouble
//        Type: string;           // provided by the server
//        Messages?: string[];    // provided by the server

//        Message: string;        // provided by Web API or filled by the client if empty - .NET exception messages or user defined

//        MessageDetail: string;  // Filled by the client - .NET exception detail message
//        Status: number;         // Filled by the client - http error code
//        StatusText: string;     // Filled by the client - http message
//        Url: string;            // Filled by the client - http URL
//    }
//}
