import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [Validators.email, Validators.required, Validators.minLength(6)]);
  password = new FormControl('', [Validators.required, this.hasExclaimation]);
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password
    })
  }
  ngOnInit() {
  }
  hasExclaimation(input: FormControl) {
    const excl = input.value.indexOf("!") >= 0;
    return excl ? null : { 'needExclaimation': true };
  }
  register() {
    this.authService.register(this.registerForm.value.username, this.registerForm.value.password);
  }
}
