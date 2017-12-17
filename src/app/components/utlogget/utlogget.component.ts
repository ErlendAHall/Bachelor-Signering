import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-utlogget',
  templateUrl: './utlogget.component.html',
  styleUrls: ['./utlogget.component.scss'],


})
export class UtloggetComponent implements OnInit {

  constructor() { }
  public fileList: any = [];
  onFilesChange(fileList: FileList) {
      this.fileList = fileList;
      console.log(fileList);
  }

  ngOnInit() {
  }
}






