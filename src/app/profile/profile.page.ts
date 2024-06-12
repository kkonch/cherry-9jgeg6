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
    previousBool: boolean = false;
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

    sideBarAppear(bool: boolean) {
      const backdrop = document.getElementById('more-options-backdrop');
      const sideBar = document.getElementById('side-bar');
  
      if (!this.previousBool && bool && backdrop && sideBar) {
        backdrop.style.display = 'block';
        backdrop.style.transition = 'opacity 0.5s ease;'
        sideBar.style.display = 'block';
        sideBar.style.transition = 'left 0.5s ease'
        this.previousBool = true;
      }
      else if (this.previousBool && bool && backdrop && sideBar) {
        backdrop.style.display = 'none';
        sideBar.style.display = 'none';
        this.previousBool = false;
      }
    }
  
    navigateToProfile() {
      this.router.navigate(['/profile']);
    }
  
    navigateToLogin() {
      this.router.navigate(['/login']);
    }

    navigateToHome() {
      this.router.navigate(['/tabs/tab1']);
    }
}


