<template>

  <div class="min-h-screen flex items-center justify-center bg-[#F1F0E9] px-4 animate__animated animate__bounceInLeft">
    <div  class="bg-[#F8F8F8] w-full max-w-md p-8 rounded-2xl shadow-xl">
            <div class="flex justify-center mb-6">
        <div class="bg-[#F1F0E9] text-blue-600 w-14 h-14 flex items-center justify-center rounded-full text-3xl font-bold">
           👋
        </div>
      </div>

      
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-2">Welcome to F.K <br> Clothes</h2>
      <p class="text-center text-gray-500 text-sm mb-6">Login to continue your shopping </p>

    <form @submit.prevent="loginUser" class="space-y-4">
      <input v-model="email" type="email" placeholder="Email"  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <input v-model="password" type="password" placeholder="Password" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <div v-if="error" class="text-red-500">{{ error }}</div>
      <button           class="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-all"
>Login</button>
    
      
    </form>
    <div class="mt-6 text-center text-sm text-gray-500">
        Don't have an account?
        <NuxtLink to="/signup" class="text-blue-600 hover:underline">Sign up</NuxtLink>
      </div>
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
    useUserStore().setUser(userCredential.user, userCredential?.user?.accessToken) // Set the user state in Pinia store
    router.push('/')
  } catch (e) {
    error.value = e.message
  }
}
</script>
