import { signal } from '@angular/core';
import { BladeCommand } from './blade-command.model';
import { StatusBarState, clearStatusBar } from './status-bar.model';

/**
 * Base blade definition used by BladeService to manage the blade stack.
 * Ported from Blade class in v0.2.346 — flattened from the UserControlBase → Blade hierarchy.
 *
 * In v0.2.346 this was a class with 18 command boolean groups and deep inheritance.
 * In v0.3.0 commands are a BladeCommand[] array and blade state is managed by the service.
 */
export interface BladeDefinition {
  /** Unique path identifying this blade (lowercased) */
  path: string;
  /** Blade header title */
  title: string;
  /** Blade header subtitle */
  subtitle: string;
  /** Blade width in pixels */
  width: number;
  /** Whether the blade content uses inner HTML (ng-content) vs structured content */
  isInnerHtml: boolean;
  /** Command bar buttons */
  commands: BladeCommand[];
  /** Status bar state */
  statusBar: StatusBarState;
}

/** Creates a blade definition with sensible defaults.
 *  statusBar uses a getter/setter backed by a signal for zoneless change detection. */
export function createBlade(path: string, title: string, width: number = 315): BladeDefinition {
  const _statusBar = signal<StatusBarState>(clearStatusBar());
  return {
    path: path.toLowerCase(),
    title,
    subtitle: '',
    width,
    isInnerHtml: true,
    commands: [],
    get statusBar(): StatusBarState { return _statusBar(); },
    set statusBar(value: StatusBarState) { _statusBar.set(value); },
  };
}

/**
 * Event args for blade navigation.
 * Ported from IAddBladeEventArgs in v0.2.346.
 */
export interface AddBladeEventArgs {
  path: string;
  pathSender: string;
}
