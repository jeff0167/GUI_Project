import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredefineMessagePage } from './predefine-message.page';

const routes: Routes = [
  {
    path: '',
    component: PredefineMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredefineMessagePageRoutingModule {}
