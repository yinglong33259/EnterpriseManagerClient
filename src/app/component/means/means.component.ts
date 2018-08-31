import { Component, OnInit } from '@angular/core';
import { MeanService } from '../../service/mean.service';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-means',
  templateUrl: './means.component.html',
  styleUrls: ['./means.component.css'],
  animations: [
    trigger('heroState', [

      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))

    ])
  ]

})

export class MeansComponent implements OnInit {

  public means: object[];

  constructor(
    private meanService: MeanService
  ) { }

  ngOnInit() {
    this.getMeans();
  }

  clickTopMean(): void {
  }

  getMeans(): void {
    this.means = this.meanService.getMeans();
  }

  add2window(mean: object): void {
    this.meanService.curRoute = mean;
    this.meanService.setCurRoute( mean );
    for (let i = 0 ; i < this.meanService.windows.length; i++) {
      if (this.meanService.windows[i]['title'] === mean['title'] ) {
        return;
      }
    }
    this.meanService.windows.push(mean);
  }

}
