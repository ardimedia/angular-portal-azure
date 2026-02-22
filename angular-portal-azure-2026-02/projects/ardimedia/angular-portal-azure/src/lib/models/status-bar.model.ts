/**
 * Status bar display state for a blade.
 * Ported from UserControlBase.statusBar / statusBarClass in v0.2.346.
 */
export interface StatusBarState {
  /** Status bar text message */
  text: string;
  /** CSS class for styling (e.g. 'info', 'error', 'success') */
  style: StatusBarStyle;
}

export type StatusBarStyle = 'none' | 'info' | 'error' | 'success' | 'warning';

export function clearStatusBar(): StatusBarState {
  return { text: '', style: 'none' };
}

export function statusBarInfo(text: string): StatusBarState {
  return { text, style: 'info' };
}

export function statusBarError(text: string): StatusBarState {
  return { text, style: 'error' };
}

export function statusBarSuccess(text: string): StatusBarState {
  return { text, style: 'success' };
}
