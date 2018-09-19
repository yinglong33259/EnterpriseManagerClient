import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {HttpUtilService} from '../../service/http-util.service';
import {Result} from '../../entity/Result';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  userName: string;
  password: string;
  loginError = false;
  isLoading = false;
  constructor(private fb: FormBuilder,
              private http: HttpUtilService,
              public router: Router,
              private cookieService: CookieService,
  ) { }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if ( this.userName == null || this.userName === '' ) {
      return ;
    }
    if ( this.password == null || this.password === '' ) {
      return ;
    }
    this.isLoading = true;
    this.login()
      .subscribe(result => {
        this.isLoading = false;
        if ( result['errorCode'] > 0 ) {
          this.loginError = true;
          return;
        }
        this.cookieService.set('tokenId', result['data'] );
        this.router.navigate(['/mgmt']);
      });
  }

  ngOnInit(): void {
    console.log('enter login page');
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  login(): Observable<Result> {
    return this.http.sendRequest2('loginService/login', this.userName, this.password);
  }

}
