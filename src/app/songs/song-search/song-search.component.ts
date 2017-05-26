import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { SongService } from './../shared/song.service';
import { Song } from './../shared/song';

@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.css']
})
export class SongSearchComponent implements OnInit {

  private searchTerms = new Subject<string>();

  songs: Observable<Song[]>;


  constructor(
    private songSearchService: SongService,
  ) { }

  ngOnInit() {
  }

  search(term: string): void {
   this.songSearchService.fireSearchEvent(term);
  }

}
