import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

interface ProfileData {
  Username: string;
  Phone: number;
  Password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  validationMessages;
  profileData: ProfileData
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profileData = {} as ProfileData;
  }
  
  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.minLength(2)]],
      Phone: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      Password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.validationMessages = {
      'Username': [
        {
          type: 'required',
          message: 'Username is required.'
        },
        {
          type: 'minlength',
          message: 'Username requires minimum 2 characters.'
        }
      ],
      'Phone': [
        {
          type: 'required',
          message: 'Phone number is required.'
        },
        {
          type: 'pattern',
          message: 'Phone number requires exactly 8 numbers.'
        }
      ],
      'Password': [
        {
          type: 'required',
          message: 'Password is required.'
        },
        {
          type: 'minlength',
          message: 'Password requires minimum 8 characters.'
        }
      ]
    }
  }

  onSubmit(){
    console.log(this.signUpForm.value);
    this.profileData = this.signUpForm.value;
    alert(JSON.stringify(this.profileData));
    alert(this.profileData.Password);
  }

}
