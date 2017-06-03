import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdInputModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { SongsRoutingModule } from './songs-routing.module';
import { SongsComponent } from './songs.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongService } from './shared/song.service';
import { SongSearchComponent } from './song-search/song-search.component';
import { SongEditComponent } from './song-edit/song-edit.component';
import { SongCreateComponent } from './song-create/song-create.component';
import { SongsDetailsComponent } from './songs-details/songs-details.component';



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
    MdCardModule,
    FormsModule
  ],
  declarations: [SongsComponent, SongListComponent, SongSearchComponent, SongEditComponent, SongCreateComponent, SongsDetailsComponent],
  providers: [SongService]
})
export class SongsModule { }
