import { Appboard } from "./dashboard/appboard/appboard";
import { Blade } from "./blade/blade";
import { Sidebar } from "./sidebar/sidebar";
export declare class AppConfig {
    appTitle: string;
    isShowSplashScreen: boolean;
    username: string;
    usernameTenant: string;
    appboard: Appboard;
    blades: Blade[];
    sidebar: Sidebar;
    constructor();
}
