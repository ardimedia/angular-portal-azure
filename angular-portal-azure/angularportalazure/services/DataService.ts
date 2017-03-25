/// <reference types="angular" />

namespace angularportalazure {
    export class DataService {
        // #region Constructor

        constructor(public $http: angular.IHttpService, public $q: angular.IQService) { // parameter list should be [public $http: angular.IHttpService, public $q: angular.IQService]
        }

        // #endregion

        // #region Methods

        getData(url: string): any { // any should be: angular.IHttpPromise<any[]>
            return this.$http({ method: 'GET', url: url })
                .then((response: angular.IHttpResponseTransformer) => { })
                .catch((response: angular.IHttpResponseTransformer) => { });
        }

        // #endregion
    }
}
