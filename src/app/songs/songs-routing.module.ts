import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongsComponent } from "./songs.component";
import { SongListComponent } from "./song-list/song-list.component";

const routes: Routes = [
  { path : 'songs', component : SongsComponent , children: [
        { path: '', component : SongListComponent },
        //{ path: 'registration', component : UserRegistrationComponent }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
