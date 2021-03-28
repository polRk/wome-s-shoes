import * as admin from 'firebase-admin'

let instance: FirestoreDB

export class FirestoreDB {
  private db = admin.firestore()

  constructor() {
    if (instance === undefined) {
      instance = this
    }

    return instance
  }
}
