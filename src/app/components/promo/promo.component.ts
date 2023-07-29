import { Component } from '@angular/core';
import { IPromo } from 'src/app/models/IPromo';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent {
  promoItems = <Array<IPromo>>[
    {
      title: 'Лучшее тесто',
      icon: 'assets/img/promo/hop.png',
      desc: `Мы создаем тесто только из 
      отборной итальянской муки
      наивысшего качества`
    },
    {
      title: 'лучшие повара',
      icon: 'assets/img/promo/kitchen-pack.png',
      desc: `Пиццы готовят самые
      профессиональные 
      итальянские повара`
    },
    {
      title: 'гарантия качества',
      icon: 'assets/img/promo/seo-and-web.png',
      desc: `Наша пиццерия получила
      множество наград и 
      признаний по всему миру`
    },
    {
      title: 'отборные рецепты',
      icon: 'assets/img/promo/holidays.png',
      desc: `Мы используем рецепты
      от мировых лидеров
      в изготовлении пиццы`
    }
  ];
}
