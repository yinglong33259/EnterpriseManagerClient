import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Mean} from '../entity/Mean';
import * as meansConfig from '../config/means.json';

@Injectable({
  providedIn: 'root'
})
export class MeanService {

  public windows = [];

  public currWindow = null;

  public meanJsonObj = meansConfig;

  constructor(
    private http: HttpClient
  ) { }

  // getMeans(): Observable<Mean[]> {
  //   console.log(means);
  //   const url = 'http://127.0.0.1:8080/getMeans';
  //   return this.http.get<Mean[]>(url);
  // }

  getMeans(): object[] {
    return this.meanJsonObj['means'];
  }

}
