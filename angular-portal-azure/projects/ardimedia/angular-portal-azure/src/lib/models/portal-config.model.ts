import { TileDefinition } from './tile-definition.model';
import { UserAccount } from './user-account.model';
import { PortalLabels } from './portal-labels.model';

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
  /** Override default labels for localization (defaults to German/de-CH) */
  labels?: Partial<PortalLabels>;
  /** Language code (e.g. 'en', 'fr'). Default: auto-detect from browser, fallback 'de-CH' */
  language?: string;
}
