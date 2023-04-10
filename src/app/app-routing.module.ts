import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tabs/predefine-message',
    loadChildren: () => import('./tab1/predefine-message/predefine-message.module').then( m => m.PredefineMessagePageModule)
  },
  {
    path: 'tabs/add-contact',
    loadChildren: () => import('./tab2/add-contact/add-contact.module').then( m => m.AddContactPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
