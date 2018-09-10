import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import {CusTableModule} from './module/cus-table/cus-table.module';
import {MaterialModule} from './module/material/material.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { MessagesComponent } from './component/messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { MeansComponent } from './component/means/means.component';
import { WindowcontrolComponent } from './component/windowcontrol/windowcontrol.component';
import {RouteReuseStrategy} from '@angular/router';
import {AppRoutingCache} from './AppRoutingCache';
import { PageNotFoundComponentComponent } from './component/page-not-found-component/page-not-found-component.component';
import { ServerPagenationComponent } from './component/server-pagenation/server-pagenation.component';
import { ClientPagenationComponent } from './component/client-pagenation/client-pagenation.component';
import { ImagediyComponent } from './component/imagediy/imagediy.component';

import {HttpUtilService} from './service/http-util.service';
import {MeanService} from './service/mean.service';
import {MessageService} from './service/message.service';
import {UserService} from './service/user.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    MessagesComponent,
    MeansComponent,
    WindowcontrolComponent,
    PageNotFoundComponentComponent,
    ServerPagenationComponent,
    ClientPagenationComponent,
    ImagediyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    MaterialModule,
    CusTableModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: AppRoutingCache },
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: LOCALE_ID, useValue: 'zh' },
    HttpUtilService,
    MeanService,
    MessageService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
