<template>
  <div class="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
    <h2 class="text-2xl font-bold mb-4">Login</h2>

    <form @submit.prevent="loginUser">
      <input v-model="email" type="email" placeholder="Email" class="w-full mb-3 border px-3 py-2 rounded" />
      <input v-model="password" type="password" placeholder="Password" class="w-full mb-3 border px-3 py-2 rounded" />
      <div v-if="error" class="text-red-500">{{ error }}</div>
      <button class="bg-blue-600 text-white py-2 w-full rounded">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useRouter, useState } from '#app'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const authUser = useState('authUser', () => null)

const loginUser = async () => {
  try {
    const auth = getAuth()
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    authUser.value = userCredential.user // Set the user state
    router.push('/shopping')
  } catch (e) {
    error.value = e.message
  }
}
</script>
