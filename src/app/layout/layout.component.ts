import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AuthService } from '../services/auth-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    SideNavComponent,
    CommonModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  isLoggedIN: boolean = false

  constructor(
    private authService: AuthService
  ){
    this.authService.isLoggedIn.subscribe(res => this.isLoggedIN = res)
  }

}
