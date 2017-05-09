import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserListComponent, UsersComponent]
})
export class UsersModule { }
