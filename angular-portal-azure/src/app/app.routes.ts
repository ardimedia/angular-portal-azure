import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'crm', children: [{ path: '**', children: [] }] },
  { path: '', pathMatch: 'full', children: [] },
];
