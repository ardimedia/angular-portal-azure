import { Component, input, output, inject } from '@angular/core';
import { BladeService } from '../../services/blade.service';
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
        <input type="text"
               class="form-control"
               placeholder="Suchen..."
               [value]="searchText"
               (input)="onSearchInput($event)" />
      </div>
    }
    <table class="azc-grid-full azc-grid-multiselectable">
      <colgroup>
        <col class="col0" style="width:41px;">
        <col class="col1">
      </colgroup>
      <tbody class="azc-grid-groupdata" role="rowgroup">
        @for (item of filteredItems(); track $index) {
          <tr role="row" style="cursor:pointer" (click)="onRowClick(item)">
            <td class="msportalfx-gridcolumn-asseticon" role="gridcell">
              <svg xmlns="http://www.w3.org/2000/svg" class="msportal-fx-svg-placeholder" viewBox="0 0 50 50" focusable="false" style="height:21px;width:21px;">
                <rect class="msportalfx-svg-c04" x="19.8" y="39.4" width="10.6" height="3.4"/>
                <polygon class="msportalfx-svg-c04" points="23.1,50 27,50 30.3,46.5 19.8,46.5"/>
                <path class="msportalfx-svg-c20" d="M41.2 14.7v-.3c0-7.7-6.6-14.1-14.7-14.2-.2-.3-4.8.1-4.8.1-7.3.9-13 7-13 14.1 0 .2-.8 5.8 4.9 10.5 2.6 2.3 5.3 8.5 5.7 10.3l.3.6h10.6l.3-.6c.4-1.8 3.2-8 5.7-10.2C41.9 20.2 41.2 14.9 41.2 14.7z"/>
              </svg>
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
  readonly searchable = input<boolean>(true);
  readonly itemClick = output<any>();

  searchText = '';

  private readonly bladeService = inject(BladeService);

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
      this.bladeService.addBlade(bladePath, this.senderPath());
    }
  }
}
