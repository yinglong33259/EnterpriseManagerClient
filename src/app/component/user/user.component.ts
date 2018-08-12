///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Directive, Inject, OnInit, ViewContainerRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {User} from '../../entity/User';
import {UserService} from '../../service/user.service';
import {MeanService} from '../../service/mean.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  means: string[];
  totalRowCount: number;
  closeResult: string;

  emailFormControl = new FormControl('', [
  ]);

  constructor(
    private userService: UserService,
    private meanService: MeanService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  ngOnDestroy() {

  }

  getUsers(): void {
    // this.users = this.userService.getUsers() ;
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
        this.totalRowCount = this.users.length;
      });
  }


  onSelect(user: User): void {
    console.log(user.name);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
