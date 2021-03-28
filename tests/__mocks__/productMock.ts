import { autoId } from '@google-cloud/firestore/build/src/util'
import {
  ProductEntity,
  ProductStatus,
} from '../../domain/entities/product.entity'

export const productMock: ProductEntity = new ProductEntity(
  autoId(),
  'product slug',
  'product title',
  'product description',
  ProductStatus.ACTIVE,
  {
    title: 'product image title',
    width: 640,
    height: 480,
    src: 'product image src',
  },
  ['product tag 1', 'product tag 2', 'product tag 3'],
  'product vendor',
  [
    {
      sku: 'product variant 1 sku',
      color: 'product variant 1 color',
      size: 1,
      price: 1,
      position: 1,
      images: [
        {
          title: 'product variant 1 image 1 title',
          width: 640,
          height: 480,
          src: 'product variant 1 image 1 src',
        },
        {
          title: 'product variant 1 image 2 title',
          width: 640,
          height: 480,
          src: 'product variant 1 image 2 src',
        },
      ],
      inventoryQuantity: 1,
    },
  ]
)
