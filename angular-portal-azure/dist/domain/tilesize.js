"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tilesizes_1 = require("./tilesizes");
var TileSize = (function () {
    // #region Constructor
    function TileSize(tileSizes, width, height) {
        this.tileSizes = tileSizes;
        this.width = width;
        this.height = height;
    }
    // #endregion
    // #region Methods
    TileSize.getTileSizes = function () {
        var tileSizes = Array();
        tileSizes.push(new TileSize(tilesizes_1.TileSizes.small, 90, 90));
        tileSizes.push(new TileSize(tilesizes_1.TileSizes.mini, 180, 90));
        tileSizes.push(new TileSize(tilesizes_1.TileSizes.normal, 180, 180));
        tileSizes.push(new TileSize(tilesizes_1.TileSizes.herowide, 540, 360));
        return tileSizes;
    };
    return TileSize;
}());
exports.TileSize = TileSize;
