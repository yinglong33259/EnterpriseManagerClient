import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {User} from '../entity/User';
import {USERS} from '../mock/mock-users';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl = '/app/service/userService/';
  private paramsObj = [{name: '波多野结衣'}];

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getUsers(): Observable<User[]> {
    this.messageService.add('UserService: fetched users');
    let paramsStr = JSON.stringify( this.paramsObj );
    return this.http.post<User[]>(
      this.baseUrl + 'getUser',
      null,
      {
        params: {
          params: paramsStr
        }
      }
    );
  }

  findByCondition(param: object): Observable<User[]> {
    this.messageService.add('UserService: findByCondition users');
    let params = [];
    params.push(param);
    let paramsStr = JSON.stringify( params );
    return this.http.post<User[]>(
      this.baseUrl + 'getUser',
      null,
      {
        params: {
          params: paramsStr
        }
      }
    );
  }

  findAll(): Observable<User[]> {
    this.messageService.add('UserService: fetched users');
    let paramsStr = JSON.stringify( this.paramsObj );
    return this.http.post<User[]>(
      this.baseUrl + 'findAll',
      null,
      {
      }
    );
  }

}
