export interface ICustomer {
  // Уникальный идентификатор покупателя.
  id: string

  // Имя покупателя.
  name: string

  // E-mail покупателя.
  email: string

  // Номер телефона покупателя.
  phone: string
}

export class CustomerEntity implements ICustomer {
  constructor(
    private _id: string,
    public name: string,
    public email: string,
    public phone: string
  ) {}

  get id(): string {
    return this._id
  }
}
