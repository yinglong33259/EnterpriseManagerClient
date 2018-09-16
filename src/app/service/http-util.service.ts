import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import * as appConfig from '../config/app.json';
import {Result} from '../entity/Result';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  private baseUrl = appConfig['baseUrl'] ;
  constructor(private http: HttpClient) { }

  sendRequest(service: string, func: string, ... parameters: any[]): Observable<Result> {

    let paramArray = [];
    parameters.forEach(function(currentValue) {
      paramArray.push(currentValue);
    });
    return this.http.post<Result>(
      this.baseUrl + '\\' + service + '\\' + func,
      null,
      {
        params: {
          params: JSON.stringify( paramArray )
        }
      }
    );
  }


}
