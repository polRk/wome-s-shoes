import * as admin from 'firebase-admin'

try {
  admin.initializeApp({
    credential: admin.credential.cert(
      'women-s-shoes-firebase-adminsdk-bu86q-e0d8eff5c4.json'
    ),
  })
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack)
  }
}

export default admin.firestore()
