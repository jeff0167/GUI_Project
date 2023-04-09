import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';

// https://dev.to/mandrasch/re-usable-components-in-ionic-6-tabs-starter-28f0                      // this ua how you import components, the hard way
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module'; 

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Tab1PageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
