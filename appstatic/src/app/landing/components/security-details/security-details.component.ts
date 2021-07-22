import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-security-details',
  templateUrl: './security-details.component.html',
  styleUrls: ['./security-details.component.scss']
})
export class SecurityDetailsComponent implements OnInit {
  @Input() isProcess: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
