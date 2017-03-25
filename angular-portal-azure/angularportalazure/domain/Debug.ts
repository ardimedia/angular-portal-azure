﻿namespace angularportalazure {
    export class Debug {
        // #region Constructor

        constructor() {
        }

        // #endregion

        // #region Properties

        static isEnabled: boolean = false;
        static isWithObjects: boolean = false;

        static keys: Array<string> = new Array<string>();

        // #endregion

        // #region Methods

        static enable(key?: string) {
            Debug.isEnabled = true;

            if (key) {
                Debug.keys.push(key);
            }
        }

        static disable(key?: string) {
            if (key) {
                let indexToDelete = Debug.keys.indexOf(key);
                Debug.keys.splice(indexToDelete, 1);
            }

            if (Debug.keys.length === 0) {
                Debug.isEnabled = false;
            }
        }

        static write(debugLine: string, objects?: Array<any>): boolean {
            if ((Debug.isEnabled && Debug.keys.length === 0)
                || (Debug.isEnabled && Debug.isInKeys(debugLine))) {
                console.log(debugLine);

                if (objects !== undefined && Debug.isWithObjects) {
                    objects.forEach((item) => {
                        console.log(item);
                    });
                }
                return true;
            }
            return false;
        }

        /** Extract the key (e.g. [azureportal] from a string */
        static extractKey(text: string): string {
            let extractKey: string = '';

            let firstCharacter: string = text.substring(0, 1);
            if (firstCharacter === '[') {
                // Find closing bracket
                let closingPos: number = text.indexOf(']');

                if (closingPos > 0) {
                    extractKey = text.substring(0, closingPos + 1);
                }
            }

            return extractKey;
        }

        /** Extract the key (e.g. [azureportal] from a string */
        static isInKeys(debugLine: string): boolean {
            let key: string = Debug.extractKey(debugLine);

            if (Debug.keys.indexOf(key) !== -1) {
                return true;
            }

            return false;
        }

        // #endregion
    }
}
