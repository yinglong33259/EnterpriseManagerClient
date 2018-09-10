import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CusTableComponent } from './cus-table/cus-table.component';
import {AgGridModule} from 'ag-grid-angular';
import {MatFormFieldModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule,
    MatFormFieldModule,
    MatSelectModule,
    NgZorroAntdModule
  ],
  declarations: [CusTableComponent],
  bootstrap: [CusTableComponent],
  exports: [ CusTableComponent ],
})
export class CusTableModule { }
