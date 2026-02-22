import { TileDefinition } from './tile-definition.model';
import { UserAccount } from './user-account.model';

/**
 * Configuration for the angular-portal-azure library.
 * Passed to providePortalAzure() in the app's ApplicationConfig.
 *
 * This is new in v0.3.0 — v0.2.346 configured via PortalShell constructor
 * and individual directive attributes.
 */
export interface PortalConfig {
  /** Portal title displayed in the panorama header */
  title: string;
  /** Dashboard tiles for the startboard */
  tiles?: TileDefinition[];
  /** Initial user account (can be set later via PortalService) */
  userAccount?: UserAccount;
  /** Theme identifier (default: 'azure-blue') */
  theme?: string;
}
