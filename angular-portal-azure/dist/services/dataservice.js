"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var DataService = (function () {
    // #region Constructor
    function DataService($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    // #endregion
    // #region Methods
    DataService.prototype.getData = function (url) {
        return this.$http({ method: 'GET', url: url })
            .then(function (response) { })
            .catch(function (response) { });
    };
    return DataService;
}());
exports.default = angular.module('angularportalazure', [])
    .service('dataService', DataService)
    .name;
