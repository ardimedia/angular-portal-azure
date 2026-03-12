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
 * <apa-sidebar [items]="sidebarItems" [width]="240" [collapsedWidth]="60" />
 * ```
 */
@Component({
  selector: 'apa-sidebar',
  standalone: true,
  template: `
    <nav class="apa-sidebar" aria-label="Sidebar"
         [class.apa-sidebar-collapsed]="collapsed()"
         [style.width.px]="collapsed() ? collapsedWidth() : width()">
      @for (item of visibleItems(); track item.bladePath) {
        <a class="apa-sidebar-item"
           role="button"
           tabindex="0"
           [attr.aria-label]="item.title"
           (click)="onItemClick(item)"
           (keydown.enter)="onItemClick(item)"
           (keydown.space)="onItemClick(item)"
           style="cursor:pointer;">
          @if (item.cssClass) {
            <i [class]="item.cssClass" class="apa-sidebar-icon" aria-hidden="true"></i>
          }
          @if (!collapsed()) {
            <span class="apa-sidebar-label">{{ item.title }}</span>
            @if (item.badge) {
              <span class="apa-sidebar-badge" aria-label="badge">{{ item.badge }}</span>
            }
          }
        </a>
      }
    </nav>
  `,
  styles: [`
    .apa-sidebar {
      display: flex;
      flex-direction: column;
      background-color: var(--apa-chrome);
      height: 100%;
      padding-top: 10px;
      transition: width 0.2s ease;
    }
    .apa-sidebar-item {
      display: flex;
      align-items: center;
      padding: 10px 15px;
      color: var(--apa-chrome-text);
      text-decoration: none;
      font-size: 13px;
      transition: background-color 0.15s ease;
    }
    .apa-sidebar-item:hover {
      background-color: var(--apa-chrome-hover);
    }
    .apa-sidebar-icon {
      margin-right: 10px;
      width: 20px;
      text-align: center;
    }
    .apa-sidebar-collapsed .apa-sidebar-icon {
      margin-right: 0;
    }
    .apa-sidebar-label {
      flex: 1;
    }
    .apa-sidebar-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      border-radius: 9px;
      background-color: var(--apa-accent);
      color: #fff;
      font-size: 11px;
      font-weight: 600;
      line-height: 1;
    }
  `],
})
export class SidebarComponent {
  readonly items = input<BladeNavItem[]>([]);
  readonly collapsed = input<boolean>(false);
  readonly width = input<number>(200);
  readonly collapsedWidth = input<number>(50);

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
