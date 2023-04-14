import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';

import { SearchbarComponent } from '../components/searchbar/searchbar.component';
import { PopUpComponent } from '../components/pop-up/pop-up.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent, SearchbarComponent, PopUpComponent],
  exports: [ExploreContainerComponent, SearchbarComponent, PopUpComponent]
})
export class ExploreContainerComponentModule {}
