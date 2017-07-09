import { Song } from '../shared/song';
import { SongService } from '../shared/song.service';
import { SongVerse } from '../shared/songverse';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Location} from '@angular/common';


@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css'],
})
export class SongCreateComponent implements OnInit {

  private song: Song = new Song();
  
  private songVerse: SongVerse = new SongVerse();
  
  constructor(private songService: SongService,
      private _location: Location) {
    this.songVerse.verses = ["abc","cde","efg"];
  }

  createSong() {
    this.songService.createSong(this.song);
  }

  ngOnInit() {
  }

  cancelClicked(){
    this._location.back();
  }

}
