import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowModule } from './show/show.module';
import { ShowRoutingModule } from './show/show-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'show',
    component: ShowModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
