import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  currentTab: string = ''
  showDepartment: boolean = false;
  allDepartments: string[] = ['Front End Development', 'Ml Engineering', 'Quality Analyst', 'Human Resource', 'Research & Development']
  currentDepartment:string = 'Front End Development'
  
  constructor(
    private authService: AuthService
  ){}

  onViewNav(nav: string){
    this.currentTab = nav
  }

  collapseSearch(){
    this.currentTab = ''
  }

  logout(){
    this.authService.logout()
  }
}
