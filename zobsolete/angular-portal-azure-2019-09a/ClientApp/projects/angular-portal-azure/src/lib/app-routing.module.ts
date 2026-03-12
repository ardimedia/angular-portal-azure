import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './component/app/app.component';
import { AppboardComponent } from './component/dashboard/appboard/appboard.component';
import { PageNotFoundComponent } from './component/general/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'appboard', pathMatch: 'full' },
    { path: 'appboard', component: AppboardComponent }, // AppComponent || AppboardComponent 
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes) // , { enableTracing: true }
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
