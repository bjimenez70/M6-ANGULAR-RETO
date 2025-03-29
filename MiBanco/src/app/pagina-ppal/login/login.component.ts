import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay, map, of } from 'rxjs';
import { Datosloguin } from '../datosloguin/datosloguin';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  loginForm: FormGroup = new FormGroup({});
 
  constructor(private fb: FormBuilder, private datosloguin:Datosloguin, private router: Router)  {}
 
  ngOnInit(): void {
    this.initLoginForm();
  }
 
  initLoginForm(): void{
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  submit() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      if(usuario === 'beatriz' && password === '12345678') {
        console.log('Usuario logueado');
        this.datosloguin.userEmail = 'bjimenez_85@hotmail.com';
        console.log('Usuario logueado2');
        this.router.navigate(['/boards']);
      }else {
        alert('Usuario o contraseña incorrectos');
      }
    }
  }
 

}
