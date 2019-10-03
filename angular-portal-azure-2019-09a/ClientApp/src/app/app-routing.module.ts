import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nav1Component } from './component/blades/nav1/nav1.component';
import { CounterComponent } from './component/blades/counter/counter.component';
import { FetchDataComponent } from './component/blades/fetch-data/fetch-data.component';
import { HomeComponent } from './component/blades/home/home.component';

const routes: Routes = [
    { path: 'nav1', component: Nav1Component },
    { path: 'counter', component: CounterComponent },
    { path: 'fetchdata', component: FetchDataComponent },
    { path: 'home', component: HomeComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
