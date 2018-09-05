import { Component, OnInit } from '@angular/core';
import {MeanService} from '../../service/mean.service';
import {AppRoutingCache} from '../../AppRoutingCache';
import {Router} from '@angular/router';

@Component({
  selector: 'app-windowcontrol',
  templateUrl: './windowcontrol.component.html',
  styleUrls: ['./windowcontrol.component.css']
})
export class WindowcontrolComponent implements OnInit {

  constructor(
    public meanService: MeanService,
    public router: Router
  ) { }

  ngOnInit() {
    let curUrl = location.pathname.split("/")[1];
    if ( this.meanService.getMeanByHref(curUrl) != null ) {
      this.meanService.windows.push( this.meanService.getMeanByHref(curUrl) );
      this.meanService.setCurRoute( this.meanService.getMeanByHref(curUrl) );
    }
  }

  enterRouter(route: object): void {
    this.meanService.setCurRoute( route ) ;
  }

  closeWindow(mean: object): void {
    let index = 0;
    let len = this.meanService.windows.length;

    if ( this.meanService.curRoute['href'] !== mean['href'] ) {
      for (let i = 0; i < len; i++) {
        if (this.meanService.windows[i].href === mean['href'] ) {
          this.meanService.windows.splice(i, 1);
          AppRoutingCache.deleteRouteSnapshot( mean['href'] );
          return ;
        }
      }
    }
    for (let i = 0; i < len; i++) {
      if (this.meanService.windows[i].href === mean['href'] ) {
        this.meanService.windows.splice(i, 1);
        if ( i === 0 && len > 1 ) {
          this.router.navigate([this.meanService.windows[i].href, {  }]);
          this.meanService.setCurRoute( this.meanService.windows[i] );
        } else if ( i === len - 1 && len > 1) {
          this.router.navigate([this.meanService.windows[i - 1].href, {  }]);
          this.meanService.setCurRoute( this.meanService.windows[i - 1] );
        } else if ( i > 0 && i < len - 1  ) {
          this.router.navigate([this.meanService.windows[i - 1].href, {  }]);
          this.meanService.setCurRoute( this.meanService.windows[i - 1] );
        } else {
          this.router.navigate(['/']);
        }
        break;
      }
    }
    AppRoutingCache.deleteRouteSnapshot(mean['href']);
  }

}
