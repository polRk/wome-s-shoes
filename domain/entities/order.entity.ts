import { CustomerEntity, ICustomer } from './customer.entity'
import { IProduct, ProductEntity } from './product.entity'

export type OrderId = string

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
  id: OrderId

  // Номер заказа.
  number: string

  // Итоговая цена заказа.
  price: number

  // Адрес покупки.
  billingAddress: IOrderAddress

  // Адрес доставки.
  shippingAddress: IOrderAddress

  // Заказчик.
  customer: ICustomer

  // Позиции в заказе.
  products: IProduct[]
}

export class OrderEntity implements IOrder {
  constructor(
    private _id: OrderId,
    public number: string,
    public price: number,
    public billingAddress: IOrderAddress,
    public shippingAddress: IOrderAddress,
    public customer: CustomerEntity,
    public products: ProductEntity[]
  ) {}

  get id(): OrderId {
    return this._id
  }
}
