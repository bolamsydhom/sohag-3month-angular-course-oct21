import { Injectable } from '@angular/core';
import { PaymentType } from '../_models/payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
  paymentTypeMethods : PaymentType[] = [
    {id: 1, name: 'Direct Bank Transfer' },
    {id: 2, name: 'Cheque Payment'},
    {id: 3, name: 'Paypal'},
    {id: 4, name: 'Visa'},
    {id: 5, name: 'MasterCard'},
    {id: 6, name: 'Meza'},
    {id: 7, name: 'COD'}
  ]
  constructor() { }

  getAllPaymentTypes(): PaymentType[]{
    return [...this.paymentTypeMethods]
  }

  getPaymentTypeById(id: number): PaymentType | undefined{
    return this.paymentTypeMethods.find((p)=> p.id === id);
  }

  save(){}
  update(){}
  delete(){}
}
