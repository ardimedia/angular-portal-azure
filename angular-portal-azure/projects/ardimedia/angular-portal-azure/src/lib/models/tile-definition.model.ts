/**
 * Tile size enum matching v0.2.346 TileSizes.
 * The names are used in CSS class names (e.g. 'fxs-tilesize-normal').
 */
export enum TileSize {
  Small = 'small',
  Mini = 'mini',
  Normal = 'normal',
  HeroWide = 'herowide',
}

/** Pixel dimensions for each tile size */
export const TILE_DIMENSIONS: Record<TileSize, { width: number; height: number }> = {
  [TileSize.Small]: { width: 90, height: 90 },
  [TileSize.Mini]: { width: 180, height: 90 },
  [TileSize.Normal]: { width: 180, height: 180 },
  [TileSize.HeroWide]: { width: 540, height: 360 },
};

/**
 * Tile definition for the panorama/startboard.
 * Ported from Tile in v0.2.346.
 */
export interface TileDefinition {
  /** Display title on the tile */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Path of the blade to open when the tile is clicked */
  bladePath: string;
  /** Tile size (determines CSS class and dimensions) */
  size: TileSize;
  /** Optional CSS class for tile icon/content */
  cssClass?: string;
}

export function createTile(title: string, bladePath: string, size: TileSize = TileSize.Normal): TileDefinition {
  return { title, bladePath, size };
}
