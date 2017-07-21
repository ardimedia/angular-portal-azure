import * as angular from 'angular';

class DataService {
    // #region Constructor

    constructor(public $http: angular.IHttpService, public $q: angular.IQService) {
    }

    // #endregion

    // #region Methods

    getData(url: string): angular.IPromise<void> {
        return this.$http({ method: 'GET', url: url })
            .then((response: angular.IHttpResponseTransformer) => { })
            .catch((response: angular.IHttpResponseTransformer) => { });
    }

    // #endregion
}

export default angular.module('angularportalazure', [])
    .service('dataService', DataService)
    .name;
