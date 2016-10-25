﻿import { Debug } from './Debug';
import { IException } from './IException';

export class Exception {
    static convertFromWebApiException(ex: IException): void {
        //#region Process data to Messages

        ex.Messages = [];
        var i = 1;
        while (ex.Data[i + ''] !== undefined) {
            ex.Messages.push(ex.Data[i + '']);
            i++;
        }

        //#endregion

        //#region Process DbEntityValidationException

        if (ex.ExceptionType === 'System.Data.Entity.Validation.DbEntityValidationException') {
            ex.Type = 'DbEntityValidationException';
        }

        //#endregion

        //#region Process DbUpdateConcurrencyException

        if (ex.ExceptionType === 'System.Data.Entity.Infrastructure.DbUpdateConcurrencyException') {
            ex.Type = 'DbUpdateConcurrencyException';
        }

        //#endregion

        //#region Process ValidationsException

        // ClassName should by ExceptionType
        if (ex.ClassName.indexOf('ValidationsException') > 0) {
            ex.Type = 'ValidationsException';
        }

        //#endregion

        Exception.onConvertFromWebApiException(ex);
    }

    static onConvertFromWebApiException(ex: IException): void {
        Debug.write('[azureportalng-debug] \'Exception.convertFromWebApiException\' not overriden. You could override this.', [this]);
    }
}
