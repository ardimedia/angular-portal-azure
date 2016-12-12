/// <reference types="angular" />

namespace angularportalazure {
    export class DataService {
        //#region Constructor

        constructor(public $http: angular.IHttpService, public $q: angular.IQService) { // parameter list should be [public $http: angular.IHttpService, public $q: angular.IQService]
        }

        //#endregion

        //#region Methods

        getData(url: string): any { // any should be: angular.IHttpPromise<any[]>
            var that = this;

            return that.$http({ method: 'GET', url: url })
                .then(function (response: angular.IHttpResponseTransformer) {
                })
                .catch(function (response: angular.IHttpResponseTransformer) {
                });
        }

        //#endregion
    }
}
