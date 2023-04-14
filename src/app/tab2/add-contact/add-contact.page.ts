import { Component, OnInit } from '@angular/core';
import contactData from 'src/app/jsonData/contact.json' 

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

    contactData.push({"UserId": 10,"Name": "bob"})
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
