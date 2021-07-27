import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.scss']
})
export class AccountCreationComponent implements OnInit {
  form: FormGroup;
  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter;

  constructor(private accounts: AccountsService) {
    this.form = this.accounts.form;
  }

  ngOnInit(): void {
  }

  get emailErrors() {
    return this.form.get('email')?.errors && this.form.get('email')?.dirty;
  }

  get fNameErrors() {
    return this.form.get('fName')?.errors && this.form.get('fName')?.dirty;
  }

  get lNameErrors() {
    return this.form.get('lName')?.errors && this.form.get('lName')?.dirty;
  }

  get pwErrors() {
    return this.form.get('password')?.errors && this.form.get('password')?.dirty;
  }

  get confirmPwErrors() {
    return this.form.get('confirmPassword')?.errors && this.form.get('confirmPassword')?.dirty;
  }
}
