"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TileSize_1 = require("./TileSize");
var TileSizes_1 = require("./TileSizes");
var Tiles = (function () {
    function Tiles() {
        // #region Properties
        this.showTiles = true;
        this.tiles = new Array();
        this.isTilesLoaded = false;
        this.hideTileIfOnlyOne = true; // not yet evaluated in HTML, but this is the standard behavior
        this.tileSizes = TileSize_1.TileSize.getTileSizes();
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
        tile.size = TileSizes_1.TileSizes[tile.tileSize]; // Get CSS Name
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
