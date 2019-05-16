import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllEmployers(): Observable<any> {
    return this.http.get(this.baseurl + '/employers/',
    {headers: this.httpHeaders});
  }

  getOneEmployer(id): Observable<any> {
    return this.http.get(this.baseurl + '/employers/' + id + '/',
    {headers: this.httpHeaders});
  }

  updateEmployer(employer): Observable<any> {
    const body =  {name: employer.name, address: employer.address, salary: employer.salary, badgeNumber: employer.badgeNumber, dateJoined: employer.dateJoined};
    return this.http.put(this.baseurl + '/employers/' + employer.id + '/', body,
    {headers: this.httpHeaders});
  }

  createEmployer(employer): Observable<any> {
    const body =  {name: employer.name, address: employer.address, salary: employer.salary, badgeNumber: employer.badgeNumber, dateJoined: employer.dateJoined};
    return this.http.post(this.baseurl + '/employers/', body,
    {headers: this.httpHeaders});
  }

  deleteEmployer(id): Observable<any> {
    return this.http.delete(this.baseurl + '/employers/' + id + '/',
    {headers: this.httpHeaders});
  }

  // getAllMovies(): Observable<any> {
  //   return this.http.get(this.baseurl + '/movies/',
  //   {headers: this.httpHeaders});
  // }
  //
  // getOneMovie(id): Observable<any> {
  //   return this.http.get(this.baseurl + '/movies/' + id + '/',
  //   {headers: this.httpHeaders});
  // }
  //
  // updateMovie(movie): Observable<any> {
  //   const body =  {title: movie.title, desc: movie.desc, year: movie.year};
  //   return this.http.put(this.baseurl + '/movies/' + movie.id + '/', body,
  //   {headers: this.httpHeaders});
  // }
  //
  // createMovie(movie): Observable<any> {
  //   const body =  {title: movie.title, desc: movie.desc, year: movie.year};
  //   return this.http.post(this.baseurl + '/movies/', body,
  //   {headers: this.httpHeaders});
  // }
  //
  // deleteMovie(id): Observable<any> {
  //   return this.http.delete(this.baseurl + '/movies/' + id + '/',
  //   {headers: this.httpHeaders});
  // }


}
