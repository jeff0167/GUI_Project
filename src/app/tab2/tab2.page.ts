import { Component } from '@angular/core';
import { Contact } from '../interfaces/contact';

import contactData from 'src/app/jsonData/contact.json' // WARNING DON'T TYPE "* AS", IT WON'T WORK AND YOU DON'T NEED IT

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  colors = ["#0ECDE8", "#BF40BF", "#FCB0C6","#0ECDE8", "#BF40BF", "#FCB0C6","#0ECDE8", "#BF40BF", "#FCB0C6"]
  colorIndex = 0;

  contacts: Contact[] = contactData;

  constructor() {}

  getColor(i){
    return this.colors[i];
  }

}
