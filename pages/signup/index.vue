<template>
  <div class="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
    <h2 class="text-2xl font-bold mb-4">Sign Up</h2>

    <form @submit.prevent="signupUser">
      <input v-model="email" type="email" placeholder="Email" class="w-full mb-3 border px-3 py-2 rounded" />
      <input v-model="password" type="password" placeholder="Password" class="w-full mb-3 border px-3 py-2 rounded" />
      <div v-if="error" class="text-red-500">{{ error }}</div>
      <button class="bg-green-600 text-white py-2 w-full rounded">Sign Up</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createUserWithEmailAndPassword} from 'firebase/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

// Nuxt plugin se auth ko access kar rahe hain
const { $auth } = useNuxtApp()

const signupUser = async () => {
  try {
    // Firebase ka built-in method call
await createUserWithEmailAndPassword($auth, email.value, password.value)

    // Signup success: user ko /shopping pe le jao
    router.push('/shopping')
  } catch (e) {
    // Agar koi error aaye (jaise weak password ya email in use)
    error.value = e.message
  }
}
</script>
