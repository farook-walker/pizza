import { Component, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IPizza } from 'src/app/models/IPizza';

@Component({
  selector: 'app-pizza-gallery',
  templateUrl: './pizza-gallery.component.html',
  styleUrls: ['./pizza-gallery.component.scss']
})
export class PizzaGalleryComponent implements AfterViewInit
{
  galleryItems = <Array<IPizza>>[
    {
      title: 'Мясная Делюкс',
      ingredients: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      img: 'Layer 2.png'
    },
    {
      title: 'Морская Премиум',
      ingredients: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      img: 'Layer 3.png'
    },
    {
      title: 'Бекон и Сосиски',
      ingredients: 'Бекон, сыр, сосиски, ананас, томатная паста',
      img: 'Layer 4.png'
    },
    {
      title: 'Куриная Делюкс',
      ingredients: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      img: 'Layer 5.png'
    },
    {
      title: 'Барбекю Премиум',
      ingredients: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чи',
      img: 'Layer 6.png'
    },
    {
      title: 'Пепперони Дабл',
      ingredients: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
      img: 'Layer 7.png'
    },
    {
      title: 'Куриное трио',
      ingredients: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
      img: 'Layer 8.png'
    },
    {
      title: 'Сырная',
      ingredients: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
      img: 'Layer 9.png'
    }
  ];

  galleryItems$ = new Subject<Array<IPizza>>();

  currentPizza!: IPizza | undefined;

  ngAfterViewInit()
  {
    this.galleryItems$.next(this.galleryItems)
  }

}
