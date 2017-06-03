import { Song } from '../shared/song';
import { SongService } from '../shared/song.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-songs-details',
  templateUrl: './songs-details.component.html',
  styleUrls: ['./songs-details.component.css']
})
export class SongsDetailsComponent implements OnInit {
  
  song: Song = new Song();

  constructor(private songService: SongService,
        private router: Router,
        private activateRoute: ActivatedRoute) { 
  
  }

  ngOnInit() {
        this.activateRoute.params
          .switchMap((params: Params) => this.songService.getSong(+params['id']))
          .subscribe(song => this.song = song);
  }

}
