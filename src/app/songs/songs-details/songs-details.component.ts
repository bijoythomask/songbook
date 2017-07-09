import { Song } from '../shared/song';
import { SongService } from '../shared/song.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-songs-details',
  templateUrl: './songs-details.component.html',
  styleUrls: ['./songs-details.component.css']
})
export class SongsDetailsComponent implements OnInit {
  
  song: Song = new Song();

  constructor(private songService: SongService,
        private router: Router,
        private activateRoute: ActivatedRoute,
        private _location: Location) { 
  
  }

  ngOnInit() {
        this.activateRoute.params
          .switchMap((params: Params) => this.songService.getSong(+params['id']))
          .subscribe(song => this.song = song);
  }

  cancleClicked(){
    this._location.back();
  }

}
