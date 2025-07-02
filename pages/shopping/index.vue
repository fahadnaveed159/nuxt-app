<template>
  <div class="flex justify-center items-center h-screen bg-gray-100 flex-col">
    <h1>Welcome to Shopping page</h1>
      <button @click="logout" class="text-red-600">Logout</button>
    {{ getAuth().currentUser }}
  </div>
</template>

<script setup>
import { signOut } from 'firebase/auth'
const { $auth } = useNuxtApp()
import { getAuth } from "firebase/auth"

const logout = async () => {
  await signOut($auth)
  navigateTo('/login')
}
</script>
