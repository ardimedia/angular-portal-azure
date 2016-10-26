/// <reference types="angular" />

namespace azureportalng {
    export class DataService {
        //#region Constructor

        constructor(public $http: any, public $q: any) { // parameter list should be [public $http: angular.IHttpService, public $q: angular.IQService]
        }

        //#endregion

        //#region Methods

        getData(url: string): any { // any should be: angular.IHttpPromise<any[]>
            var that = this;

            return that.$http({ method: 'GET', url: url })
                .success(function (data: any, status: any, headers: any, config: any) {
                })
                .error(function (data: any, status: any, headers: any, config: any) {
                });
        }

        //#endregion
    }
}
