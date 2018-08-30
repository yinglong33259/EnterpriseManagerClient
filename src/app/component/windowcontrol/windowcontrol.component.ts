import { Component, OnInit } from '@angular/core';
import {MeanService} from '../../service/mean.service';
import {AppRoutingCache} from '../../AppRoutingCache';
import {Router} from '@angular/router';

@Component({
  selector: 'app-windowcontrol',
  templateUrl: './windowcontrol.component.html',
  styleUrls: ['./windowcontrol.component.css'],
  providers: [AppRoutingCache]
})
export class WindowcontrolComponent implements OnInit {

  constructor(
    private meanService: MeanService,
    private router: Router
  ) { }

  ngOnInit() {
    let curUrl = location.pathname.split("/")[1];
    if ( this.meanService.getMeanByHref(curUrl) != null ) {
      this.meanService.windows.push( this.meanService.getMeanByHref(curUrl) );
      this.meanService.setCurRoute( this.meanService.getMeanByHref(curUrl) );
    }
  }

  enterRouter(route: mean): void {
    this.meanService.setCurRoute( route ) ;
  }

  closeWindow(mean: object): void {
    let index = 0;
    let len = this.meanService.windows.length;
    for (let i = 0; i < len; i++) {
      if (this.meanService.windows[i].href === mean['href'] ) {
        index = i;
        this.meanService.windows.splice(i, 1);
        if ( i === 0 && len > 1 ) {
          this.router.navigate([this.meanService.windows[i].href, {  }]);
          this.meanService.setCurRoute( this.meanService.windows[i] );
        } else if ( i === len - 1 && len > 1) {
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
