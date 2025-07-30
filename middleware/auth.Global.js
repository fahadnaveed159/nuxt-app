import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from '~/store/userStore'

// Nuxt middleware
export default defineNuxtRouteMiddleware((to, from) => {
  
  const store = useUserStore()

  // ✅ Pages allowed without login
  const restrictedRoutes = [ '/cart', '/products/checkout' ]

  // 🔒 If user not logged in and trying to access private page
  //if user is logged in than return to the page they were trying to access
  if (restrictedRoutes.includes(to.path) && !store.isAuthenticated) {
    return navigateTo('/login')
  }

  // 🔑 If user logged in and trying to access login/signup page
  if (store.isAuthenticated && (to.path === '/login' || to.path === '/signup')) {
    return navigateTo('/')
  }
})
