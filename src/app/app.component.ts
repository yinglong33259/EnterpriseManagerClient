import {Component, OnInit} from '@angular/core';
import {Validators} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {HttpUtilService} from './service/http-util.service';
import {Observable} from 'rxjs';
import {Result} from './entity/Result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor( private cookieService: CookieService,
               public router: Router,
               private http: HttpUtilService
  ) { }

  ngOnInit(): void {
    console.log('Enter mgmt system !');
    const tokenId = this.cookieService.get('tokenId');
    if ( tokenId != null && tokenId !== '' ) {

      this.checkToken(tokenId).subscribe(result => {
        if (!result.data) {
          this.cookieService.delete('tokenId' );
          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/mgmt']);
        }
      });

    } else {
      this.router.navigate(['/login']);
    }
  }

  checkToken(tokenId: string ): Observable<Result> {
    return this.http.sendRequest2('loginService/checkToken', tokenId );
  }

}
