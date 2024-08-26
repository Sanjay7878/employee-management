import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {

  allDesignation: string[] = ['Software Developer', 'Senior Software Developer', 'Quality Assurance',
    'Technical Lead', 'Manager']
  showDesingation: boolean = false;
  showAvatar: boolean = false;
  allAvatars: string[] = ['assets/profiles/profile-1.png', 'assets/profiles/profile-2.png','assets/profiles/profile-3.png', 'assets/profiles/profile-4.png']
}
