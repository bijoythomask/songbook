import { Component, OnInit, OnDestroy  } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { SongService } from "./../shared/song.service";
import { Song } from "./../shared/song";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit, OnDestroy  {

  songs: Song[];

  subscription: Subscription;

  constructor( private songService: SongService) { }

  ngOnInit() {
    this.songService.getSongs().then(songs => this.songs = songs );
    this.subscription = this.songService.registerSerchEvent()
        .subscribe(searchTerm => {
          console.log(searchTerm);
        });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}
