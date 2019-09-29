import { OnInit, OnDestroy, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef } from "@angular/core";
import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
export declare class RouterOutletNamedDirective implements OnInit, OnDestroy {
    private parentContexts;
    private location;
    private resolver;
    private changeDetector;
    outlet: RouterOutlet;
    name: string;
    constructor(parentContexts: ChildrenOutletContexts, location: ViewContainerRef, resolver: ComponentFactoryResolver, changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
