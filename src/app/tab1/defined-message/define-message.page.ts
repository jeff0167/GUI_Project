import { Component, OnInit } from '@angular/core';
import { DefinedMessage } from 'src/app/interfaces/definedMessage';
import { PlayMessageService } from 'src/app/services/play-message.service';

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

  constructor(private messagePlayer: PlayMessageService){}

  ngOnInit() {
  }

  deleteMessage(){
    alert("Delete ");
  }

  editMessage(){

  }

  playMessage(definedMessages: DefinedMessage){

    const yo = definedMessages.Pattern.split(",");
    const pattern: number[] = [];

    for(let i = 0; i < yo.length; i++){
      pattern.push(parseInt(yo[i]));
    }

   // alert(yo[0] + " " + yo[1] + " " + yo[2]);

    this.messagePlayer.vibratePattern(pattern);
  }

}
