import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployerComponent } from './create-employer/create-employer.component';
import { EmployersListComponent } from './employers-list/employers-list.component';
import { InitialComponent } from './initial/initial.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployerComponent,
    EmployersListComponent,
    InitialComponent,
    UpdateEmployerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
