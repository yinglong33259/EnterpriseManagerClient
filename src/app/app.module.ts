import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {RouteReuseStrategy} from '@angular/router';
import {AppRoutingCache} from './AppRoutingCache';

import {MgmtSystemModule} from './module/mgmt-system/mgmt-system.module';
import {AgGridModule} from 'ag-grid-angular';
import {LoginModule} from './module/login/login.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MgmtSystemModule,
    LoginModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: AppRoutingCache },
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: LOCALE_ID, useValue: 'zh' },
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
