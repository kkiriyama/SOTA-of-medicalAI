const firebase = require('firebase')

const defaultProductionConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  datbaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

const defaultTestConfig = {
  apiKey: process.env.FIREBASE_TEST_API_KEY,
  authDomain: process.env.FIREBASE_TEST_AUTH_DOMAIN,
  datbaseURL: process.env.FIREBASE_TEST_DATABASE_URL,
  projectId: process.env.FIREBASE_TEST_PROJECT_ID,
  storageBucket: process.env.FIREBASE_TEST_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_TEST_MESSAGING_SENDER_ID
}

module.exports = {
  firebaseInitializeApp() {
    const config = process.NODE_DEPLOY === 'production' ? defaultProductionConfig : defaultTestConfig
    firebase.initializeApp(config)
  }
}
