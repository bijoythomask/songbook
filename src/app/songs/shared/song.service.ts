import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Song } from './../shared/song';

@Injectable()
export class SongService {

  private songsUrl = '/api/songs';

  private subject = new Subject<any>();

  constructor(private http: Http) {
    this.subject.debounceTime(300) // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged(); // ignore if next search term is same as previous
  }

  getSongs(): Promise<Song[]> {
    return this.http.get(this.songsUrl)
      .toPromise()
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  search(term: string): Observable<Song[]> {
    return this.http
      .get(`app/songs/?title=${term}`)
      .map(response => response.json().data as Song[]);
  }

  registerSerchEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  fireSearchEvent(searchTerm: string) {
    this.subject.next({ searchTerm: searchTerm });
  }

  private handleResponse(respose: any): Promise<Song[]> {
    return Promise.resolve(respose.json().data);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
