import { Tiles } from '../tile/tiles';
import { AppboardEntry } from './appboard-entry';
export declare class Appboard extends Tiles<AppboardEntry> {
    isVisible: boolean;
    constructor(...appboardEntries: Array<AppboardEntry>);
    static create<Appboard>(): Appboard;
    push(...appboardEntries: Array<AppboardEntry>): number;
}
