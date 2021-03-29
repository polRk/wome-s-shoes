import { autoId } from '@google-cloud/firestore/build/src/util'
import { CustomerEntity } from '../../domain/entities/customer.entity'
import { OrderEntity } from '../../domain/entities/order.entity'
import {
  ProductEntity,
  ProductStatus,
} from '../../domain/entities/product.entity'

export const orderMock: OrderEntity = new OrderEntity(
  autoId(),
  'order number',
  100,
  {
    country: 'order billing country',
    city: 'order billing city',
    address: 'order billing address',
    zip: 100001,
  },
  {
    country: 'order shipping country',
    city: 'order shipping city',
    address: 'order shipping address',
    zip: 100001,
  },
  new CustomerEntity(
    autoId(),
    'order customer name',
    'order customer email',
    'order customer phone'
  ),
  [
    new ProductEntity(
      autoId(),
      'order product slug',
      'order product title',
      'order product description',
      ProductStatus.ACTIVE,
      {
        title: 'order product image title',
        width: 640,
        height: 480,
        src: 'order product image src',
      },
      ['order product tag'],
      'order product vendor',
      [
        {
          sku: 'order product variant sku',
          size: 37,
          color: 'order product variant color',
          price: 100,
          position: 1,
          inventoryQuantity: 1,
          images: [
            {
              title: 'order product variant image title',
              width: 640,
              height: 480,
              src: 'order product variant image src',
            },
          ],
        },
      ]
    ),
  ]
)
