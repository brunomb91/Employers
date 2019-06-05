import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployerComponent } from './create-employer/create-employer.component';
import { EmployersListComponent } from './employers-list/employers-list.component';
import { InitialComponent } from './initial/initial.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployerComponent,
    EmployersListComponent,
    InitialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
