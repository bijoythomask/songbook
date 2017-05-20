import { Component, OnInit } from '@angular/core';

import { UserService } from './shared/user.service';
import { User } from './shared/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(
    private heroService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
    console.log('Inside the ng init');
  }

  getUsers(): void {
    this.heroService
        .getUsers()
        .then(users => this.users = users);
  }

}
