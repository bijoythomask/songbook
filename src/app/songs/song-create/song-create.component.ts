import { Song } from '../shared/song';
import { SongService } from '../shared/song.service';
import { SongVerse } from '../shared/songverse';
import { Component, OnInit } from '@angular/core';
import { FormsModule }  from '@angular/forms';


@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {

  private song: Song = new Song();
  
  private songVerse: SongVerse = new SongVerse();
  
  constructor(private songService: SongService) { 
    
    this.songVerse.verses = ["abc","cde","efg"];
  }

  ngOnInit() {
  }

}
