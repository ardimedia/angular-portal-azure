"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
var tile_sizes_1 = require("./tile-sizes");
var Tile = /** @class */ (function () {
    // #region Constructor
    function Tile(title, bladePath, portalService) {
        this.portalService = portalService;
        this.title = title;
        this.bladePath = bladePath;
        this.tileSize = tile_sizes_1.TileSizes.normal;
    }
    Object.defineProperty(Tile.prototype, "bladePath", {
        // #region bladePath
        get: function () {
            return this._bladePath;
        },
        // For the moment we do not distinguish between lower and upper case path name
        set: function (newBladePath) {
            this._bladePath = newBladePath.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    // #endregion
    // #region Methods
    Tile.prototype.clicked = function () {
        this.portalService.areaBlades.setFirstBlade(this.bladePath);
        this.portalService.appService.bladeService.navigateTo(this.bladePath);
    };
    return Tile;
}());
exports.Tile = Tile;
//# sourceMappingURL=tile.js.map