import { Component, OnInit } from '@angular/core';
import { DefinedMessage } from 'src/app/interfaces/definedMessage';

@Component({
  selector: 'app-predefine-message',
  templateUrl: './predefine-message.page.html',
  styleUrls: ['./predefine-message.page.scss'],
})
export class PredefineMessagePage implements OnInit {

  definedMessages: DefinedMessage[] = [
    {
      Name: 'Bee',
      Pattern: "300,500,300,500",
      PatternRepeat: 10,
      Sound: "Bat"
    },
    {
      Name: 'Heart',
      Pattern: "700,500,700,300",
      PatternRepeat: 12,
      Sound: "Bat"
    },
    {
      Name: 'Beat',
      Pattern: "600,200,700,300,800",
      PatternRepeat: 10,
      Sound: "Bat"
    }
  ];

  // the list of your predefine messages should be one one page and the making of new ones on another

  constructor() { }

  ngOnInit() {
  }

}
