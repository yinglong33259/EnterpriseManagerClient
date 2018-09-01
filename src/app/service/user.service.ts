import { Injectable } from '@angular/core';

import {User} from '../entity/User';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
import * as appConfig from '../config/app.json';
import {HttpUtilService} from './http-util.service';
import {Result} from '../entity/Result';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl = appConfig['baseUrl'] + '/userService/';
  private paramsObj = [{name: '波多野结衣'}];

  constructor(
    private http: HttpUtilService,
    private messageService: MessageService
  ) { }

  getUsers(): Observable<Result> {
    this.messageService.add('UserService: fetched users');
    return this.http.sendRequest('userService', 'findAll', null);
  }

  findByCondition(param: object): Observable<Result> {
    this.messageService.add('UserService: findByCondition users');
    return this.http.sendRequest('userService', 'findByCondition', param);
  }

  findAll(): Observable<Result> {
    this.messageService.add('UserService: fetched users');
    return this.http.sendRequest('userService', 'findAll');
  }

  addUser(user: User): Observable<Result> {
    this.messageService.add('UserService: add user');
    return this.http.sendRequest('userService', 'addUser', user);
  }


}
