import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/employee.service';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers :[EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(public ticketService : EmployeeService) { }

  ngOnInit() {
  }

  

}
