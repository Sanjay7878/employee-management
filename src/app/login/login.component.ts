import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      password: ['', Validators.required]
    })
  }

  login(){
    let data = {...this.loginForm.getRawValue()}
    this.authService.login(data)
  }
}
