import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedIndex: number;
  select(index: number) {
      this.selectedIndex = index;
      
  }
  constructor(private router: Router, private auth:AuthService){

   }

  ngOnInit() {
  }

    Loggname = "Logg inn"
    display: boolean = false;

    
    showDialog() {
        this.display = true;
    }
  
  
  
  Logginn() {
    if (this.Loggname ==="Logg inn") {
      this.router.navigate(['/dokumenter']);
      this.Loggname = "Logg ut";
    }else{
      this.router.navigate(['']);
      this.Loggname = "Logg inn";
    }
    
  }

}
