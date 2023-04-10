import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayMessageService {

  constructor() { }

  // the pattern is in the form of a string which needs to be converted to a list of numbers

  vibratePattern(pattern: number[]){ 
    navigator.vibrate([300,100,300,100]); 
  }
}
