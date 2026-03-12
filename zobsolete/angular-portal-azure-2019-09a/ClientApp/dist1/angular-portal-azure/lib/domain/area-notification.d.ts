import { PortalService } from './portal-service';
import { UserControlBase } from './user-control-base';
export declare class AreaNotification extends UserControlBase {
    constructor(portalService: PortalService);
    path: string;
    widthAreaUsed: number;
    private areaNotification;
    private _width;
    width: number;
    private _backgroundColor;
    backgroundColor: string;
    hide(): void;
    show(width?: number): void;
    onHide(): boolean;
    onShow(): void;
    onShowed(): void;
    private calcualteCssStyles;
}
