import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
  }

  navigateTo(target: string): void {
    const elementList = document.querySelectorAll(target);
    console.log(elementList);
    
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  async createAccount(form: FormGroup): Promise<void> {
    // Trigger mark form as dirty here to trigger validations before actually submitting data.
    Object.keys(form.controls).forEach(key => {
      form.get(key)?.markAsDirty();
    });
    console.log(form);
    let username = form.value.userName;
    let password = form.value.password;
    let email = form.value.email;
    let given_name = form.value.fName;
    let family_name = form.value.lName;
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,         
        given_name,
        family_name
      }
    });
    console.log(user);
  }

}
