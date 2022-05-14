import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];
  isFetching: boolean = false;
  searchKey: string;

  /*
                  ####################### Table Configuration Starts ###########################
  */

  data;
  displayedColumns: string[] = [
    'FullName',
    'Email',
    'DateOfBirth',
    'Gender',
    'PhoneNumber',
  ];
  columnHeaders: string[] = [
    'Name',
    'Email',
    'Date Of Birth',
    'Gender',
    'Phone Number',
  ];
  sortableColumns = ['FullName', 'DateOfBirth'];
  pageSizeOptions = [5, 10, 25, 100];
  initialPageSize = 10;

  /*
                  ####################### Table Configuration Ends ###########################
  */

  tableConfig = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.users = this.activatedRoute.snapshot.data['userList'];
    this.data = this.users;

    this.tableConfig = [
      this.data,
      this.displayedColumns,
      this.columnHeaders,
      this.sortableColumns,
      this.pageSizeOptions,
      this.initialPageSize,
    ];
  }

  ngOnInit(): void {}
}
