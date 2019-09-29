import { ElementRef, OnChanges } from '@angular/core';
export declare class ThemingDirective implements OnChanges {
    private el;
    theme: {
        [prop: string]: string;
    };
    constructor(el: ElementRef<HTMLElement>);
    ngOnChanges(): void;
}
