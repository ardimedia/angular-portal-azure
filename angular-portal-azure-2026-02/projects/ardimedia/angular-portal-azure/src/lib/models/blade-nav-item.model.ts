/**
 * Navigation item displayed in a BladeNav component.
 * Ported from BladeNavItem in v0.2.346.
 */
export interface BladeNavItem {
  /** Display title */
  title: string;
  /** CSS class for the icon */
  cssClass?: string;
  /** Path of the blade to open when clicked */
  bladePath: string;
  /** External href link (alternative to bladePath) */
  hrefPath?: string;
  /** Comma-separated role names for visibility control */
  roles?: string;
  /** Whether this nav item is visible */
  isVisible: boolean;
  /** Optional callback executed on click (in addition to navigation) */
  callback?: () => void;
}

export function createNavItem(title: string, bladePath: string, cssClass?: string): BladeNavItem {
  return { title, bladePath, cssClass, isVisible: true };
}
