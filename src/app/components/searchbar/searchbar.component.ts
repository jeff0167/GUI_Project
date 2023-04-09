import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {

  search: string;
  searching: boolean;

  @Input() hasSearch: boolean;

  constructor() {}

  test(){
    alert("Test alert");
  }
}
