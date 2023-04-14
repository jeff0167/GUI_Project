import { Component, OnInit } from '@angular/core';
import { DefinedMessage } from 'src/app/interfaces/definedMessage';
import { PlayMessageService } from 'src/app/services/play-message.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import jsonDefinedMessages from 'src/app/jsonData/definedMessage.json'

@Component({
  selector: 'app-define-message',
  templateUrl: './define-message.page.html',
  styleUrls: ['./define-message.page.scss'],
})
export class DefineMessagePage implements OnInit {

  selectedMessage: DefinedMessage;
  selectedMessageIndex = null;
  isOpen: boolean = false;
  changeForm: FormGroup;
  validationMessages;

  definedMessages = jsonDefinedMessages;

  constructor(private messagePlayer: PlayMessageService, private formBuilder: FormBuilder){
  }
  
  ngOnInit() { 

    this.changeForm = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.minLength(2)]],
      Pattern: ['', [Validators.required, Validators.pattern(".*")]], // this does need a pattern
      PatternRepeat: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      Sound: ['', [Validators.required, Validators.minLength(1)]]
    });

    this.validationMessages = {
      'Name': [
        {
          type: 'required',
          message: 'Name is required.'
        },
        {
          type: 'minlength',
          message: 'Name requires minimum 2 characters.'
        }
      ],
      'Pattern': [
        {
          type: 'required',
          message: 'Pattern is required.'
        },
        {
          type: 'pattern',
          message: 'Pattern requires the pattern of numbers seperated by commas.'
        }
      ],
      'PatternRepeat': [
        {
          type: 'required',
          message: 'PatternRepeat is required.'
        },
        {
          type: 'minlength',
          message: 'Pattern repeat most be greate than 0.'
        },
        {
          type: 'maxlength',
          message: 'Pattern repeat most be less than 100.'
        }
      ],
      'Sound': [
        {
          type: 'required',
          message: 'Sound is required.'
        },
        {
          type: 'minlength',
          message: 'Sound requires a minimum of 1 character.'
        }
      ]
    }
  }

  deleteMessage(definedMessageIndex: number){
    const toDelete = confirm("Are you sure you want to delete: " + this.definedMessages[definedMessageIndex].Name + "?");
    if(!toDelete) return;

    this.definedMessages.splice(definedMessageIndex);
  }

  editMessage(definedMessage: DefinedMessage, definedMessageIndex: number){  // could also just give the definedMessage an id
    this.isOpen = true;
    this.selectedMessage = definedMessage;
    this.selectedMessageIndex = definedMessageIndex;
  }

  confirmChange(){
    //alert(JSON.stringify(this.changeForm.value));

    this.definedMessages[this.selectedMessageIndex] = this.changeForm.value;
    this.isOpen = false;
  }

  cancel(){
    this.isOpen = false;
  }

  playMessage(definedMessages: DefinedMessage){

    const yo = definedMessages.Pattern.split(",");
    const pattern: number[] = [];

    for(let i = 0; i < yo.length; i++){
      pattern.push(parseInt(yo[i]));
    }

    this.messagePlayer.vibratePattern(pattern);
  }

}
