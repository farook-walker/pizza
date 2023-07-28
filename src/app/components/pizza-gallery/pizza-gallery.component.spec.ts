import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaGalleryComponent } from './pizza-gallery.component';

describe('PizzaGalleryComponent', () => {
  let component: PizzaGalleryComponent;
  let fixture: ComponentFixture<PizzaGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
