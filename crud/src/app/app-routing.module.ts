import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialComponent } from './initial/initial.component';
import { CreateEmployerComponent } from './create-employer/create-employer.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';
import { EmployersListComponent } from './employers-list/employers-list.component';

const routes: Routes = [{ path: '', component: InitialComponent },
           { path: 'create', component: CreateEmployerComponent },
           { path: 'list', component: EmployersListComponent },
           { path: 'list/update', component: UpdateEmployerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
