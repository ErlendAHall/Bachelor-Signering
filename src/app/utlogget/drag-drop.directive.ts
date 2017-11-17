import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})

// Directive kontrollklasse
export class DragDropDirective {

  constructor() { }
  @Output() private filesChangeEmiter: EventEmitter<FileList> = new EventEmitter();

  @HostListener('drop', ['$event']) public onDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      const files = event.dataTransfer.files;
      if (files.length > 0) {
          this.filesChangeEmiter.emit(files);
      }
  }

}

// todo: filtrer filer
export class DragDropComponent {
    private fileList: any = [];
    constructor() { }
    onFilesChange(fileList: FileList) {
        this.fileList = fileList;
        console.log(fileList);
    }
}
