<template>
  <div class="flex justify-center items-center h-screen bg-gray-100 flex-col">
    <h1>Welcome to Shopping page</h1>
      <button @click="logout" class="text-red-600">Logout</button>
      {{ useUserStore().user ? `Logged in as: ${JSON.stringify(useUserStore().token)}` : 'Not logged in' }}
  </div>
</template>

<script setup>
import { useUserStore } from '~/store/userStore';

const logout = async () => {
  useUserStore().logout();
  navigateTo('/login')
}
</script>
