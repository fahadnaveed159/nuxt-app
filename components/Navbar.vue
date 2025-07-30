<template>
  <nav class="w-full h-20 bg-white">
    <div
      class="flex justify-between max-w-7xl mx-auto items-center h-full px-4  animate__animated animate__bounceInDown"
    >
      <a href="/" class="text-2xl font-bold text-[#333] animate__animated animate__wobble font-playfair">F.K Clothes</a>

      <div class="flex space-x-4 font-medium font-serif">
        <a
          href="/"
          class="text-[#555] transition-all hover:scale-105 hover:underline ease-in-out hover:tracking-wide hover:text-[#000]"
          >Home</a
        >
        <a
          href="/about"
          class="text-[#555] transition-all hover:scale-105 hover:underline hover:tracking-wide hover:text-[#000]"
          >About</a
        >
        <a
          href="/contact"
          class="text-[#555] transition-all hover:scale-105 hover:underline hover:tracking-wide hover:text-[#000]"
          >Contact</a
        >
        <a
          href="/products"
          class="text-[#555] transition-all hover:scale-105 hover:underline hover:tracking-wide hover:text-[#000]"
          >Products</a
        >
      </div>
      <div class="flex space-x-4 items-center">
        <a href="/cart"
          ><Icon
            name="material-symbols:shopping-cart-outline"
            style="color: black"
            class="w-5 h-5 transition delay- duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        /></a>
        <NuxtLink to="/login"
          ><Icon
            name="material-symbols:person-outline"
            style="color: black"
            class="w-5 h-5 transition delay- duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        /></NuxtLink>
        <a href="/search"
          ><Icon
            name="material-symbols:search-rounded"
            style="color: black"
            class="w-5 h-5 transition delay- duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        /></a>
        <div class="text-base">
          <button
            v-if="user.isAuthenticated"
            @click="logout"
            class="text-black py-2 px-4 rounded-xl font-medium hover:bg-black hover:text-white transition-colors"
          >
            Logout
          </button>
          <NuxtLink
            v-else
            to="/login"
            class="text-black py-2 px-4 rounded-xl font-medium hover:bg-black hover:text-white transition-colors"
            >Sign In</NuxtLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useUserStore } from "~/store/userStore";

const user = useUserStore();

const logout = async () => {
  useUserStore().logout();
  navigateTo("/login");
};
</script>
