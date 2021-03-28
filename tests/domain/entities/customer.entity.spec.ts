import { CustomerEntity } from '../../../domain/entities/customer.entity'

describe('CustomerEntity', () => {
  test('should return valid entity via constructor', () => {
    const customer = new CustomerEntity('id', 'name', 'email', 'phone')

    expect(customer.id).toBe('id')
    expect(customer.name).toBe('name')
    expect(customer.email).toBe('email')
    expect(customer.phone).toBe('phone')
  })
})
