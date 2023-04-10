import { Component } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  colors = ["#0ECDE8", "#8F2D56", "#FCB0C6" ]
  colorIndex = -1;

  contacts: Contact[] = [
    {
      UserId: 1,
      Name: 'gary',
    },
    {
      UserId: 2,
      Name: 'Sophie',
    },
    {
      UserId: 3,
      Name: 'Steven',
    },
  ];

  constructor() {}

  getColor(id){
    // maybe see if it is dividable by 2,3,4 then choose the color from that or something
    // the list should be sorted and at the left of the names should be the alpha bet, yes bet
    return this.colors[id - 1];
  }

}
