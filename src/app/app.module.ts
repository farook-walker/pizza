import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PromoComponent } from './components/promo/promo.component';
import { PizzaGalleryComponent } from './components/pizza-gallery/pizza-gallery.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromoComponent,
    PizzaGalleryComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
