import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  search: string;
  searching: boolean;

  constructor() {}

  test(){
    alert("Test alert");
  }

}
