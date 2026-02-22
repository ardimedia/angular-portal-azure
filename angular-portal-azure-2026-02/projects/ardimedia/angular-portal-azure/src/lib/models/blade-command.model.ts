/**
 * Defines a command button in a blade's command bar.
 *
 * Replaces the 18 individual command boolean groups from v0.2.346.
 * Each command has visibility, enabled state, label text, icon, and action callback.
 */
export interface BladeCommand {
  /** Unique key identifying the command (e.g. 'save', 'delete', 'new') */
  key: string;
  /** Display text for the command button */
  label: string;
  /** Whether the command button is visible */
  visible: boolean;
  /** Whether the command button is enabled (clickable) */
  enabled: boolean;
  /** SVG icon identifier or CSS class for the command icon */
  icon?: string;
  /** Callback executed when the command is clicked */
  action: () => void;
}

/**
 * Standard command keys matching the 18 commands from v0.2.346:
 * browse, cancel, copy, delete, document, document2, document3, document4, document5,
 * new, order, restart, save, search, start, stop, swap, excel
 */
export type StandardCommandKey =
  | 'browse' | 'cancel' | 'copy' | 'delete'
  | 'document' | 'document2' | 'document3' | 'document4' | 'document5'
  | 'new' | 'order' | 'restart' | 'save' | 'search'
  | 'start' | 'stop' | 'swap' | 'excel';

/** Creates a command with sensible defaults (visible, enabled, no-op action) */
export function createCommand(key: string, label: string, action: () => void, icon?: string): BladeCommand {
  return { key, label, visible: true, enabled: true, icon, action };
}
