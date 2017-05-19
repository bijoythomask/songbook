import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from './shared/user.service';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UserComponent, UserListComponent, UsersComponent],
  providers: [UserService]
})
export class UsersModule { }
