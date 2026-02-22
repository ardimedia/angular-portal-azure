/**
 * Multi-word search filter for grid/list blades.
 * Ported from BladeGrid.onFilter() in v0.2.346.
 *
 * Splits the search string by spaces and checks if ALL words
 * are found in ANY string property of the item.
 */
export function filterItems<T>(items: T[], searchText: string): T[] {
  if (!searchText || !searchText.trim()) {
    return items;
  }

  const words = searchText.toLowerCase().split(/\s+/).filter(Boolean);

  return items.filter((item) => {
    const allValues = getAllStringValues(item).toLowerCase();
    return words.every((word) => allValues.includes(word));
  });
}

/** Concatenate all string property values of an object into one searchable string */
function getAllStringValues(obj: unknown): string {
  if (obj === null || obj === undefined) return '';
  if (typeof obj === 'string') return obj;
  if (typeof obj !== 'object') return String(obj);

  return Object.values(obj as Record<string, unknown>)
    .filter((v) => typeof v === 'string')
    .join(' ');
}
