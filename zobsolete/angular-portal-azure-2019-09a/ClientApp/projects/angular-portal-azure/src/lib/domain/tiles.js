"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiles = void 0;
var tile_size_1 = require("./tile-size");
var tile_sizes_1 = require("./tile-sizes");
var Tiles = /** @class */ (function () {
    function Tiles() {
        // #region Properties
        this.showTiles = true;
        this.tiles = new Array();
        this.isTilesLoaded = false;
        this.hideTileIfOnlyOne = true; // not yet evaluated in HTML, but this is the standard behavior
        this.tileSizes = tile_size_1.TileSize.getTileSizes();
        this.nextLeft = 0;
        this.nextTop = 0;
        this.columnHeightMax = 0;
        // #endregion
    }
    // #endregion
    // #region Methods
    Tiles.prototype.addTile = function (tile) {
        this.isTilesLoaded = true;
        var tileSize = this.tileSizes[tile.tileSize];
        tile.size = tile_sizes_1.TileSizes[tile.tileSize]; // Get CSS Name
        tile.top = this.nextTop + 'px';
        tile.left = this.nextLeft + 'px';
        this.nextLeft += tileSize.width;
        if (tileSize.height > this.columnHeightMax) {
            this.columnHeightMax = tileSize.height;
        }
        if (this.nextLeft > 540) {
            this.nextLeft = 0;
            this.nextTop += this.columnHeightMax;
            this.columnHeightMax = 0;
        }
        this.tiles.push(tile);
        return tile;
    };
    return Tiles;
}());
exports.Tiles = Tiles;
//# sourceMappingURL=tiles.js.map