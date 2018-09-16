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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  userName: string;
  password: string;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    this.login()
      .subscribe(result => {
      });
  }

  constructor(private fb: FormBuilder,
              private http: HttpUtilService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  login(): Observable<Result> {
    return this.http.sendRequest('userService', 'login', this.userName, this.password);
  }

}
