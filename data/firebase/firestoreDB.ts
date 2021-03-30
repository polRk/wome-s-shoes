import {
  CollectionReference,
  DocumentReference,
  FirestoreDataConverter,
} from '@google-cloud/firestore'
import {
  ProductEntity,
  ProductId,
  ProductStatus,
} from '../../domain/entities/product.entity'
import firestore from '../../utils/firestore'
import { Db } from '../db'
import { productConverter } from './product.converter'

let instance: FirestoreDB

export class FirestoreDB implements Db {
  private db = firestore

  constructor() {
    if (instance === undefined) {
      instance = this
    }

    return instance
  }

  async getProductById(id: ProductId): Promise<ProductEntity | null> {
    const ref = this.createRef('products', productConverter, id)

    return FirestoreDB.getDocument<ProductEntity>(ref)
  }

  async getProductBySlug(slug: string): Promise<ProductEntity | null> {
    const querySnapshot = await this.createRef('products', productConverter)
      .where('slug', '==', slug)
      .get()

    if (querySnapshot.empty) return null

    return querySnapshot.docs[0].data()
  }

  async getActiveProducts(
    limit?: number,
    offset?: number
  ): Promise<ProductEntity[]> {
    let query = this.db
      .collection('products')
      .withConverter(productConverter)
      .where('status', '==', ProductStatus.ACTIVE)

    if (limit) query = query.limit(limit)
    if (offset) query = query.offset(offset)

    const querySnapshot = await query.get()
    if (querySnapshot.empty) return []

    return querySnapshot.docs.map((doc) => doc.data())
  }

  async createProduct(data: ProductEntity): Promise<ProductEntity> {
    const ref = this.createRef('products', productConverter, data.id)
    await ref.create(data)

    return data
  }

  async updateProduct(data: ProductEntity): Promise<ProductEntity> {
    const ref = this.createRef('products', productConverter, data.id)
    await ref.update(data)

    return data
  }

  async deleteProduct(data: ProductEntity): Promise<ProductEntity> {
    const ref = this.createRef('products', productConverter, data.id)
    await ref.delete()

    return data
  }

  private static async getDocument<Entity>(
    ref: DocumentReference<Entity>
  ): Promise<Entity | null> {
    const documentSnapshot = await ref.get()
    if (!documentSnapshot.exists) {
      return null
    }

    const result = documentSnapshot.data()
    if (!result) {
      return null
    }

    return result
  }

  private createRef(collection: string): CollectionReference
  private createRef<Entity>(
    collection: string,
    converter: FirestoreDataConverter<Entity>
  ): CollectionReference<Entity>
  private createRef<Entity>(
    collection: string,
    converter: FirestoreDataConverter<Entity>,
    doc: string
  ): DocumentReference<Entity>
  private createRef<Entity>(
    collection: string,
    converter?: FirestoreDataConverter<Entity>,
    doc?: string
  ) {
    const collectionReference = this.db.collection(collection)
    if (!converter) return collectionReference
    if (!doc) return collectionReference.withConverter(converter)

    return collectionReference.withConverter(converter).doc(doc)
  }
}
