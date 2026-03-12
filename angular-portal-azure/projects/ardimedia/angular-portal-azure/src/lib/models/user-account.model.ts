/**
 * User account information for the avatar menu.
 * Ported from UserAccount in v0.2.346.
 */
export interface UserAccount {
  userName: string;
  firstName: string;
  lastName: string;
  emailAddress?: string;
}

/** Computed full name from first and last name */
export function getUserDisplayName(account: UserAccount): string {
  return `${account.firstName || ''} ${account.lastName || ''}`.trim();
}
