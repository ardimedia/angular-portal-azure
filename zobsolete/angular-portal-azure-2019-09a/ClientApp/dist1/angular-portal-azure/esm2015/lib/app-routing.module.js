/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppboardComponent } from './component/dashboard/appboard/appboard.component';
import { PageNotFoundComponent } from './component/general/page-not-found/page-not-found.component';
/** @type {?} */
const routes = [
    { path: '', redirectTo: 'appboard', pathMatch: 'full' },
    { path: 'appboard', component: AppboardComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQzs7TUFFOUYsTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDdkQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFO0NBQ25EO0FBVUQsTUFBTSxPQUFPLGdCQUFnQjs7O1lBUjVCLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyw0QkFBNEI7aUJBQzVEO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO2lCQUNmO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9hcHAvYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvZGFzaGJvYXJkL2FwcGJvYXJkL2FwcGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2dlbmVyYWwvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2FwcGJvYXJkJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgIHsgcGF0aDogJ2FwcGJvYXJkJywgY29tcG9uZW50OiBBcHBib2FyZENvbXBvbmVudCB9LCAvLyBBcHBDb21wb25lbnQgfHwgQXBwYm9hcmRDb21wb25lbnQgXHJcbiAgICB7IHBhdGg6ICcqKicsIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50IH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSAvLyAsIHsgZW5hYmxlVHJhY2luZzogdHJ1ZSB9XHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIl19