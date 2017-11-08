import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedIndex: number;
  select(index: number) {
      this.selectedIndex = index;
  }
  constructor() {
   }

  ngOnInit() {
  }

}
