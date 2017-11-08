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
<<<<<<< HEAD

  log(){

    

  }
  


  
=======
>>>>>>> b0bdffb6bfe9998d31e69bc8a81604ab92bc2551
  constructor() {
   }

  ngOnInit() {
<<<<<<< HEAD
   
    
    
=======
>>>>>>> b0bdffb6bfe9998d31e69bc8a81604ab92bc2551
  }

}
