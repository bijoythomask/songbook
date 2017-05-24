import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { User } from './user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private usersUrl = '/api/users';  // URL to web api

  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
               .toPromise()
               .then(this.handleResponse)
               .catch(this.handleError);
  }

  private handleResponse(respose: any): Promise<User[]> {
    return Promise.resolve(respose.json().data);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
