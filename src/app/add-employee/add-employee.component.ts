import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit {

  allDesignation: string[] = ['Software Developer', 'Senior Software Developer', 'Quality Assurance',
    'Technical Lead', 'Manager']
  showDesingation: boolean = false;
  showAvatar: boolean = false;
  allAvatars: any[] = [
    {src:'assets/profiles/profile-1.png', name: 'Avatar-1'}, 
    {src:'assets/profiles/profile-2.png',name: 'Avatar-2'}, 
    {src: 'assets/profiles/profile-3.png',name: 'Avatar-3'}, 
    {src:'assets/profiles/profile-4.png', name: 'Avatar-4'}]
  employeeForm!: FormGroup
  currentEmployee: any = {}

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private actvdRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.actvdRoute.params.subscribe((res: any)=>{
      if(res && res.id){
        this.getEmployByName(res.id.split('-').join(' '))
      } else {
        this.initForm()
      }
    })
  }

  getEmployByName(name: string){
    let allEmployee: any[] = this.employeeService.getEmployeeData()
    this.currentEmployee = allEmployee.find(x => x.name === name)
    console.log('this.currentEmployee: ', this.currentEmployee);
    this.initForm()
  }

  initForm(){
    this.employeeForm = this.fb.group({
      name: [this.currentEmployee?.name || '', Validators.required],
      email: [this.currentEmployee?.email || '', Validators.required],
      organization: [this.currentEmployee?.organization ||'', Validators.required],
      contact: [this.currentEmployee?.contact ||'', Validators.required],
      designation: [this.currentEmployee?.designation ||'', Validators.required],
      avatar: [this.currentEmployee?.avatar ||'', Validators.required],
      id: [this.currentEmployee?.id || '']
    })
  }

  selectDesignation(value: string){
    this.employeeForm.get('designation')?.patchValue(value)
    this.showDesingation = false
  }

  selectAvatar(value: string){
    this.employeeForm.get('avatar')?.patchValue(value)
    this.showAvatar = false
  }

  onSubmitForm(){
    let data = {...this.employeeForm.getRawValue()}
    data.id = parseInt(Math.random().toString())
    if(this.isValid(data)){
      if(this.currentEmployee && this.currentEmployee.name){
        this.employeeService.addEmployee(data)
        this.router.navigate(['/dashboard'])
      } else {
        this.employeeService.addEmployee(data)
        this.router.navigate(['/dashboard'])
      }
    } else{
      window.alert('Employee Alredy Exists')
      this.clear()
    }
  }

  clear(){
    this.employeeForm.reset()
  }

  isValid(formData: any){
    let employees: any[] = this.employeeService.getEmployeeData()
    const doesExist = employees.find(x =>  formData.name === x.name || formData.email === x.name)
    return doesExist && doesExist.id ? false: true
  }
}
