// src/lib/firebase.js
import admin from 'firebase-admin';

try {
  // Parse JSON credentials from environment variable
  const serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS || '{}');

  // Initialize Firebase Admin SDK if not already initialized
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.FIREBASE_URL_DB
    });
  }
} catch (error) {
  console.error('Error initializing Firebase Admin SDK:', error);
}

export { admin };
