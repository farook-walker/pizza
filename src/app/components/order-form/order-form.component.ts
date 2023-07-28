import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {

  OrderForm: FormGroup;

  OrderRequest = new Subject<any>();

  constructor(private FormBuilder: FormBuilder)
  {
    this.OrderForm = this.FormBuilder.group({
      name: new FormControl('', [Validators.required, Validators.pattern('[^.]*')]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')])
    });

    this.OrderRequest.subscribe((data: any) => {
      alert("Спасибо за заказ");
      this.OrderForm.reset();
    });
  }

  OnSubmit()
  {
    if(this.OrderForm.valid)
    {
      this.OrderRequest.next({
        name: this.OrderForm.get('name')?.value,
        address: this.OrderForm.get('address')?.value,
        phone: this.OrderForm.get('phone')?.value
      });
    }
  }
}
