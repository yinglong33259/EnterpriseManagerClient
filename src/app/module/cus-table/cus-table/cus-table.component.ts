import {Component, Input, OnInit} from '@angular/core';
import * as tablesConfig from '../../../config/tables.json';

@Component({
  selector: 'app-cus-table',
  templateUrl: './cus-table.component.html',
  styleUrls: ['./cus-table.component.css']
})
export class CusTableComponent implements OnInit {

  public gridApi;
  public gridColumnApi;
  @Input() tableName: string;
  @Input() rowData: any[];
  @Input() totalRowCount: number;
  public pageSize = 10;
  public page = 1;
  nzPageSizeOptions: number[] = [10, 20, 30, 40];

  columnDefs = [];

  constructor() { }

  ngOnInit() {
    this.columnDefs = tablesConfig[this.tableName];
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
        params.api.resetRowHeights();
      });
    });
  }

  gotoPage() {
    this.gridApi.paginationGoToPage(this.page - 1);
  }

  pageSizeChange() {
    this.gridApi.paginationSetPageSize(this.pageSize);
  }

}
