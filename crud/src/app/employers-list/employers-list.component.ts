import { Component, OnInit } from '@angular/core';
import { EmployersService } from '../employers.service';

@Component({
  selector: 'app-employers-list',
  templateUrl: './employers-list.component.html',
  styleUrls: ['./employers-list.component.css'],
  providers: [EmployersService]
})
export class EmployersListComponent {
  employers = [{name:'Bruno'},{name:'Bruno2'}];
  selectedEmployer;
  
  constructor(private api:EmployersService) {
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

    deleteEmployer = (employer) => {
      console.log(employer);
      this.api.deleteEmployer(employer.id).subscribe(
        data => {
          this.getEmployers();
        },
        error => {
          console.log(error);
        })
    }

}
