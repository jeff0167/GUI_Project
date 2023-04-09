import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';

import { SearchbarComponent } from '../components/searchbar/searchbar.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent, SearchbarComponent],
  exports: [ExploreContainerComponent, SearchbarComponent]
})
export class ExploreContainerComponentModule {}
