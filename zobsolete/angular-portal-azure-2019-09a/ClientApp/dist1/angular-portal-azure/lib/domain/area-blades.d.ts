import { PortalService } from './portal-service';
import { UserControlBase } from './user-control-base';
import { Blade } from './blade';
import { IAddBladeEventArgs } from './iadd-blade-event-args';
export declare class AreaBlades extends UserControlBase {
    constructor(portalService: PortalService);
    private portalScroll;
    private addBladeListener;
    private areaNotificationShowListener;
    private areaNotificationHideListener;
    blades: Array<Blade>;
    raiseBladeOnActivateEvent(args: IAddBladeEventArgs): void;
    raiseAddBladeEvent(args: IAddBladeEventArgs): void;
    setFirstBlade(path: string): Blade | void;
    addBlade(path: string, senderPath?: string): Blade | void;
    clearAll(): void;
    clearPath(path: string): void;
    clearLevel(level: number): void;
    clearLastLevel(): void;
    clearChild(path: string): void;
    showPanoramaIfNoBlades(): void;
    hidePanorama(): void;
    /** We need to call this when AreaBlades is no longer used, otherwise the listener does not get removed. */
    close(): void;
    setPortalScrollCss(): void;
}
