import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesURL: string;

  constructor(private http: HttpClient) {
    this.employeesURL = 'http://localhost:4200/employee'
  }

  // get all
  public getAll() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesURL);
  }

  // add new 
  public add(employee : Employee) {
    return this.http.post<Employee>(this.employeesURL, employee);
  }
  
  // get by id

  // update

  // delete

}
