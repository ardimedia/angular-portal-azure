import { PortalService } from './portal-service';
import { UserControlBase } from './user-control-base';
import { UserAccount } from './user-account';
export declare class AvatarMenu extends UserControlBase {
    constructor(portalService: PortalService);
    userAccount: UserAccount | null;
}
