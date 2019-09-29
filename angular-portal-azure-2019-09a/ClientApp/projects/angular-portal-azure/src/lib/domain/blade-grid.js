"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var blade_data_1 = require("./blade-data");
var BladeGrid = /** @class */ (function (_super) {
    __extends(BladeGrid, _super);
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    function BladeGrid(portalService, path, title, subtitle, width) {
        if (subtitle === void 0) { subtitle = ''; }
        if (width === void 0) { width = 200; }
        var _this = _super.call(this, portalService, path, title, subtitle, width) || this;
        _this.isGrid = true;
        return _this;
    }
    // #endregion
    // #region Properties
    //items: T[] = [];
    // #endregion
    // #region Methods
    //loadItems(func: () => any | Promise<any> | Promise<any>): void {
    //    this.onLoadItems();
    //    func().then((data: any) => {
    //        this.items = data;
    //        this.onLoadedItems();
    //    }).catch((exception: Exception) => {
    //        this.setStatusBarException(exception);
    //    });
    //}
    // #region Filter
    BladeGrid.prototype.onFilter = function (actual, expected) {
        // #region Documentation
        // > onFilter will be called for each item in an array
        // > If the item is an native type (string, number), the filter will be called with the native type in the parameter 'actual'
        // > If the item is an object, the filter will be called with each property of the object in the parameter 'actual'
        // > If the item is an object, the filter will also be called with the object in the parameter 'actual'
        // #endregion
        // #region Helper functions
        // Implementation detail:
        // > We implemented the following functions with in-line-functions, since onFilter is not called within the scope of a class (this. not working).
        // Function to convert 'number' to 'string'
        var convertToString = function (value) {
            return value + ''; // convert to string, so the next statements will process the value as a string
        };
        // Function which figures out, if the 'expected' value is found in the 'actual' value
        var valueFound = function (actual, expected) {
            expectedSplitted.forEach(function (expectedItem, index) {
                if (actual.toLowerCase().indexOf(expectedItem) > -1) {
                    expectedSplitted[index] = ''; // expected has been found, initialize it now
                }
            });
        };
        // Function to process an object
        var processObject = function (actual) {
            for (var actualProperty in actual) {
                if (actual.hasOwnProperty(actualProperty)) {
                    var actualValue = actual[actualProperty];
                    if (typeof actual === 'number') {
                        actualValue = convertToString(actual);
                    }
                    if (typeof actualValue === 'string') {
                        if (actualValue.indexOf('object:') > -1) {
                            continue;
                        }
                        valueFound(actualValue, expected);
                    }
                }
                else {
                    // Process inherited properties
                    processObject(actual[actualProperty]);
                }
            }
        };
        // #endregion
        // #region Initialize
        // Prepare 'expected' value
        expected = expected.toLowerCase();
        // Split the search string into its parts if separated by blanks
        var expectedSplitted = expected.split(' ');
        // #endregion
        // #region Process depending on type
        // Process property, typeof 'object'
        if (typeof actual === 'object') {
            processObject(actual);
        }
        // Process property, typeof 'number'
        if (typeof actual === 'number') {
            actual = convertToString(actual);
        }
        // Process property, typeof 'string'
        if (typeof actual === 'string') {
            valueFound(actual, expected);
        }
        // #endregion
        // #region Verify if all expected has been found
        var foundCount = 0;
        expectedSplitted.forEach(function (expectedItem) {
            if (expectedItem === '') { // all expectedSplitted.items which have been found, are initialized to '' (see above)
                foundCount++;
            }
        });
        // #endregion
        // #region Return result
        if (foundCount === expectedSplitted.length) {
            return true;
        }
        else {
            return false;
        }
        // #endregion
    };
    return BladeGrid;
}(blade_data_1.BladeData));
exports.BladeGrid = BladeGrid;
//# sourceMappingURL=blade-grid.js.map