import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { User } from '../user.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];
  isFetching: boolean = false;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Name'];

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.users = this.dataStorageService.getUsers();
    this.listData = new MatTableDataSource(this.users);
  }
}
