import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefineMessagePageRoutingModule } from './define-message-routing.module';

import { DefineMessagePage } from './define-message.page';

import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefineMessagePageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [DefineMessagePage]
})
export class DefineMessagePageModule {}
