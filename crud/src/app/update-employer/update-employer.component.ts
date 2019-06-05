import { Component, OnInit } from '@angular/core';
import { EmployersService } from '../employers.service';

@Component({
  selector: 'app-update-employer',
  templateUrl: './update-employer.component.html',
  styleUrls: ['./update-employer.component.css'],
  providers: [EmployersService]
})
export class UpdateEmployerComponent{

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

    updateEmployer = (employer) => {
      this.api.updateEmployer(employer).subscribe(
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
