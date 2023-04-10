import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredefineMessagePageRoutingModule } from './predefine-message-routing.module';

import { PredefineMessagePage } from './predefine-message.page';

import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredefineMessagePageRoutingModule,
    ExploreContainerComponentModule,
  ],
  declarations: [PredefineMessagePage]
})
export class PredefineMessagePageModule {}
