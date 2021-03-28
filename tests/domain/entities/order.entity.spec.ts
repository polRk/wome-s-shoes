import { OrderEntity } from '../../../domain/entities/order.entity'
import { billingAddressMock } from '../../__mocks__/billingAddressMock'
import { customerMock } from '../../__mocks__/customerMock'
import { productMock } from '../../__mocks__/productMock'
import { shippingAddressMock } from '../../__mocks__/shippingAddressMock'

describe('OrderEntity', () => {
  test('should return valid entity via constructor', () => {
    const order = new OrderEntity(
      'id',
      'OR-1234',
      100,
      billingAddressMock,
      shippingAddressMock,
      customerMock,
      [productMock]
    )

    expect(order.id).toBe('id')
    expect(order.number).toBe('OR-1234')
    expect(order.price).toBe(100)
    expect(order.billingAddress).toMatchObject(billingAddressMock)
    expect(order.shippingAddress).toMatchObject(shippingAddressMock)
    expect(order.customer).toMatchObject(customerMock)
    expect(order.products).toMatchObject([productMock])
  })
})
