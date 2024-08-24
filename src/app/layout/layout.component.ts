import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    SideNavComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
