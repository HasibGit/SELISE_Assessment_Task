import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { User } from '../user.model';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];
  isFetching: boolean = false;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'Name',
    'Gender',
    'DateOfBirth',
    'Email',
    'PhoneNumber',
  ];

  constructor(
    private dataStorageService: DataStorageService,
    private activatedRoute: ActivatedRoute
  ) {
    this.users = this.activatedRoute.snapshot.data['userList'];
    this.listData = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {
    // this.users = this.dataStorageService.getUsers();
    // this.listData = new MatTableDataSource(this.users);
  }
}
