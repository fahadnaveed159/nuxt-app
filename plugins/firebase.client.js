import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
         apiKey: "AIzaSyAopQL-sh_8hrAmApIoEFAhlNJUsgem18o",
  authDomain: "shopping-list-app-e67da.firebaseapp.com",
  projectId: "shopping-list-app-e67da",
  storageBucket: "shopping-list-app-e67da.firebasestorage.app",
  messagingSenderId: "454827217815",
  appId: "1:454827217815:web:87811528d8595263ae6ad2",
  measurementId: "G-TVZCZ9JMT6"
}

    const app = initializeApp(firebaseConfig)

    // const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})  