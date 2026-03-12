import { UserAccount } from './user-account.model';

/**
 * A single item in the avatar dropdown menu.
 */
export interface AvatarMenuItem {
  /** Display text */
  label: string;
  /** Navigation URL */
  href: string;
  /** Optional icon CSS class, e.g. 'ti ti-settings' */
  icon?: string;
}

/**
 * Avatar menu definition for the user menu in the portal header.
 * Ported from AvatarMenu in v0.2.346.
 */
export interface AvatarMenuDefinition {
  /** The logged-in user's account info */
  userAccount: UserAccount;
  /** Whether the avatar dropdown is currently open */
  isOpen: boolean;
  /** Menu items shown in the dropdown */
  items: AvatarMenuItem[];
}

export function createAvatarMenu(): AvatarMenuDefinition {
  return {
    userAccount: { userName: '', firstName: '', lastName: '' },
    isOpen: false,
    items: [],
  };
}
