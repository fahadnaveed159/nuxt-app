import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from '~/store/userStore'

// Nuxt middleware
export default defineNuxtRouteMiddleware((to, from) => {
  const store = useUserStore()

  // ✅ Pages allowed without login
  const restrictedRoutes = ['/shopping', '/cart', '/checkout', '/']

  // 🔒 If user not logged in and trying to access private page
  if (restrictedRoutes.includes(to.path) && !store.isAuthenticated) {
    return navigateTo('/login')
  }

  // 🔑 If user logged in and trying to access login/signup page
  if (store.isAuthenticated && (to.path === '/login' || to.path === '/signup')) {
    return navigateTo('/')
  }
})
