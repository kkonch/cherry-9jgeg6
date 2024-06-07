import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
//   loginForm: FormGroup;

  constructor(
    // private formBuilder: FormBuilder,
    private router: Router
  ) {
    // this.loginForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }

  onLogin() {
    // if (this.loginForm.valid) {
    //   // Perform login logic here if needed

    //   // Navigate to tab1 page
    //   this.router.navigate(['/tab1']);
    }
}
