import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SecurityDetailsComponent } from './components/security-details/security-details.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    SecurityDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingModule { }
