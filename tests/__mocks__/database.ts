import { customerConverter } from '../../data/firebase/customer.converter'
import { orderConverter } from '../../data/firebase/order.converter'
import { productConverter } from '../../data/firebase/product.converter'
import { customerMock } from './customerMock'
import { orderMock } from './orderMock'
import { productMock } from './productMock'

interface Document {
  data: any
  collections: Collection[]
}

interface Collection {
  [id: string]: Document
}

interface Database {
  [name: string]: Collection
}

export const databaseMock: Database = {
  products: {
    '1': {
      data: productConverter.toFirestore(productMock),
      collections: [],
    },
    '2': {
      data: productConverter.toFirestore(productMock),
      collections: [],
    },
    '3': {
      data: productConverter.toFirestore(productMock),
      collections: [],
    },
  },
  customers: {
    '1': {
      data: customerConverter.toFirestore(customerMock),
      collections: [],
    },
    '2': {
      data: customerConverter.toFirestore(customerMock),
      collections: [],
    },
    '3': {
      data: customerConverter.toFirestore(customerMock),
      collections: [],
    },
  },
  orders: {
    '1': {
      data: orderConverter.toFirestore(orderMock),
      collections: [],
    },
    '2': {
      data: orderConverter.toFirestore(orderMock),
      collections: [],
    },
    '3': {
      data: orderConverter.toFirestore(orderMock),
      collections: [],
    },
  },
}
