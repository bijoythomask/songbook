import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Song } from './../shared/song';

@Injectable()
export class SongService {

  private songsUrl = '/api/songs';

  constructor(
    private http: Http
  ) { }

  getSongs(): Promise<Song[]> {
    return this.http.get(this.songsUrl)
      .toPromise()
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  private handleResponse(respose: any): Promise<Song[]> {
    return Promise.resolve(respose.json().data);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
