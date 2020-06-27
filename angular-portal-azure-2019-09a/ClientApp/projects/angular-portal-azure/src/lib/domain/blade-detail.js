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
exports.BladeDetail = void 0;
var blade_data_1 = require("./blade-data");
var BladeDetail = /** @class */ (function (_super) {
    __extends(BladeDetail, _super);
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    function BladeDetail(portalService, path, title, subtitle, width) {
        if (subtitle === void 0) { subtitle = ''; }
        if (width === void 0) { width = 200; }
        var _this = _super.call(this, portalService, path, title, subtitle, width) || this;
        // #endregion
        // #region Properties
        _this.item = {};
        _this.commandNewText = 'neu';
        _this.commandSaveText = 'speichern';
        _this.commandDeleteText = 'lÃƒÆ’Ã‚Â¶schen';
        _this.commandCancelText = 'abbrechen';
        return _this;
    }
    // #endregion
    // #region Methods
    BladeDetail.prototype.onCommandCancel = function () {
        this.close();
    };
    return BladeDetail;
}(blade_data_1.BladeData));
exports.BladeDetail = BladeDetail;
//# sourceMappingURL=blade-detail.js.map