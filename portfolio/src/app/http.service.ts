import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  sendEmail(email){
    console.log('service');
    return this._http.post('/send', email);
  }
  
}
