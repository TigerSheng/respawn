import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const fb = new FormBuilder();

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  form: FormGroup;
  constructor() {
    this.form = fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      ageConfirmation: ['', Validators.requiredTrue],
      tc: ['', Validators.requiredTrue]
    })
  }

  submitForm(): void {
    return;
  }

  resetForm(): void {
    this.form.reset();
  }

  get firstName(): string {
    return this.form.get('fName')?.value;
  }

  get lastName(): string {
    return this.form.get('lName')?.value;
  }

  get emailAddress(): string {
    return this.form.get('email')?.value;
  }

  get isAgeConfirmed(): string {
    return this.form.get('ageConfirmation')?.value;
  }

  get isAgreedToTerms(): string {
    return this.form.get('tc')?.value;
  }
}
