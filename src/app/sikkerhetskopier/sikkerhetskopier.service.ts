import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SikkerhetskopierService  {
    constructor(private http: HttpClient) { }
    get() {
        return this.http.get('http://localhost:3000/api/v1/users');
    }
    post(model: any) {
        return this.http.post('http://localhost:3000/api/v1/users', model);
    }
}
