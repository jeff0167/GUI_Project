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

  // can't you call on page load or something, every time a page is in view we reset the isOpen
  isOpen: boolean = false;

  constructor() {
  }

  options(){
    this.isOpen = true;

    //setTimeout(() => {this.isOpen = false;}, 1000); 
  }

  cancel(){

  }

  confirm(){

  }

  onWillDismiss(event){

  }

}
