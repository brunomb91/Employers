import { Component } from '@angular/core';
import { ApiService } from './api.service';

import { ShowService } from './show/show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  employers = [{name:'Bruno'},{name:'Bruno2'}];
  selectedEmployer;
  postActivated = true;
  divActivated = false;

  constructor(private api:ApiService) {
    this.getEmployers();
    this.selectedEmployer = {id: -1, name: '', address: '', salary: 0.0, badgeNumber: 0, dateJoined: ''};
  }

  getEmployers = () => {
    this.api.getAllEmployers().subscribe(
      data => {
        this.employers = data;
      },
      error => {
        console.log(error);
      })
    }

  employerClicked = (employer) => {
        console.log(employer.id);
        this.api.getOneEmployer(employer.id).subscribe(
          data => {
            this.selectedEmployer = data;
          },
          error => {
            console.log(error);
          })
    }

    updateEmployer = () => {
      this.api.updateEmployer(this.selectedEmployer).subscribe(
        data => {
          this.getEmployers();
        },
        error => {
          console.log(error);
        })
      }

    createEmployer = () => {
      this.api.createEmployer(this.selectedEmployer).subscribe(
        data => {
          this.employers.push(data);
        },
        error => {
          console.log(error);
        })
    }

    deleteEmployer = () => {
        this.api.deleteEmployer(this.selectedEmployer.id).subscribe(
          data => {
            this.getEmployers();
          },
          error => {
            console.log(error);
          })
    }

}
