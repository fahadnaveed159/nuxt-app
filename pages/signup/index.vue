<template>
  
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br animate__animated animate__bounceInLeft bg-[#F1F0E9] px-4">
    <div  class="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl">
            <div class="flex justify-center mb-6">
        <div class="flex items-center justify-center text-3xl font-bold text-blue-600 bg-blue-100 rounded-full w-14 h-14">
          🛒
        </div>
      </div>

      
      <h2 class="mb-2 text-2xl font-semibold text-center text-gray-800">Welcome Back</h2>
      <p class="mb-6 text-sm text-center text-gray-500">Sign up to continue your shopping list</p>

    <form @submit.prevent="loginUser" class="space-y-4">
      <input v-model="email" type="email" placeholder="Email"  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <input v-model="password" type="password" placeholder="Password" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <div v-if="error" class="text-red-500">{{ error }}</div>
      <button           class="w-full py-3 text-white transition-all bg-green-500 rounded-xl hover:bg-green-600"
>Sign up</button>
      
      
    </form>

    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useRouter, useState } from '#app'
import { useUserStore } from '~/store/userStore'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const authUser = useState('authUser', () => null)

const loginUser = async () => {
  try {
    const auth = getAuth()
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log('User logged in:', userCredential?.user)
    useUserStore().setUser(userCredential, userCredential?.user?.accessToken) // Set the user state in Pinia store
    router.push('/')
  } catch (e) {
    error.value = e.message
  }
}
</script>
