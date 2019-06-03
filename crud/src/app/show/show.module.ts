import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ShowRoutingModule } from './show-routing.module';
import { ShowListComponent } from './show-list/show-list.component';

@NgModule({
  declarations: [ShowListComponent],
  imports: [
    CommonModule,
    ShowRoutingModule,
    ShowListComponent,
    RouterModule.forRoot([
      { path: 'show', component: ShowListComponent },
    ])
  ],
})
export class ShowModule {

}
