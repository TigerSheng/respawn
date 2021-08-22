import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SecurityDetailsComponent } from './components/security-details/security-details.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { AccountCreationComponent } from './components/account-creation/account-creation.component';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';

import { CarouselModule, WavesModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    LandingPageComponent,
    SecurityDetailsComponent,
    SlideshowComponent,
    AccountCreationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule, 
    WavesModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingModule { }
