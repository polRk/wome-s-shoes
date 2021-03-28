import { autoId } from '@google-cloud/firestore/build/src/util'
import { CustomerEntity } from '../../domain/entities/customer.entity'

export const customerMock: CustomerEntity = new CustomerEntity(
  autoId(),
  'customer name',
  'customer email',
  'customer phone'
)
