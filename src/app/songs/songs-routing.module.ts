import { SongCreateComponent } from './song-create/song-create.component';
import { SongEditComponent } from './song-edit/song-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongsComponent } from './songs.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongsDetailsComponent } from './songs-details/songs-details.component';

const routes: Routes = [
  { path : 'songs', component : SongsComponent , children: [
        { path: '', component : SongListComponent },
        { path: 'new', component : SongCreateComponent },
        { path: 'edit', component : SongEditComponent },
        { path: 'details/:id', component : SongsDetailsComponent }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
