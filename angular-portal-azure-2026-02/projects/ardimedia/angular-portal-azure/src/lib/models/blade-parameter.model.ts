/**
 * Parameters passed when opening a blade.
 * Ported from BladeParameter interface in v0.2.346.
 */
export interface BladeParameter {
  action: string;
  item?: unknown;
  itemId: number;
}
