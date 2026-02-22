import { Component, input, inject } from '@angular/core';
import { BladeNavItem } from '../../models/blade-nav-item.model';
import { BladeService } from '../../services/blade.service';

/**
 * Sidebar navigation — optional vertical navigation panel.
 * New in v0.3.0 (no equivalent in v0.2.346).
 *
 * Provides a collapsible sidebar with navigation items that
 * open blades when clicked.
 *
 * Usage:
 * ```html
 * <apa-sidebar [items]="sidebarItems" [collapsed]="false" />
 * ```
 */
@Component({
  selector: 'apa-sidebar',
  standalone: true,
  template: `
    <nav class="apa-sidebar" [class.apa-sidebar-collapsed]="collapsed()">
      @for (item of visibleItems(); track item.bladePath) {
        <a class="apa-sidebar-item"
           (click)="onItemClick(item)"
           style="cursor:pointer;">
          @if (item.cssClass) {
            <i [class]="item.cssClass" class="apa-sidebar-icon"></i>
          }
          @if (!collapsed()) {
            <span class="apa-sidebar-label">{{ item.title }}</span>
          }
        </a>
      }
    </nav>
  `,
  styles: [`
    .apa-sidebar {
      display: flex;
      flex-direction: column;
      background-color: #1f2327;
      width: 200px;
      height: 100%;
      padding-top: 10px;
      transition: width 0.2s ease;
    }
    .apa-sidebar-collapsed {
      width: 50px;
    }
    .apa-sidebar-item {
      display: flex;
      align-items: center;
      padding: 10px 15px;
      color: #fff;
      text-decoration: none;
      font-size: 13px;
      transition: background-color 0.15s ease;
    }
    .apa-sidebar-item:hover {
      background-color: #3d4247;
    }
    .apa-sidebar-icon {
      margin-right: 10px;
      width: 20px;
      text-align: center;
    }
    .apa-sidebar-collapsed .apa-sidebar-icon {
      margin-right: 0;
    }
  `],
})
export class SidebarComponent {
  readonly items = input<BladeNavItem[]>([]);
  readonly collapsed = input<boolean>(false);

  private readonly bladeService = inject(BladeService);

  visibleItems(): BladeNavItem[] {
    return this.items().filter((item) => item.isVisible);
  }

  onItemClick(item: BladeNavItem): void {
    if (item.bladePath) {
      this.bladeService.setFirstBlade(item.bladePath, item.title);
    }
    item.callback?.();
  }
}
