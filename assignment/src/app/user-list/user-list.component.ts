import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit {

  isTableView: boolean = false;
  users: Array<User> = []
  card_url: string = 'http://localhost:3000/users'

  // table implementation
  displayedColumns: string[] = ['name', 'designation', 'joiningDate'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //dataSource!: UserData;
  dataSource = new MatTableDataSource<User>();
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.service.getUsers(this.card_url)
      .subscribe(response => {
        this.users = response;
        //TODO : Manually splitted here due to pagination not working as expected
        this.dataSource = new MatTableDataSource<User>(response.slice(0, 5));
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onValChange(value: string) {
    this.isTableView = value == "table"
  }

}