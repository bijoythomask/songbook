import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';
import { SongsComponent } from './songs.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongService } from './shared/song.service';


@NgModule({
  imports: [
    CommonModule,
    SongsRoutingModule
  ],
  declarations: [SongsComponent, SongListComponent],
  providers: [ SongService ]
})
export class SongsModule { }
