/// <reference path="bladedata.ts" />
/// <reference path="debug.ts" />
/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class BladeGrid extends angularportalazure.BladeData {
        //#region Constructor

        constructor(portalService: angularportalazure.PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
            super(portalService, path, title, subtitle, width);
            this.isCommandNew = true;
            this.commandNewText = 'neu';
        }

        //#endregion

        //#region Properties

        items: any[] = [];

        //#endregion

        //#region Methods

        loadItems(func: () => angular.IPromise<any>) {
            let that = this;

            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';

            func().then(function (data) {
                that.items = data;
                that.clearStatusbar();
                that.onLoadedItems();
            }).catch(function (exception: angularportalazure.Exception) {
                that.showExceptionOnStatusbar(exception);
            });
        }

        /* Override this function. This function is called from the loadItems function, when the promise is done. */
        onLoadedItems() { }

        //#region Filter

        onFilter(actual: Object, expected: string): boolean {
            //#region Documentation

            // > onFilter will be called for each item in an array
            // > If the item is an native type (string, number), the filter will be called with the native type in the parameter 'actual'
            // > If the item is an object, the filter will be called with each property of the object in the parameter 'actual'
            // > If the item is an object, the filter will also be called with the object in the parameter 'actual'

            //#endregion

            //#region Helper functions

            // Implemenation detail:
            // > We implemented the following functions with in-line-functions, since onFilter is not called within the scope of a class (this. not working).

            // Function to convert 'number' to 'string'
            var convertToString = function (value: number): string {
                return value + '';   // convert to string, so the next statements will process the value as a string
            };

            // Function which figures out, if the 'expected' value is found in the 'actual' value
            var valueFound = function (actual: string, expected: string): void {

                expectedSplitted.forEach(function (expectedItem, index): void {
                    if (actual.toLowerCase().indexOf(expectedItem) > -1) {
                        expectedSplitted[index] = '';  // expected has been found, initialize it now
                    }
                });
            };

            // Function to process an object
            var processObject = function (actual: Object): void {
                for (var actualProperty in actual) {
                    if (actual.hasOwnProperty(actualProperty)) {
                        var actualValue = actual[actualProperty];

                        if (typeof actual == 'number') {
                            actualValue = convertToString(<number>actual);
                        }

                        if (typeof actualValue == 'string') {
                            if (actualValue.indexOf('object:') > -1) { continue; }
                            valueFound(actualValue, expected);
                        }
                    } else {
                        // Process inherited properties
                        processObject(actual[actualProperty]);
                    }
                }
            }

            //#endregion

            //#region Initialize

            // Prepare 'expected' value
            expected = expected.toLowerCase();

            // Split the search string into its parts if separated by blanks
            var expectedSplitted = expected.split(' ');

            //#endregion

            //#region Process depending on type

            // Process property, typeof 'object'
            if (typeof actual == 'object') {
                processObject(actual);
            }

            // Process property, typeof 'number'
            if (typeof actual == 'number') {
                actual = convertToString(<number>actual);
            }

            // Process property, typeof 'string'
            if (typeof actual == 'string') {
                valueFound(<string>actual, expected);
            }

            //#endregion

            //#region Verify if all expected has been found

            var foundCount = 0;

            expectedSplitted.forEach(function (expectedItem): void {
                if (expectedItem === '') {  // all expectedSplitted.items which have been found, are initialized to '' (see above)
                    foundCount++;
                }
            });

            //#endregion

            //#region Return result

            if (foundCount === expectedSplitted.length) {
                return true;
            } else {
                return false;
            };

            //#endregion
        }

        //#endregion

        //#region OBSOLETE

        /** Obsolete */
        //setObsoleteLayoutProperites() {
        //    if (this.items.length !== 0) {
        //        this.navGrid.items = this.items; //--> needed, otherwise nav html pages will no longer work.
        //    }

        //    this.isNavGrid = this.isNavGrid;

        //    //super.setObsoleteLayoutProperites();
        //}

        //#endregion

        //#endregion
    }
}
