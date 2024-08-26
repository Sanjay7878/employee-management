import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlClickOutsideDirectiveModule } from '../../directives/click-outside.directive';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ControlClickOutsideDirectiveModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  currentTeam: string = ''
  teams: any[] = ['Product Team', 'IDC', 'OCBC', 'Radian', 'Rustify']
  showTeams: boolean = false
  isLoggedIn: boolean = false

  constructor(
    private authService: AuthService
  ) {
    this.authService.isLoggedIn.subscribe(res => this.isLoggedIn = res)
  }
}
