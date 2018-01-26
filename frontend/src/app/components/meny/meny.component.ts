import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-meny',
  templateUrl: './meny.component.html',
  styleUrls: ['./meny.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
