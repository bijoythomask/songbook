import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Anglar material Dependency
import { MdInputModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdCardModule} from '@angular/material';

import { SongsRoutingModule } from './songs-routing.module';
import { SongsComponent } from './songs.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongService } from './shared/song.service';
import { SongSearchComponent } from './song-search/song-search.component';


@NgModule({
  imports: [
    CommonModule,
    SongsRoutingModule,
    MdInputModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    MdToolbarModule,
    MdListModule,
    MdMenuModule,
    MdCardModule
  ],
  declarations: [SongsComponent, SongListComponent, SongSearchComponent],
  providers: [ SongService ]
})
export class SongsModule { }
