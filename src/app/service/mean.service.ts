import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Mean} from '../entity/Mean';
import * as meansConfig from '../config/means.json';

@Injectable({
  providedIn: 'root'
})
export class MeanService {

  public curRoute = {};

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

  setCurRoute(route: object): void {
    this.curRoute = route;
  }

  getMeans(): object[] {
    return this.meanJsonObj['means'];
  }

  getMeanByHref( desHred: string ): {} {
    let allmean = this.meanJsonObj['means'];
    for (let i = 0; i < allmean.length; i++ ) {

      for (let j = 0; j < allmean[i]['submenus'].length; j++ ) {
        if( allmean[i]['submenus'][j]['href'] === desHred ) {
            return allmean[i]['submenus'][j];
        }
      }

    }
    return null;
  }

}
