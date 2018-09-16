import {Component, OnInit} from '@angular/core';
import {Validators} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor( private cookieService: CookieService,
               public router: Router
  ) { }

  ngOnInit(): void {
    if ( !this.cookieService.get('authToken') ) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/mgmt']);
    }
  }



}
