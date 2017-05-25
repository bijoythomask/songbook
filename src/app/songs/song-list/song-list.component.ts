import { Component, OnInit } from '@angular/core';

import { SongService } from "./../shared/song.service";
import { Song } from "./../shared/song";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs: Song[];

  constructor( private songService: SongService) { }

  ngOnInit() {
    this.songService.getSongs().then(songs => this.songs = songs );
  }

}
