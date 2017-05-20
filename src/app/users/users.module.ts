import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Anglar material Dependency
import { MdInputModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdListModule} from '@angular/material';

//Module Components
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from './shared/user.service';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MdInputModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    MdToolbarModule,
    MdListModule,
  ],
  declarations: [ UserListComponent, UsersComponent, UserRegistrationComponent],
  providers: [UserService]
})
export class UsersModule { }
