import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hasScrolled = false;
  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 5) {
      this.hasScrolled = true;
    } else {
      this.hasScrolled = false;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
