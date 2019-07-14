import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserCardComponent} from './user-card/user-card.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/userlist',
    pathMatch: 'full'
  },
  {
    path: 'userlist',
    component: UserListComponent
  },
  {
    path: 'userlist/:id',
    component: UserListComponent
  },
  {
    path: 'user/:id',
    component: UserCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
