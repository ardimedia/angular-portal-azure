import { BladeNav } from './blade-nav';
export declare class BladeNavItem {
    title: string;
    cssClass: string;
    bladePath: string;
    hrefPath: string;
    roles: string;
    isVisible: boolean;
    callback: () => any;
    bladeNav: BladeNav | null;
    constructor(title?: string, cssClass?: string, bladePath?: string, hrefPath?: string, roles?: string, isVisible?: boolean, callback?: () => any, bladeNav?: BladeNav | null);
    onNavItemClick(): void;
}
