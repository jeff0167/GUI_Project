import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefineMessagePage } from './define-message.page';

const routes: Routes = [
  {
    path: '',
    component: DefineMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefineMessagePageRoutingModule {}
