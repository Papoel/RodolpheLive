import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
      this.users = this.usersService.getUsers();
  }

}
