import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  createAccount(form: FormGroup): void {
    // Trigger mark form as dirty here to trigger validations before actually submitting data.
    console.log(form);
  }

}
