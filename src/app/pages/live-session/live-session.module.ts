import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveSessionPageRoutingModule } from './live-session-routing.module';

import { LiveSessionPage } from './live-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveSessionPageRoutingModule
  ],
  declarations: [LiveSessionPage]
})
export class LiveSessionPageModule {}
