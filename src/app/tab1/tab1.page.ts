import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Contact } from '../interfaces/contact';
import contactData from 'src/app/jsonData/contact.json' 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  colors = ["#0ECDE8", "#BF40BF", "#FCB0C6","#0ECDE8", "#BF40BF", "#FCB0C6","#0ECDE8", "#BF40BF", "#FCB0C6"]
  colorIndex = 0;

  contacts: Contact[] = contactData; // could I perhaps use a component for contacts and colors it would even itself get the data

  constructor() {}

  getColor(i){
    return this.colors[i]; 
  }

  // what do I miss?!?
  // I need the text/live session altough I do have his page, but not very well incorporated with mine
  // I need a site where you create new costume vibrations/gestures, that is the big one
  // I would like to have a db with users and messages, but not that likely to happend
  // that takes me to think that I could use a json for messages, altough it would not serve lot of a purpose
  // yeah sure I would need a login and sign-up and front page but not that interesting
  // 
  // When it comes to coding
  //
  // TODO
  //
  // Make contacts a reusable component
  // Make the custimzable message page
  // Make live session - you should at least be able to create vibrations and THEN use them on the live session page
  //
  // Perhaps then login with colors and nav
  // then the other things
  // database? never gonna happend at this point


}
