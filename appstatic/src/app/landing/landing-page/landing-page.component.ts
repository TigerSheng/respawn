import { Component, ViewChildren, QueryList, ElementRef, OnInit } from '@angular/core';
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

  @ViewChildren('alert') alertSuccess!: QueryList<ElementRef>;


  navigateTo(target: string): void {
    const elementList = document.querySelectorAll(target);
    console.log(elementList);
    
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  closeAlert(i) {
    this.alertSuccess.get(i)?.nativeElement.classList.remove('show');
  }


  async createAccount(form: FormGroup): Promise<void> {
    console.log(this.alertSuccess);
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
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,         
          given_name,
          family_name
        }
      });
      this.alertSuccess.get(0)?.nativeElement.classList.add('show');
    } catch (error) {
      console.log('error signing up:', error);
      this.alertSuccess.get(1)?.nativeElement.classList.add('show');
    }
  }

}
