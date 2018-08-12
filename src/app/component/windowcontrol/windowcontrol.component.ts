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
        } else if ( i === len - 1 && len > 1) {
          this.router.navigate([this.meanService.windows[i - 1].href, {  }]);
        } else {
          this.router.navigate(['/']);
        }
        break;
      }
    }
    AppRoutingCache.deleteRouteSnapshot(mean['href']);
  }

}
