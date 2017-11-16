import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { SikkerhetskopierService } from './sikkerhetskopier.service';

@Component({
  selector: 'app-sikkerhetskopier',
  templateUrl: './sikkerhetskopier.component.html',
  styleUrls: ['./sikkerhetskopier.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [SikkerhetskopierService]
})
export class SikkerhetskopierComponent implements OnInit {
  list: any;
  constructor(private service: SikkerhetskopierService) { }

  ngOnInit() {
    this.service.get().subscribe((res: any) => {
      this.list = res;
      console.log(res);
    });
  }

}
