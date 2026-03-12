import { Component, inject } from '@angular/core';
import { PortalService } from '../../services/portal.service';
import { getUserDisplayName } from '../../models/user-account.model';

/**
 * Avatar menu — user account dropdown in the portal header.
 * Ported from fxs-avatarmenu CSS structure in v0.2.346.
 *
 * Shows the user's name and email. Clicking toggles a dropdown
 * with optional actions (sign out, etc.).
 *
 * Usage:
 * ```html
 * <apa-avatar-menu>
 *   <a href="/Account/SignOut">Abmelden</a>
 * </apa-avatar-menu>
 * ```
 */
@Component({
  selector: 'apa-avatar-menu',
  standalone: true,
  template: `
    <div class="fxs-avatarmenu">
      <a class="fxs-has-hover" (click)="portal.toggleAvatarMenu()">
        <div class="fxs-avatarmenu-header">
          <span class="fxs-avatarmenu-username">{{ displayName() }}</span>
          <span class="fxs-avatarmenu-emailaddress">{{ userAccount().emailAddress }}</span>
        </div>
      </a>
      @if (portal.avatarMenu().isOpen) {
        <div class="fxs-avatarmenu-dropdown" style="display:block;">
          <ul>
            <ng-content />
          </ul>
        </div>
      }
    </div>
  `,
})
export class AvatarMenuComponent {
  protected readonly portal = inject(PortalService);

  protected userAccount() {
    return this.portal.avatarMenu().userAccount;
  }

  protected displayName(): string {
    return getUserDisplayName(this.userAccount());
  }
}
