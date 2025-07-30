import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  // Firebase ka configuration object (console.firebase.google.com se milega)
  const firebaseConfig = {
       apiKey: "AIzaSyAopQL-sh_8hrAmApIoEFAhlNJUsgem18o",
  authDomain: "shopping-list-app-e67da.firebaseapp.com",
  projectId: "shopping-list-app-e67da",
  storageBucket: "shopping-list-app-e67da.firebasestorage.app",
  messagingSenderId: "454827217815",
  appId: "1:454827217815:web:87811528d8595263ae6ad2",
  measurementId: "G-TVZCZ9JMT6"
  }

  

  // Firebase app initialize kar rahe hain
  const app = initializeApp(firebaseConfig)

  // Firebase Authentication service le rahe hain
  const auth = getAuth(app)
  
  // Initialize Firestore
   const db = getFirestore(app);

  // Nuxt app me provide kar rahe hain taake har jaga use ho sake
  return {
    provide: {
      firestore: () => db,
      auth: () => auth
    }
  }
})
