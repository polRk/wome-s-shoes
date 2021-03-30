import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
} from '@google-cloud/firestore'
import { IProduct, ProductEntity } from '../../domain/entities/product.entity'

export const productConverter: FirestoreDataConverter<ProductEntity> = {
  toFirestore(productEntity: ProductEntity): Omit<IProduct, 'id'> {
    return {
      slug: productEntity.slug,
      title: productEntity.title,
      description: productEntity.description,
      status: productEntity.status,
      featuredImage: productEntity.featuredImage,
      tags: productEntity.tags,
      vendor: productEntity.vendor,
      variants: productEntity.variants,
    }
  },

  fromFirestore(snapshot: QueryDocumentSnapshot<IProduct>): ProductEntity {
    const data = snapshot.data()

    return new ProductEntity(
      snapshot.id,
      data.slug,
      data.title,
      data.description,
      data.status,
      data.featuredImage,
      data.tags,
      data.vendor,
      data.variants
    )
  },
}
