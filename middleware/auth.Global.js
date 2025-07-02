import { getAuth, onAuthStateChanged } from 'firebase/auth'

// Nuxt middleware
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = getAuth()
  const user = auth.currentUser

  // ✅ Pages allowed without login
  const publicPages = ['/login', '/signup']

  // 🔒 If user not logged in and trying to access private page
  if (!publicPages.includes(to.path) && !user) {
    return navigateTo('/login')
  }
})
