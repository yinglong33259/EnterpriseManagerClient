import {Component, Directive, Inject, OnInit, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {User} from '../../entity/User';
import {UserService} from '../../service/user.service';
import {MeanService} from '../../service/mean.service';
import * as tablesConfig from '../../config/tables.json';
import * as DICT from '../../config/dict.json';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  sexDict = DICT["SEX"];

  users: User[];
  displayData: User[];
  means: string[];
  columnDefs = [];
  validateForm: FormGroup;
  addUserForm: FormGroup;
  tableName = "UserTable";

  queryEntity = new User();
  addEntity = new User();

  constructor(
    private userService: UserService,
    private meanService: MeanService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.findAll();
    this.columnDefs = tablesConfig[this.tableName];
    this.validateForm = this.fb.group({
      email: [null, [Validators.email]],
      sex: [null, [Validators.maxLength(2)]],
      name: [null, [Validators.maxLength(20)]],
    });

    this.addUserForm = this.fb.group({
      name: [null, [Validators.maxLength(20)]],
      age: [null, [Validators.pattern( '^100$|^([1-9]\\d{1,3})$')]],
      sex: [null, []],
      tel: [null, []],
      email: [null, [Validators.email]],
      addr: [null, []]
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
      .subscribe(result => {
        this.users = result.data;
      });
  }

  totalRowCount: number;
  findAll(): void {
    this.userService.findAll()
      .subscribe(result => {
        this.users = result.data;
        this.totalRowCount = this.users.length;
        this.displayData = [ ...this.users ];
      });
  }


  resetQueryParam(): void {
    this.queryEntity = new User();
  }

  query(): void {
    this.userService.findByCondition(this.queryEntity)
      .subscribe(result => {
        this.users = result.data;
        this.totalRowCount = this.users.length;
        this.displayData = [ ...this.users ];
      });
  }

  isVisible: boolean = false;
  isOkLoading: boolean = false;

  showModal(): void {
    this.isVisible = true;
    this.addEntity = new User();
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  saveUser(): void {
    this.isOkLoading = true;
    this.userService.addUser( this.addEntity ).subscribe(result => {
      console.log(  result.data );
      this.isOkLoading = ! result.data;
      this.isVisible = false;
      this.findAll();
    });
  }

  //table
  currentPageDataChange($event: Array<User>): void {
    this.displayData = $event;
  }


}
