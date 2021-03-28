import { CustomerEntity } from './customer.entity'
import { ProductEntity } from './product.entity'

export interface IOrderAddress {
  // Страна
  country: string

  // Город
  city: string

  // Адрес
  address: string

  // Почтовый индекс
  zip: number
}

export interface IOrder {
  // Уникальный идентификатор заказа.
  id: string

  // Номер заказа.
  number: string

  // Итоговая цена заказа.
  price: number

  // Адрес покупки.
  billingAddress: IOrderAddress

  // Адрес доставки.
  shippingAddress: IOrderAddress

  // Заказчик.
  customer: CustomerEntity

  // Позиции в заказе.
  products: ProductEntity[]
}

export class OrderEntity implements IOrder {
  constructor(
    private _id: string,
    public number: string,
    public price: number,
    public billingAddress: IOrderAddress,
    public shippingAddress: IOrderAddress,
    public customer: CustomerEntity,
    public products: ProductEntity[]
  ) {}

  get id(): string {
    return this._id
  }
}
