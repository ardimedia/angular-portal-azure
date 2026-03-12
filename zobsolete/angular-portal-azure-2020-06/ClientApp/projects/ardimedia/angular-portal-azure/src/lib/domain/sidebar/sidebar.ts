import { SidebarEntry } from './sidebar-entry';

export class Sidebar extends Array<SidebarEntry> {
    // #region Properties

    isVisible: boolean = true;

    // #endregion

    // #region Constructors

    private constructor(sidebarEntries?: Array<SidebarEntry>) {
        super(...sidebarEntries);
    }

    static create<Sidebars>(): Sidebars {
        return Object.create(Sidebar.prototype);
    }

    // #endregion

    // #region Public Methods

    push(...sidebarEntries: Array<SidebarEntry>): number {
        return super.push(...sidebarEntries);
    }

    // #endregion
}
