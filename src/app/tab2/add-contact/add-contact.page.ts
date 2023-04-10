import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  usernameId: string;
  searching: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  sendContactRequest(){
    alert("add test");
  }

}
