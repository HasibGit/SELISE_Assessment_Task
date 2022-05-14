import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-reusable-datatable',
  templateUrl: './reusable-datatable.component.html',
  styleUrls: ['./reusable-datatable.component.scss'],
})
export class ReusableDatatableComponent implements OnInit {
  @Input('tableConfig') config;

  listData: MatTableDataSource<any>;
  displayedColumns: string[];

  constructor() {}

  ngOnInit(): void {
    this.listData = new MatTableDataSource(this.config[0]);
    this.displayedColumns = this.config[1];

    console.log(this.displayedColumns);
  }
}
