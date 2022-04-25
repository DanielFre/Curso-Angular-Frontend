import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Curso de Angular Frontend';
  menuItems: MenuItem[]=[
    {
      icon: 'dashboard',
      routerLinks: '/dashboard',
      toolTipText: 'Dashboard'
    },
    {
      icon: 'sports_martial_arts',
      routerLinks: '/heroes',
      toolTipText: 'Heroes'
    }
  ]
}
