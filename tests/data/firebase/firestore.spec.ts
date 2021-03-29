/* eslint-disable no-console */
import { FirestoreDB } from '../../../data/firebase/firestoreDB'
import { ProductStatus } from '../../../domain/entities/product.entity'
import firestore from '../../../utils/firestore'
import { productMock } from '../../__mocks__/productMock'

jest.mock('firebase-admin', () => {
  return {
    initializeApp: jest.fn(),
    credential: {
      cert: jest.fn(),
    },
    firestore: jest.fn(() => {
      return {
        collection: jest.fn().mockReturnThis(),
        doc: jest.fn().mockReturnThis(),
        withConverter: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        get: jest.fn().mockResolvedValue({
          exists: true,
          data: jest.fn(),
          docs: [{ data: jest.fn() }],
        }),
        create: jest.fn((value) => value),
        update: jest.fn((value) => value),
        delete: jest.fn((value) => value),
      }
    }),
  }
})

describe('FirestoreDB', () => {
  test('should create single instance of class', () => {
    const a = new FirestoreDB()
    const b = new FirestoreDB()

    expect(a === b).toBeTruthy()
  })

  describe('FirestoreDB.getProductById', () => {
    test('should call all necessary methods', async () => {
      const db = new FirestoreDB()

      await db.getProductById('product_id')

      expect(firestore.collection).toBeCalledWith('products')
      expect(firestore.doc).toBeCalledWith('product_id')
      expect(firestore.doc('').get).toBeCalled()
    })
  })

  describe('FirestoreDB.getProductBySlug', () => {
    test('should call all necessary methods', async () => {
      const db = new FirestoreDB()

      await db.getProductBySlug('product_slug')

      expect(firestore.collection).toBeCalledWith('products')
      expect(firestore.collection('').where).toBeCalledWith(
        'slug',
        '==',
        'product_slug'
      )
      expect(firestore.collection('').get).toBeCalled()
    })
  })

  describe('FirestoreDB.getActiveProducts', () => {
    test('should call all necessary methods', async () => {
      const db = new FirestoreDB()

      await db.getActiveProducts()

      expect(firestore.collection).toBeCalledWith('products')
      expect(firestore.collection('').where).toBeCalledWith(
        'status',
        '==',
        ProductStatus.ACTIVE
      )
      expect(firestore.collection('').get).toBeCalled()
    })
  })

  describe('FirestoreDB.createProduct', () => {
    test('should call all necessary methods', async () => {
      const db = new FirestoreDB()

      const productEntity = await db.createProduct(productMock)

      expect(firestore.collection).toBeCalledWith('products')
      expect(firestore.doc).toBeCalledWith(productMock.id)
      await expect(firestore.doc(productMock.id).create).toHaveBeenCalledWith(
        productEntity
      )
    })
  })

  describe('FirestoreDB.updateProduct', () => {
    test('should call all necessary methods', async () => {
      const db = new FirestoreDB()

      const productEntity = await db.updateProduct(productMock)

      expect(firestore.collection).toBeCalledWith('products')
      expect(firestore.doc).toBeCalledWith(productMock.id)
      await expect(firestore.doc(productMock.id).update).toHaveBeenCalledWith(
        productEntity
      )
    })
  })

  describe('FirestoreDB.deleteProduct', () => {
    test('should call all necessary methods', async () => {
      const db = new FirestoreDB()

      await db.deleteProduct(productMock)

      expect(firestore.collection).toBeCalledWith('products')
      expect(firestore.doc).toBeCalledWith(productMock.id)
      await expect(firestore.doc(productMock.id).delete).toHaveBeenCalled()
    })
  })
})
