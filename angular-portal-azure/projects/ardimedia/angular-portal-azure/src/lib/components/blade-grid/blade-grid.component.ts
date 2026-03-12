import { Component, input, output, inject } from '@angular/core';
import { BladeService } from '../../services/blade.service';
import { PortalService } from '../../services/portal.service';
import { filterItems } from '../../models/filter.util';

/**
 * Grid/list blade content — renders a searchable list of items.
 * Ported from grid.html + BladeGrid (v0.2.346).
 *
 * Displays items in a table with optional search filtering.
 * Each row shows a title and optional subtitle. Clicking a row
 * opens the target blade.
 *
 * Usage:
 * ```html
 * <apa-blade [blade]="gridBlade">
 *   <apa-blade-grid
 *     [items]="items"
 *     [senderPath]="gridBlade.path"
 *     [displayField]="'title'"
 *     (itemClick)="onItemClick($event)" />
 * </apa-blade>
 * ```
 */
@Component({
  selector: 'apa-blade-grid',
  standalone: true,
  styles: [`:host { display: flex; flex-direction: column; flex: 1; }`],
  template: `
    @if (searchable()) {
      <div style="padding:0 0 10px 0;">
        <input type="search"
               class="form-control"
               [placeholder]="portal.labels().search"
               [attr.aria-label]="portal.labels().search"
               [value]="searchText"
               (input)="onSearchInput($event)" />
      </div>
    }
    <table class="azc-grid-full azc-grid-multiselectable" role="grid" aria-label="Items">
      <colgroup>
        <col class="col0" style="width:41px;">
        <col class="col1">
      </colgroup>
      <tbody class="azc-grid-groupdata" role="rowgroup">
        @for (item of filteredItems(); track $index) {
          <tr role="row" style="cursor:pointer"
              [attr.aria-label]="getDisplayValue(item)"
              (click)="onRowClick(item)"
              (keydown.enter)="onRowClick(item)">
            <td class="msportalfx-gridcolumn-asseticon" role="gridcell" aria-hidden="true">
              <i [class]="iconClass()" style="font-size:20px; color:var(--apa-accent);"></i>
            </td>
            <td tabindex="0" role="gridcell">
              <span>{{ getDisplayValue(item) }}</span>
            </td>
          </tr>
        }
      </tbody>
    </table>
  `,
})
export class BladeGridComponent {
  readonly items = input<any[]>([]);
  readonly senderPath = input<string>('');
  readonly displayField = input<string>('title');
  readonly bladePathField = input<string>('bladePath');
  readonly idField = input<string>('id');
  readonly iconClass = input<string>('ti ti-point-filled');
  readonly searchable = input<boolean>(true);
  readonly itemClick = output<any>();

  searchText = '';

  private readonly bladeService = inject(BladeService);
  protected readonly portal = inject(PortalService);

  filteredItems(): any[] {
    return filterItems(this.items(), this.searchText);
  }

  getDisplayValue(item: any): string {
    return item[this.displayField()] ?? '';
  }

  onSearchInput(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  onRowClick(item: any): void {
    this.itemClick.emit(item);
    const bladePath = item[this.bladePathField()];
    if (bladePath) {
      const itemId = item[this.idField()];
      const params = itemId != null ? { id: String(itemId) } : undefined;
      this.bladeService.addBlade(bladePath, this.senderPath(), '', undefined, params);
    }
  }
}
