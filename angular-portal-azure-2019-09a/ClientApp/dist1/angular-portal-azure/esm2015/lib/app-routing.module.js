/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './component/app/app.component';
import { PageNotFoundComponent } from './component/general/page-not-found/page-not-found.component';
/** @type {?} */
const routes = [
    { path: '', redirectTo: 'appboard', pathMatch: 'full' },
    { path: 'appboard', component: AppComponent },
    { path: '**', component: PageNotFoundComponent }
];
export class AppRoutingModule {
}
AppRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    RouterModule.forRoot(routes) // , { enableTracing: true }
                ],
                exports: [
                    RouterModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkRBQTZELENBQUM7O01BRTlGLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFO0lBQzdDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUscUJBQXFCLEVBQUU7Q0FDbkQ7QUFVRCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFSNUIsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLDRCQUE0QjtpQkFDNUQ7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7aUJBQ2Y7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2FwcC9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9kYXNoYm9hcmQvYXBwYm9hcmQvYXBwYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvZ2VuZXJhbC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnYXBwYm9hcmQnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgeyBwYXRoOiAnYXBwYm9hcmQnLCBjb21wb25lbnQ6IEFwcENvbXBvbmVudCB9LCAvLyBBcHBib2FyZENvbXBvbmVudCBcclxuICAgIHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBQYWdlTm90Rm91bmRDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpIC8vICwgeyBlbmFibGVUcmFjaW5nOiB0cnVlIH1cclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgUm91dGVyTW9kdWxlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=