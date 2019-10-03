import { Observable } from 'rxjs';
import { Viewport } from './viewport';
export declare class BrowserService {
    readonly browserWindow: Window;
    private viewport;
    onResize: Observable<Viewport>;
    constructor();
}
