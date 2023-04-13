import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  selectedId = 0;

  m_contacts: Contact[] = [
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

  constructor() { }

  ngOnInit() {
  }

  selectContact(id: number){
    this.selectedId = id;
  }

  selectRandomContact(){
    this.selectedId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); // only pick one that exist

  }
  
}
