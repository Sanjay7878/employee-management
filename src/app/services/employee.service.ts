import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }


  addEmployee(data: any){
    let allEmployees:any[]= this.getEmployeeData()
    let employee = JSON.stringify([data, ...allEmployees])
    window.localStorage.setItem('employees', employee)
  }

  getEmployeeData(){
    return JSON.parse(window.localStorage.getItem('employees') || '[]')
  }

  updateEmployee(data: any){
    let allEmployees:any[]= this.getEmployeeData()
    let idx = allEmployees.findIndex(x => x.name === data.name)
    allEmployees[idx] = data;
    window.localStorage.setItem('employees', JSON.stringify(allEmployees))
  }
}
