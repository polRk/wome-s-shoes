export type CustomerId = string

export interface ICustomer {
  // Уникальный идентификатор покупателя.
  id: CustomerId

  // Имя покупателя.
  name: string

  // E-mail покупателя.
  email: string

  // Номер телефона покупателя.
  phone: string
}

export class CustomerEntity implements ICustomer {
  constructor(
    private _id: CustomerId,
    public name: string,
    public email: string,
    public phone: string
  ) {}

  get id(): CustomerId {
    return this._id
  }
}
