import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { User } from '../user.model';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, AfterViewInit {
  users: User[];
  isFetching: boolean = false;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'FullName',
    'Email',
    'DateOfBirth',
    'Gender',
    'PhoneNumber',
  ];

  @ViewChild('userTbSort') userTbSort = new MatSort();

  constructor(
    private dataStorageService: DataStorageService,
    private activatedRoute: ActivatedRoute,
    private date: DatePipe
  ) {
    this.users = this.activatedRoute.snapshot.data['userList'];
    this.listData = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {
    // this.users = this.dataStorageService.getUsers();
    // this.listData = new MatTableDataSource(this.users);
  }

  ngAfterViewInit(): void {
    this.listData.sort = this.userTbSort;
  }
}
