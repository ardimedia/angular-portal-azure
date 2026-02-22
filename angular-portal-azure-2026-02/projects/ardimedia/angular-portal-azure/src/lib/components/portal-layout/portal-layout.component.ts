import { Component, inject, signal, ElementRef, afterNextRender, effect, Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PortalService } from '../../services/portal.service';
import { getUserDisplayName } from '../../models/user-account.model';

/**
 * Root portal shell component.
 * Ported from the fxs-portal structure in home.html (v0.2.346).
 *
 * Provides the top bar (with portal title and avatar menu),
 * and the main content area. Child components (panorama, blade-host,
 * notification-panel) are projected via content projection.
 *
 * Usage:
 * ```html
 * <apa-portal-layout>
 *   <apa-panorama />
 *   <apa-blade-host />
 * </apa-portal-layout>
 * ```
 */
@Component({
  selector: 'apa-portal-layout',
  standalone: true,
  template: `
    <div class="fxs-portal fxs-theme-blue">
      <!-- Top bar -->
      <div class="fxs-topbar">
        <div style="padding-left:25px;">
          <a href="#" class="fxs-topbar-home fxs-has-hover" (click)="onHomeClick($event)">
            {{ portal.panorama().title }}
          </a>
        </div>
        <div style="display:flex; align-items:center; gap:12px; padding-right:10px;">
          <button class="apa-darkmode-toggle fxs-has-hover"
                  (click)="toggleDarkMode()"
                  [attr.aria-label]="isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
                  [attr.title]="isDark() ? 'Light mode' : 'Dark mode'">
            {{ isDark() ? '\u2600' : '\u263E' }}
          </button>
          <div class="fxs-avatarmenu-tenant-container">
            <a class="fxs-has-hover" (click)="portal.toggleAvatarMenu()">
              <span>{{ displayName() }}</span><br />
              <span>{{ portal.avatarMenu().userAccount.userName }}</span>
            </a>
          </div>
        </div>
      </div>
      <!-- Main content area -->
      <div class="fxs-portal-content fxs-panorama"
           [style.margin-right.px]="notificationMargin()">
        <ng-content />
      </div>
      <!-- Footer -->
      <div class="fxs-portal-footer"></div>
    </div>
  `,
})
export class PortalLayoutComponent {
  protected readonly portal = inject(PortalService);
  private static readonly STORAGE_KEY = 'apa-dark-mode';
  private readonly document = inject(DOCUMENT);
  private readonly elementRef = inject(ElementRef);
  private readonly injector = inject(Injector);
  protected readonly isDark = signal(false);

  constructor() {
    const stored = localStorage.getItem(PortalLayoutComponent.STORAGE_KEY);
    const dark = stored === 'true';
    this.applyTheme(dark);

    // Scroll to the last blade whenever the blade stack changes
    const injector = this.injector;
    effect(() => {
      const blades = this.portal.blades();
      if (blades.length === 0) return;
      afterNextRender(() => {
        this.scrollToLastBlade();
      }, { injector });
    });
  }

  protected toggleDarkMode(): void {
    const dark = !this.isDark();
    localStorage.setItem(PortalLayoutComponent.STORAGE_KEY, String(dark));
    this.applyTheme(dark);
  }

  private applyTheme(dark: boolean): void {
    this.isDark.set(dark);
    this.document.documentElement.classList.toggle('apa-dark', dark);
    this.document.documentElement.classList.toggle('apa-light', !dark);
  }

  protected displayName(): string {
    const account = this.portal.avatarMenu().userAccount;
    return getUserDisplayName(account);
  }

  protected notificationMargin(): number {
    const notif = this.portal.notification();
    return notif.isVisible ? notif.width : 0;
  }

  protected onHomeClick(event: Event): void {
    event.preventDefault();
    // Clear all blades to show panorama
    this.portal.blades.set([]);
  }

  private scrollToLastBlade(): void {
    const scrollContainer = this.elementRef.nativeElement.querySelector('.fxs-portal-content');
    if (!scrollContainer) return;

    const bladeElements = scrollContainer.querySelectorAll('.azureportalblade');
    if (bladeElements.length === 0) return;

    const lastBlade = bladeElements[bladeElements.length - 1] as HTMLElement;
    const scrollRect = scrollContainer.getBoundingClientRect();
    const bladeRect = lastBlade.getBoundingClientRect();

    // Blade is already fully visible — no scroll needed
    if (bladeRect.left >= scrollRect.left && bladeRect.right <= scrollRect.right) {
      return;
    }

    const currentScroll = scrollContainer.scrollLeft;
    const viewportWidth = scrollContainer.clientWidth;

    let targetScroll: number;

    if (bladeElements.length >= 2) {
      // Use the previous blade's right edge (= where the new blade starts)
      const prevBlade = bladeElements[bladeElements.length - 2] as HTMLElement;
      const prevRect = prevBlade.getBoundingClientRect();
      // Distance from viewport's left edge to the previous blade's right edge
      const delta = prevRect.right - scrollRect.left;
      targetScroll = currentScroll + delta;
    } else {
      // First blade — scroll to show it
      targetScroll = currentScroll + (bladeRect.left - scrollRect.left);
    }

    // Cap scroll movement to at most one viewport width
    targetScroll = Math.min(targetScroll, currentScroll + viewportWidth);

    scrollContainer.scrollTo({ left: targetScroll, behavior: 'smooth' });
  }
}
