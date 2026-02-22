import { UserAccount } from './user-account.model';

/**
 * Avatar menu definition for the user menu in the portal header.
 * Ported from AvatarMenu in v0.2.346.
 */
export interface AvatarMenuDefinition {
  /** The logged-in user's account info */
  userAccount: UserAccount;
  /** Whether the avatar dropdown is currently open */
  isOpen: boolean;
}

export function createAvatarMenu(): AvatarMenuDefinition {
  return {
    userAccount: { userName: '', firstName: '', lastName: '' },
    isOpen: false,
  };
}
