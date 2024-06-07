import { Component } from '@angular/core';
import { PhaseService } from '../services/phase-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

    loginForm: FormGroup;

    constructor(
      private formBuilder: FormBuilder,
      private router: Router
    ) {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
    onLogin(){
      console.log("hi!")
    }
}


