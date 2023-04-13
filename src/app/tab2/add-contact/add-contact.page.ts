import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  usernameId: string = "";
  searching: boolean = false;

  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  sendContactRequest(){
    // if contact id exist say it was sendt, otherwise say the id is not valid
    this.isOpen = true;

    setTimeout(() => {this.isOpen = false;}, 1000); 
  }

  checkUsername(){
    if(this.usernameId.length > 0) return false;

    return true;
  }

  cancel(){

  }

  confirm(){

  }
}
