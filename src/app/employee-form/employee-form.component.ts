import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  employee : Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private employeeService: EmployeeService
  ) { 
    this.employee = new Employee();
  }

  onSubmit() {
    this.employeeService.add(this.employee).subscribe(result => this.goToEmployeeList());
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

}
