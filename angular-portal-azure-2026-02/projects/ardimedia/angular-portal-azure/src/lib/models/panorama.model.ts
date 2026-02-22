import { TileDefinition, TileSize, TILE_DIMENSIONS } from './tile-definition.model';

/**
 * Panorama (startboard) definition.
 * Ported from Panorama + Startboard + Tiles in v0.2.346.
 *
 * The panorama is the dashboard view that shows tiles and toggles
 * visibility with the blade area.
 */
export interface PanoramaDefinition {
  /** Portal title displayed in the panorama header */
  title: string;
  /** Whether the panorama/startboard is visible (hidden when blades are open) */
  isVisible: boolean;
  /** Whether tiles have been loaded */
  isTilesLoaded: boolean;
  /** Whether to show tiles at all */
  showTiles: boolean;
  /** Hide the tile section if only one tile exists */
  hideTileIfOnlyOne: boolean;
  /** Positioned tiles with layout coordinates */
  tiles: PositionedTile[];
}

/** A tile with computed layout position (left/top in pixels) */
export interface PositionedTile extends TileDefinition {
  /** Horizontal offset in pixels */
  left: number;
  /** Vertical offset in pixels */
  top: number;
}

/**
 * Lay out tiles in a flowing grid pattern matching v0.2.346's Tiles.addTile() algorithm.
 * Tiles wrap after 540px width (3 normal tiles or 1 hero-wide tile).
 */
export function layoutTiles(tiles: TileDefinition[]): PositionedTile[] {
  const maxWidth = 720;
  let nextLeft = 0;
  let nextTop = 0;
  let columnHeightMax = 0;

  return tiles.map((tile) => {
    const dim = TILE_DIMENSIONS[tile.size];

    // Wrap to next row if tile exceeds max width
    if (nextLeft + dim.width > maxWidth && nextLeft > 0) {
      nextLeft = 0;
      nextTop += columnHeightMax;
      columnHeightMax = 0;
    }

    const positioned: PositionedTile = {
      ...tile,
      left: nextLeft,
      top: nextTop,
    };

    nextLeft += dim.width;
    if (dim.height > columnHeightMax) {
      columnHeightMax = dim.height;
    }

    return positioned;
  });
}

export function createPanorama(title: string): PanoramaDefinition {
  return {
    title,
    isVisible: true,
    isTilesLoaded: false,
    showTiles: true,
    hideTileIfOnlyOne: true,
    tiles: [],
  };
}
