import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  allEmployee: any[] = []
  allAvatars: any[] = [
    {src:'assets/profiles/profile-1.png', name: 'Avatar-1'}, 
    {src:'assets/profiles/profile-2.png',name: 'Avatar-2'}, 
    {src: 'assets/profiles/profile-3.png',name: 'Avatar-3'}, 
    {src:'assets/profiles/profile-4.png', name: 'Avatar-4'}]

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getAllEmployees()
  }

  getAllEmployees(){
    this.allEmployee = this.employeeService.getEmployeeData()
  }

  editEmployee(emp: any){
    this.router.navigate(['/add-employee', emp.name.split(' ').join('-')])
  }
}
