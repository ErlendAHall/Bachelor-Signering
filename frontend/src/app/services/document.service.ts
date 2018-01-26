/*import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router/src/interfaces';

@Injectable()
export class DokumentService {

  constructor(private http: Http) {

   }

   getAllDocuments() {
    return this.http.get('localhost:1337/doc/doc').map((response: Response) => {
      const docs = response.json().obj;
      return docs;
    });

   }


   postDocument() {
    const body = {tittle: 'testTittle', innhold: 'bla bla innhold'};

    return this.http.post('localhost:1337/doc/doc', body).map((response: Response) => {
      const result = response.json().obj;
      return result;
    });

   }
  }
*/

