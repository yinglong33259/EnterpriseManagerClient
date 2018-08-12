import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CusTableComponent } from './cus-table/cus-table.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgGridModule} from 'ag-grid-angular';
import {MatFormFieldModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule,
    NgbModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [CusTableComponent],
  bootstrap: [CusTableComponent],
  exports: [ CusTableComponent ],
})
export class CusTableModule { }
