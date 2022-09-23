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
    this.employeesURL = 'api/employee'
  }

  // get all
  public getAll() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesURL);
  }

  // add new 
  public addEmployee(employee : Employee) {
    return this.http.post<Employee>(this.employeesURL, employee);
  }
  
  // get by id
  public getbyId(id : BigInteger) : Observable<Employee> {
    const url = `${this.employeesURL}/${id}`;
    return this.http.get<Employee>(url);
  }

  // update
  public updateEmployee(employee : Employee, id : BigInteger) : Observable<any> {
    const url = `${this.employeesURL}/${id}`;
    return this.http.put<Employee>(url, employee);
  }

  // delete
  public deleteEmployee(id : BigInteger) : Observable<Employee> {
    const url = `${this.employeesURL}/${id}`;
    return this.http.delete<Employee>(url);
  }
}
