import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent {

  @Input() isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openOptions(){
    this.isOpen = true;
  }

  cancel(){
    this.isOpen = false;
  }

  confirm(){

  }

  onWillDismiss(event){

  }
}