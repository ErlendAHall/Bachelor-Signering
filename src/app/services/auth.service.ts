import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import {tokenNotExpired} from 'angular2-jwt';
import Auth0Lock from 'auth0-lock';


declare var auth0:any;
declare var Auth0Lock: any;


@Injectable()
export class AuthService {
   
 
   options = {
    allowedConnections:  ['document-NO-BankID-Web']
    
  };

  auth0 = new auth0.WebAuth({
    clientID: 'gLRPf26SFiTQjAqbt7L2MKZCIDVnoe4e',
    domain: 'document.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://document.eu.auth0.com/api/v2/',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
    

  });

   lock = new Auth0Lock(  'gLRPf26SFiTQjAqbt7L2MKZCIDVnoe4e',  'document.eu.auth0.com', this.options);


  constructor(public router: Router) {}

  

  // lock = new Auth0Lock('7kI568Z0Z9cKMaQgW39XPKP6GR2ynD9v', 'document.eu.auth0.com', {
  //   auth: {
  //     redirectUrl: 'http://localhost:3000/callback',
  //     responseType: 'token id_token',
  //     params: {
  //       scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
  //     }
  //   },
  // allowedConnections: ['google-oauth2', 'facebook','easyid-adfs-test-NO-BankID-Web','easyid-adfs-test-NO-BankID-Mobile']
  // });




  public login(): void {
    this.lock.show();
    //this.auth0.authorize();
  }

}