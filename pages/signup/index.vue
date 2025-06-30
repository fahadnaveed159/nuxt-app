<template>
  <div class="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
    <h2 class="text-2xl font-bold mb-4 text-center">Sign Up</h2>
    <form @submit.prevent="signup">
      <input v-model="email" placeholder="Email" class="mb-2 w-full border px-3 py-2 rounded" />
      <input v-model="password" placeholder="Password" type="password" class="mb-2 w-full border px-3 py-2 rounded" />
      <div v-if="error" class="text-red-500 mb-2">{{ error }}</div>
      <button class="w-full bg-green-600 text-white py-2 rounded">Sign Up</button>
    </form>
    <p class="text-sm mt-3 text-center">
      Already have an account? <NuxtLink to="/login" class="text-blue-500">Login</NuxtLink>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const { $auth } = useNuxtApp()
const router = useRouter()

const signup = async () => {
  try {
    await createUserWithEmailAndPassword($auth, email.value, password.value)
    router.push('/shopping')
  } catch (err) {
    error.value = err.message
  }
}
</script>
