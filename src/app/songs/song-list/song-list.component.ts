import { Component, OnInit, OnDestroy  } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { SongService } from './../shared/song.service';
import { Song } from './../shared/song';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit, OnDestroy  {

  songs: Observable<Song[]>;

  subscription: Subscription;

  constructor( private songService: SongService) { }

  ngOnInit() {
    this.songs = this.songService.search('');
    this.subscription = this.songService.registerSerchEvent()
        .subscribe(event => {
          this.songs = this.songService.search(event.searchTerm);
        });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}
