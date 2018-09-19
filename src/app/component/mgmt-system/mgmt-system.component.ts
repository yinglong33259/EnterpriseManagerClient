import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpUtilService} from '../../service/http-util.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {Result} from '../../entity/Result';
import {Observable} from 'rxjs';
import {AppRoutingCache} from '../../AppRoutingCache';
import {MeanService} from '../../service/mean.service';

@Component({
  selector: 'app-mgmt-system',
  templateUrl: './mgmt-system.component.html',
  styleUrls: ['./mgmt-system.component.css']
})
export class MgmtSystemComponent implements OnInit, OnDestroy {

  constructor(
    private http: HttpUtilService,
    public router: Router,
    private cookieService: CookieService,
    private meanService: MeanService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  logoutClick(): void {
    this.logout()
      .subscribe(result => {
      });
    this.cookieService.delete('tokenId' );
    this.router.navigate(['/login']);
    this.meanService.windows = [];
    this.meanService.curRoute = {};
    setTimeout(function () {
      AppRoutingCache.deleteAllRouteSnapshot();
    }, 1000);
  }

  logout(): Observable<Result> {
    const tokenId = this.cookieService.get('tokenId');
    return this.http.sendRequest2('logoutService/logout', tokenId );
  }



}
