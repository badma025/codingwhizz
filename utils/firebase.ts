// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
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
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)



export { auth, db }
