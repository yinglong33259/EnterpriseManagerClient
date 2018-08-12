import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { ServerPagenationComponent } from './component/server-pagenation/server-pagenation.component';
import { ClientPagenationComponent } from './component/client-pagenation/client-pagenation.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CusTableModule} from './module/cus-table/cus-table.module';
import {MaterialModule} from './module/material/material.module';

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
    ClientPagenationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    NgbModule.forRoot(),
    MaterialModule,
    CusTableModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: AppRoutingCache }],
  bootstrap: [AppComponent]
})
export class AppModule { }
