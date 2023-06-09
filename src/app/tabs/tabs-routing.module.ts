import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab1/add-contact',
        loadChildren: () => import('../tab2/add-contact/add-contact.module').then( m => m.AddContactPageModule)
      },
      {
        path: 'tab1/define-message',
        loadChildren: () => import('../tab1/defined-message/define-message.module').then( m => m.DefineMessagePageModule)
      },
      {
        path: 'tab2/predefine-message',
        loadChildren: () => import('../tab1/predefine-message/predefine-message.module').then( m => m.PredefineMessagePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
