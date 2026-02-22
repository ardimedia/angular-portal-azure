import { Component, input, inject } from '@angular/core';
import { BladeNavItem } from '../../models/blade-nav-item.model';
import { BladeService } from '../../services/blade.service';

/**
 * Navigation blade content — renders a list of nav items.
 * Ported from nav.html (v0.2.346).
 *
 * Each nav item shows an icon and title. Clicking a row opens
 * the target blade via BladeService.
 *
 * Usage:
 * ```html
 * <apa-blade [blade]="navBlade">
 *   <apa-blade-nav [items]="navItems" [senderPath]="navBlade.path" />
 * </apa-blade>
 * ```
 */
@Component({
  selector: 'apa-blade-nav',
  standalone: true,
  styles: [`:host { display: flex; flex-direction: column; flex: 1; }`],
  template: `
    <table class="azc-grid-full azc-grid-multiselectable">
      <colgroup>
        <col class="col0" style="width:28px;">
        <col class="col1">
      </colgroup>
      <tbody class="azc-grid-groupdata" role="rowgroup">
        @for (item of visibleItems(); track item.bladePath) {
          <tr role="row" style="cursor:pointer" (click)="onItemClick(item)">
            <td class="msportalfx-gridcolumn-asseticon" role="gridcell">
              @if (item.cssClass) {
                <i [class]="item.cssClass"></i>
              }
            </td>
            <td tabindex="0" role="gridcell">
              @if (item.hrefPath) {
                <a [href]="item.hrefPath" target="_blank">{{ item.title }}</a>
              } @else {
                <span>{{ item.title }}</span>
              }
            </td>
          </tr>
        }
      </tbody>
    </table>
  `,
})
export class BladeNavComponent {
  readonly items = input<BladeNavItem[]>([]);
  readonly senderPath = input<string>('');

  private readonly bladeService = inject(BladeService);

  visibleItems(): BladeNavItem[] {
    return this.items().filter((item) => item.isVisible);
  }

  onItemClick(item: BladeNavItem): void {
    if (item.hrefPath) {
      // External link — let the <a> handle it
      return;
    }
    if (item.bladePath) {
      this.bladeService.addBlade(item.bladePath, this.senderPath());
    }
    item.callback?.();
  }
}
