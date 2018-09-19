import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponentComponent} from './component/page-not-found-component/page-not-found-component.component';
import {MgmtSystemComponent} from './component/mgmt-system/mgmt-system.component';
import {LoginComponent} from './component/login/login.component';
import {UserComponent} from './component/user/user.component';
import {MessagesComponent} from './component/messages/messages.component';
import {ServerPagenationComponent} from './component/server-pagenation/server-pagenation.component';
import {ClientPagenationComponent} from './component/client-pagenation/client-pagenation.component';
import {ImagediyComponent} from './component/imagediy/imagediy.component';
import {EchartsExampleOneComponent} from './component/echarts-example-one/echarts-example-one.component';
import {EchartsExampleTwoComponent} from './component/echarts-example-two/echarts-example-two.component';

const routes: Routes = [
  { path: 'mgmt',
    component: MgmtSystemComponent ,
    children: [
      { path: 'users',
        component: UserComponent ,
        data: { keep: true }
      },
      { path: 'wallet',
        component: MessagesComponent ,
        data: { keep: false }
      },
      { path: 'serverPagenation',
        component: ServerPagenationComponent ,
        data: { keep: true }
      },
      { path: 'clientPagenation',
        component: ClientPagenationComponent ,
        data: { keep: true }
      },
      { path: 'imageToSpot',
        component: ImagediyComponent ,
        data: { keep: false }
      },
      { path: 'example1',
        component: EchartsExampleOneComponent ,
        data: { keep: false }
      },
      { path: 'example2',
        component: EchartsExampleTwoComponent ,
        data: { keep: false }
      },
      { path: '**', component: PageNotFoundComponentComponent, outlet: 'mgmt', }
    ],
    data: { keep: false }
  },
  { path: 'login',
    component: LoginComponent ,
    data: { keep: false }
  },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})


export class AppRoutingModule {

}
