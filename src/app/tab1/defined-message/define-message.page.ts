import { Component, OnInit } from '@angular/core';
import { DefinedMessage } from 'src/app/interfaces/definedMessage';

@Component({
  selector: 'app-define-message',
  templateUrl: './define-message.page.html',
  styleUrls: ['./define-message.page.scss'],
})
export class DefineMessagePage implements OnInit {

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

  ngOnInit() {
  }

}
