import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredefineMessagePage } from './predefine-message.page';

const routes: Routes = [
  {
    path: '',
    component: PredefineMessagePage
  },
  {
    path: 'define-message',
    loadChildren: () => import('../defined-message/define-message.module').then( m => m.DefineMessagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredefineMessagePageRoutingModule {}
