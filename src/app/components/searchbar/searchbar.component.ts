import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {

  somename: string;
  search: string;
  searching: boolean;

  @Input() hasSearch: boolean;

  constructor() {}

  test(){
    alert("Test alert");
  }

  cancel(){

  }

  confirm(){

  }

  onWillDismiss(event){

  }

  // need to use modal instead, pog yo
}
