import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {UserComponent} from './component/user/user.component';
import {PageNotFoundComponentComponent} from './component/page-not-found-component/page-not-found-component.component';
import {MessagesComponent} from './component/messages/messages.component';
import {ClientPagenationComponent} from './component/client-pagenation/client-pagenation.component';
import {ServerPagenationComponent} from './component/server-pagenation/server-pagenation.component';

const routes: Routes = [
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
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})


export class AppRoutingModule {

}
