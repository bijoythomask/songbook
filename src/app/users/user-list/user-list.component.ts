import { Component, OnInit } from '@angular/core';

import { UserService } from './../shared/user.service';
import { User } from './../shared/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().then(users => this.users = users);
  }

}
