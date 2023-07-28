import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isActive = false;
  menuItems = [
    'Пиццы',
    'Напитки',
    'Доставка и оплата',
    'Контакты'
  ];
}
