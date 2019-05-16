import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  // movies = [{title:'titanic'},{title:'avatar'}];
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
            //this.selectedMovie = data;
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

  // constructor(private api:ApiService) {
  //   this.getMovies();
  //   this.selectedMovie = {id: -1, title: '', desc: '', year: 0};
  // }
  //
  // getMovies = () => {
  //   this.api.getAllMovies().subscribe(
  //     data => {
  //       this.movies = data;
  //     },
  //     error => {
  //       console.log(error);
  //     })
  //   }
  //
  //   movieClicked = (movie) => {
  //         console.log(movie.id);
  //         this.api.getOneMovie(movie.id).subscribe(
  //           data => {
  //             this.selectedMovie = data;
  //           },
  //           error => {
  //             console.log(error);
  //           })
  //     }
  //
  //     updateMovie = () => {
  //       this.api.updateMovie(this.selectedMovie).subscribe(
  //         data => {
  //           //this.selectedMovie = data;
  //           this.getMovies();
  //         },
  //         error => {
  //           console.log(error);
  //         })
  //       }
  //
  //       createMovie = () => {
  //         this.api.createMovie(this.selectedMovie).subscribe(
  //           data => {
  //             this.movies.push(data);
  //           },
  //           error => {
  //             console.log(error);
  //           })
  //       }
  //
  //       deleteMovie = () => {
  //           this.api.deleteMovie(this.selectedMovie.id).subscribe(
  //             data => {
  //               this.getMovies();
  //             },
  //             error => {
  //               console.log(error);
  //             })
  //       }
}
