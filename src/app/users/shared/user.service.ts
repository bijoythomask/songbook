import { Injectable } from '@angular/core';
import { HttpModule, Http } from "@angular/http";

import { User } from "./user";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<User[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as User[])
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
