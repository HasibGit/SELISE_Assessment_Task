import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { User } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];
  isFetching: boolean = false;

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.isFetching = true;
    this.dataStorageService.fetchUsers().subscribe((response) => {
      this.users = response;
      this.isFetching = false;
    });
  }
}
