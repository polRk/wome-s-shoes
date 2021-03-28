import { FirestoreDB } from '../../../data/firebase/firestoreDB'

jest.mock('firebase-admin', () => ({
  firestore: jest.fn(),
}))

describe('FirestoreDB', () => {
  test('should create single instance of class', () => {
    const a = new FirestoreDB()
    const b = new FirestoreDB()

    expect(a === b).toBeTruthy()
  })
})
