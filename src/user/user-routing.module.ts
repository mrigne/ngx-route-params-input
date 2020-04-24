import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxRouteParamsInputComponent } from 'ngx-route-params-input';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [{
  path: ':userId',
  component: NgxRouteParamsInputComponent,
  data: {
    ngxRouteParamsInput: {
      component: UserComponent,
      routeParams: {
        userId: 'userIdInput'
      },
      queryParams: {
        section: 'section'
      }
    }
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
