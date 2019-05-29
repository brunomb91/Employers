import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowModule } from './show/show.module';

const routes: Routes = [
  {
    path: 'show',
    loadChildren: () =>
    import('./show/show.module').then(mod =>
    mod.ShowModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
