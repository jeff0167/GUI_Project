import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'add-contact',
    loadComponent: () => import('./tab1/add-contact/add-contact.page').then( m => m.AddContactPage)
  },
];
