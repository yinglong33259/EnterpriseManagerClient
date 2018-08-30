import {Component, Directive, Inject, OnInit, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {User} from '../../entity/User';
import {UserService} from '../../service/user.service';
import {MeanService} from '../../service/mean.service';
import * as tablesConfig from '../../config/tables.json';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  displayData: User[];
  means: string[];
  columnDefs = [];
  validateForm: FormGroup;
  tableName = "UserTable";

  emailFormControl = new FormControl('', []);

  constructor(
    private userService: UserService,
    private meanService: MeanService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.findAll();
    this.columnDefs = tablesConfig[this.tableName];
    this.validateForm = this.fb.group({
      email: [null, [Validators.email]],
      sex: [null, [Validators.maxLength(2)]],
      name: [null, [Validators.maxLength(20)]],
    });
  }

  sortName = null;
  sortValue = null;
  sort (sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  search(): void {
    /** sort data **/
    if (this.sortName && this.sortValue) {
      this.displayData = this.users.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ]   ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayData = this.users;
    }
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  findAll(): void {
    this.userService.findAll()
      .subscribe(users => {
        this.users = users;
        this.displayData = [ ...this.users ];
      });
  }

}
