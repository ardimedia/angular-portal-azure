import { PortalService } from './portal-service';
import { UserControlBase } from './user-control-base';
import { AvatarMenu } from './avatar-menu';
import { Startboard } from './startboard';
export declare class Panorama extends UserControlBase {
    title: string;
    isVisible: boolean;
    avatarMenu: AvatarMenu;
    startboard: Startboard;
    constructor(portalService: PortalService, title: string);
}
