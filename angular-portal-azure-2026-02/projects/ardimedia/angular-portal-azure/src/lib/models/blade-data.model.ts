import { BladeDefinition, createBlade } from './blade.model';
import { StatusBarState, statusBarInfo, statusBarError, statusBarSuccess, clearStatusBar } from './status-bar.model';

/**
 * Exception model for API error responses.
 * Ported from Exception / ExceptionDotNet in v0.2.346.
 */
export interface ApiException {
  message: string;
  status?: number;
  statusText?: string;
  data?: Array<{ key: number; value: string }>;
  validationResults?: Array<{ errorMessage: string; memberNames: string[] }>;
}

/**
 * Lifecycle hooks for CRUD operations on a blade.
 * Ported from BladeData<T> template method pattern in v0.2.346.
 *
 * Each operation follows the pattern: onBefore → execute → onSuccess | onError
 */
export interface BladeDataLifecycle<T> {
  // Load single item
  onLoadItem?: () => void;
  onLoadedItem?: () => void;
  onLoadItemError?: (ex: ApiException) => void;

  // Load multiple items
  onLoadItems?: () => void;
  onLoadedItems?: () => void;
  onLoadItemsError?: (ex: ApiException) => void;

  // Save item
  onSaveItem?: () => void;
  onSavedItem?: () => void;
  onSaveItemError?: (ex: ApiException) => void;

  // Delete item
  onDeleteItem?: () => void;
  onDeletedItem?: () => boolean; // return false to prevent blade close
  onDeleteItemError?: (ex: ApiException) => void;

  // New item
  onNewItem?: () => void;
  onNewedItem?: () => void;
  onNewItemError?: (ex: ApiException) => void;

  // Execute generic action
  onExecute?: () => void;
  onExecuted?: () => void;
  onExecuteError?: (ex: ApiException) => void;

  // Form validation
  isFormValid?: () => boolean;
}

/**
 * Extended blade definition for data-driven blades with CRUD operations.
 * Ported from BladeData<T> in v0.2.346.
 */
export interface BladeDataDefinition<T> extends BladeDefinition {
  /** Current item being edited/viewed */
  item: T;
  /** List of items (for grid/list blades) */
  items: T[];
  /** Lifecycle hooks for CRUD operations */
  lifecycle: BladeDataLifecycle<T>;
}

/** Creates a data blade definition with sensible defaults */
export function createDataBlade<T>(
  path: string,
  title: string,
  width: number = 315,
): BladeDataDefinition<T> {
  return {
    ...createBlade(path, title, width),
    item: {} as T,
    items: [],
    lifecycle: {},
  };
}

/**
 * Execute a load-item operation with lifecycle hooks and status bar updates.
 * Replaces the BladeData.loadItem() template method from v0.2.346.
 */
export async function executeLoadItem<T>(
  blade: BladeDataDefinition<T>,
  loadFn: () => Promise<T>,
): Promise<T | void> {
  blade.lifecycle.onLoadItem?.();
  blade.statusBar = statusBarInfo('Laden...');
  try {
    const result = await loadFn();
    blade.item = result;
    blade.statusBar = clearStatusBar();
    blade.lifecycle.onLoadedItem?.();
    return result;
  } catch (ex) {
    blade.statusBar = statusBarError((ex as ApiException).message || 'Fehler beim Laden');
    blade.lifecycle.onLoadItemError?.(ex as ApiException);
  }
}

/**
 * Execute a load-items operation with lifecycle hooks and status bar updates.
 */
export async function executeLoadItems<T>(
  blade: BladeDataDefinition<T>,
  loadFn: () => Promise<T[]>,
): Promise<T[] | void> {
  blade.lifecycle.onLoadItems?.();
  blade.statusBar = statusBarInfo('Laden...');
  try {
    const result = await loadFn();
    blade.items = result;
    blade.statusBar = clearStatusBar();
    blade.lifecycle.onLoadedItems?.();
    return result;
  } catch (ex) {
    blade.statusBar = statusBarError((ex as ApiException).message || 'Fehler beim Laden');
    blade.lifecycle.onLoadItemsError?.(ex as ApiException);
  }
}

/**
 * Execute a save-item operation with lifecycle hooks and status bar updates.
 */
export async function executeSaveItem<T>(
  blade: BladeDataDefinition<T>,
  saveFn: () => Promise<T>,
): Promise<T | void> {
  if (blade.lifecycle.isFormValid && !blade.lifecycle.isFormValid()) {
    return;
  }
  blade.lifecycle.onSaveItem?.();
  blade.statusBar = statusBarInfo('Speichern...');
  try {
    const result = await saveFn();
    blade.item = result;
    blade.statusBar = statusBarSuccess('Gespeichert');
    blade.lifecycle.onSavedItem?.();
    return result;
  } catch (ex) {
    blade.statusBar = statusBarError((ex as ApiException).message || 'Fehler beim Speichern');
    blade.lifecycle.onSaveItemError?.(ex as ApiException);
  }
}

/**
 * Execute a delete-item operation with lifecycle hooks and status bar updates.
 * Returns true if the blade should be closed after deletion.
 */
export async function executeDeleteItem<T>(
  blade: BladeDataDefinition<T>,
  deleteFn: () => Promise<void>,
): Promise<boolean> {
  blade.lifecycle.onDeleteItem?.();
  blade.statusBar = statusBarInfo('Loeschen...');
  try {
    await deleteFn();
    blade.statusBar = statusBarSuccess('Geloescht');
    const shouldClose = blade.lifecycle.onDeletedItem?.() ?? true;
    return shouldClose;
  } catch (ex) {
    blade.statusBar = statusBarError((ex as ApiException).message || 'Fehler beim Loeschen');
    blade.lifecycle.onDeleteItemError?.(ex as ApiException);
    return false;
  }
}
