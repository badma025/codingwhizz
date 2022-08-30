// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics, logEvent } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBN8tEcc9JfHqaLYJym7gPhE_yOba_YYmU',
  authDomain: 'codingwhizz.firebaseapp.com',
  projectId: 'codingwhizz',
  storageBucket: 'codingwhizz.appspot.com',
  messagingSenderId: '91447336548',
  appId: '1:91447336548:web:ad916227083537caec4971',
  measurementId: 'G-8PWYN57CHH',
}

// Initialize Firebase


let analytics
let firestore
let app
if (firebaseConfig?.projectId) {
  // Initialize Firebase

  const app1 = initializeApp(firebaseConfig)

  let app = app1



  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app)
  }

  // Access Firebase services using shorthand notation
  firestore = getFirestore()
}
const auth = getAuth(app)
const db = getFirestore(app)

export { analytics, firestore }
export { auth, db }
