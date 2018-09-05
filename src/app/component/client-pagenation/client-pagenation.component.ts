import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../entity/User';

@Component({
  selector: 'app-client-pagenation',
  templateUrl: './client-pagenation.component.html',
  styleUrls: ['./client-pagenation.component.css'],
})
export class ClientPagenationComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private rowData: any[];

  columnDefs = [
    {headerName: 'Name',  height: 100, field: 'name' },
    {headerName: 'Age',  height: 100, field: 'age' },
    {headerName: 'Sex',  height: 100, field: 'sex' },
    {headerName: 'Tel',  height: 100, field: 'tel' },
    {headerName: 'Email',  height: 100, field: 'email' },
    {headerName: 'Addr',  height: 100, field: 'addr' }
  ];

  gridOptions = {
    enableSorting: true,
    enableFilter: true,
    suppressRowClickSelection: true,
    groupSelectsChildren: true,
    debug: true,
    rowSelection: 'multiple',
    enableColResize: true,
    rowGroupPanelShow: 'always',
    pivotPanelShow: 'always',
    enableRangeSelection: true,
    columnDefs: this.columnDefs,
    pagination: true,
    paginationPageSize: 10,
    defaultColDef: {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true
    }
  };

  users: User[];
  means: string[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
    document.addEventListener('DOMContentLoaded', function() {
    });
  }

  ngOnDestroy() {

  }

  getUsers(): void {
    // this.users = this.userService.getUsers() ;
    this.userService.getUsers()
      .subscribe(result => {
        this.users = result.data;
      });
  }


  onSelect(user: User): void {
    console.log(user.name);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
        params.api.resetRowHeights();
      });
    });
  }

}
