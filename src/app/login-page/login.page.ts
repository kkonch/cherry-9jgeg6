import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup; // Use non-null assertion operator

  constructor(private fb: FormBuilder, private navCtrl: NavController) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    const email = this.loginForm.get('email')!.value; // Use non-null assertion operator
    const password = this.loginForm.get('password')!.value; // Use non-null assertion operator

      // Perform login logic her
    console.log("user", email)
    console.log("pass", password)
    console.log("HERRo")
    console.log('Login successful', { email, password });
    // Navigate to the tabs page after successful login
    this.navCtrl.navigateForward('/tab1');
  }
}
