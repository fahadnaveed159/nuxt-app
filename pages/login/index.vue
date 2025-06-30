<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <button @click="handleGitHubLogin" class="bg-black text-white py-2 px-4 rounded">
      Login with GitHub
    </button>
    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useGitHubLogin } from '~/composables/useAuth'
import { ref } from 'vue'

const router = useRouter()
const error = ref(null)

const handleGitHubLogin = async () => {
  try {
    error.value = null
    await useGitHubLogin()
    router.push('/shopping') // ✅ Redirect after login
  } catch (err) {
    error.value = err.message
  }
}
</script>