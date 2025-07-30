<template>
    <section class=" text-black py-20 px-4 text-center animate__animated animate__bounceInLeft font-poppins">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-4xl sm:text-5xl font-bold mb-4">
      Discover Your <span class="text-[#D1A980]">Signature Style</span>
    </h1>
    <p class="text-gray-600 text-lg sm:text-xl">
      Explore our latest collection of premium shirts, tailored coat pants, and classic trousers — made for men who dress to impress.
    </p>
  </div>
</section>

<div class="max-w-7xl mx-auto py-8 px-4 animate__animated animate__bounceInLeft">
    <h1 class="text-center text-4xl font-bold">All <span class="text-[#D1A980]">Products</span></h1>
      <div class="flex flex-wrap justify-center items-center mt-8 py-8 gap-10">
      <div
        @click="() => router.push(`/products/${item.id}`)"
        v-for="item in data"
        :key="item.id"
        class="max-w-xs cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      >
        <!-- Shirt Image -->
        <img :src="item.image" alt="" class="w-72 h-72 object-cover" />

        <!-- Content -->
        <div class="p-4 text-center">
          <h2 class="text-lg font-semibold text-gray-800">
            {{ item.name }}
          </h2>
          
          <span class="text-lg font-bold text-[#D1A980]">{{ item.price }}</span>
        </div>
      </div>
    </div>
</div>



</template>

<script setup>
import products from "~/assets/products.json";

const router = useRouter();

const data = products;



</script>