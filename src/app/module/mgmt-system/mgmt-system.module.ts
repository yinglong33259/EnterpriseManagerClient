import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MgmtSystemComponent} from '../../component/mgmt-system/mgmt-system.component';
import { AgGridModule } from 'ag-grid-angular';
import {MgmtRoutingModule} from '../mgmt-routing/mgmt-routing.module';
import {MeanService} from '../../service/mean.service';
import {MessageService} from '../../service/message.service';
import {UserService} from '../../service/user.service';
import {UserComponent} from '../../component/user/user.component';
import {UserDetailComponent} from '../../component/user-detail/user-detail.component';
import {MessagesComponent} from '../../component/messages/messages.component';
import {MeansComponent} from '../../component/means/means.component';
import {WindowcontrolComponent} from '../../component/windowcontrol/windowcontrol.component';
import {PageNotFoundComponentComponent} from '../../component/page-not-found-component/page-not-found-component.component';
import {ServerPagenationComponent} from '../../component/server-pagenation/server-pagenation.component';
import {ClientPagenationComponent} from '../../component/client-pagenation/client-pagenation.component';
import {ImagediyComponent} from '../../component/imagediy/imagediy.component';
import {MaterialModule} from '../material/material.module';
import {CusTableModule} from '../cus-table/cus-table.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouteReuseStrategy} from '@angular/router';
import {AppRoutingCache} from '../../AppRoutingCache';
import {HttpUtilService} from '../../service/http-util.service';

@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    MessagesComponent,
    MeansComponent,
    WindowcontrolComponent,
    PageNotFoundComponentComponent,
    ServerPagenationComponent,
    ClientPagenationComponent,
    ImagediyComponent,
    MgmtSystemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    MaterialModule,
    CusTableModule,
    NgZorroAntdModule,
    MgmtRoutingModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: AppRoutingCache },
    HttpUtilService,
    MeanService,
    MessageService,
    UserService
  ],
  bootstrap: [MgmtSystemComponent],
  exports: [ MgmtSystemComponent ],
})
export class MgmtSystemModule { }
