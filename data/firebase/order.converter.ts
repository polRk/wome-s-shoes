import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
} from '@google-cloud/firestore'
import {
  CustomerEntity,
  ICustomer,
} from '../../domain/entities/customer.entity'
import { IOrder, OrderEntity } from '../../domain/entities/order.entity'
import { IProduct, ProductEntity } from '../../domain/entities/product.entity'
import { customerConverter } from './customer.converter'
import { productConverter } from './product.converter'

export const orderConverter: FirestoreDataConverter<OrderEntity> = {
  toFirestore(orderEntity: OrderEntity): IOrder {
    return {
      id: orderEntity.id,
      number: orderEntity.number,
      price: orderEntity.price,
      billingAddress: orderEntity.billingAddress,
      shippingAddress: orderEntity.shippingAddress,
      customer: customerConverter.toFirestore(
        orderEntity.customer
      ) as ICustomer,
      products: orderEntity.products.map(
        productConverter.toFirestore
      ) as IProduct[],
    }
  },

  fromFirestore(snapshot: QueryDocumentSnapshot<IOrder>): OrderEntity {
    const data = snapshot.data()

    return new OrderEntity(
      data.id,
      data.number,
      data.price,
      data.billingAddress,
      data.shippingAddress,
      new CustomerEntity(
        data.customer.id,
        data.customer.name,
        data.customer.email,
        data.customer.phone
      ),
      data.products.map((productData) => {
        return new ProductEntity(
          productData.id,
          productData.slug,
          productData.title,
          productData.description,
          productData.status,
          productData.featuredImage,
          productData.tags,
          productData.vendor,
          productData.variants
        )
      })
    )
  },
}
