import { Song } from '../shared/song';
import { SongService } from '../shared/song.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormsModule }  from '@angular/forms';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {
  
  private song: Song = new Song();  

  constructor(private songService: SongService, 
      private router: Router, 
      private activatedRoute: ActivatedRoute ) { 

  }

  ngOnInit() {
    
    this.activatedRoute.params
        .switchMap((params: Params)  => this.songService.getSong(+params['id']))
        .subscribe(song  => this.song = song);
  
  }
  

}
