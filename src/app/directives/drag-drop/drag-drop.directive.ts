import {Directive, EventEmitter, HostListener, Output, HostBinding, Input} from '@angular/core';

// Directive deklarasjon og HTML selektor
@Directive({
  selector: '[appDragDrop]'
})

// Directive kontrollklasse
export class DragDropDirective {

    private files: Array<File> = [];
    @HostBinding('style.background') private background;
    @Input() private allowedExtensions: Array<string> = [];
      constructor() { }

      @HostListener('dragover', ['$event']) public onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = 'rgba(2,48,84,0.7)';
      }
      @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '';
      }
      @HostListener('drop', ['$event']) public onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '';
        this.files = evt.dataTransfer.files;
        const valid_docs: Array<File> = [];
        console.log(this.files);
        if (this.files.length > 0) {
            for (let file of this.files) {
                // Splitter opp filnavn til navn og extension
                console.log(file.name.toLowerCase());
                const extArray = file.name.split('.');
                const ext = extArray[1].toLowerCase();

                // Hvis extension === .pdf (eller andre), push file til valid_docs
                if (this.allowedExtensions.lastIndexOf(ext) !== -1) {
                    valid_docs.push(file);
                }
            }
        }

        if (valid_docs.length === 0) {
            alert('Feil filformat');
        } else if (valid_docs.length < this.files.length) {
            alert('Noen av dokumentene var ikke i gyldig format');
        }
      }

}

