import { SidebarEntry } from './sidebar-entry';
export declare class Sidebar extends Array<SidebarEntry> {
    isVisible: boolean;
    private constructor();
    static create<Sidebars>(): Sidebars;
    push(...sidebarEntries: Array<SidebarEntry>): number;
}
