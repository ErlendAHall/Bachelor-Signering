import {Directive, EventEmitter, HostListener, Output, HostBinding} from '@angular/core';

// Directive deklarasjon og HTML selektor
@Directive({
  selector: '[appDragDrop]'
})

// Directive kontrollklasse
export class DragDropDirective {

    @HostBinding('style.background') private background = '#eee';

      constructor() { }

      @HostListener('dragover', ['$event']) public onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#999';
      }
      @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
      }
      @HostListener('drop', ['$event']) public onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            console.log(files);
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
