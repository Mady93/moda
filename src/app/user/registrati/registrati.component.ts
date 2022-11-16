import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import { CustomValidators } from '../customValidators';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.scss'],
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 15rem;
      }
    `
  ]
})
export class RegistratiComponent implements OnInit {


  form = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cognome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    codiceFiscale: new FormControl('', [Validators.required, Validators.minLength(16)]),
    dataNascita: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.pattern('^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$'),Validators.required]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl('', [Validators.required]),
  },
  CustomValidators.MatchValidator('password','ripetiPassword'));


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
