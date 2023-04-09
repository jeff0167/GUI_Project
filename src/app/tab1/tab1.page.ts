import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
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
}
