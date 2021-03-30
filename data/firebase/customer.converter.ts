import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
} from '@google-cloud/firestore'
import {
  CustomerEntity,
  ICustomer,
} from '../../domain/entities/customer.entity'

export const customerConverter: FirestoreDataConverter<CustomerEntity> = {
  toFirestore(customerEntity: CustomerEntity): Omit<ICustomer, 'id'> {
    return {
      name: customerEntity.name,
      email: customerEntity.email,
      phone: customerEntity.phone,
    }
  },

  fromFirestore(snapshot: QueryDocumentSnapshot<ICustomer>): CustomerEntity {
    const data = snapshot.data()

    return new CustomerEntity(snapshot.id, data.name, data.email, data.phone)
  },
}
