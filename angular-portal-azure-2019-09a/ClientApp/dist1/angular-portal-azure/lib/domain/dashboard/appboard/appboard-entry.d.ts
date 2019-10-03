import { Tile } from '../tile/tile';
export declare class AppboardEntry extends Tile {
    title: string;
    routerPath: string;
    subTitle: string;
    iconClass: string;
    iconColor: string;
    constructor(title: string, routerPath: string, subTitle?: string, iconClass?: string, iconColor?: string);
}
