<template>
  <div
    class="max-w-7xl mx-auto py-8 flex gap-8 justify-between items-center p-5 animate__animated animate__bounceInLeft"
  >
    <div class="w-80 ">
      <img :src="product.image" alt="" />
    </div>
    <div class="w-1/2 p-5">
      <h1 class="text-3xl font-bold">{{ product.name }}</h1>
      <p class="text-slate-500 mt-2 pb-2 font-medium">
        {{ product.description }}
      </p>
      <span class="text-3xl text-[#D1A980] font-bold"
        >Rs. {{ product.price }}</span
      >
<div class="flex space-x-4 mt-4">
  <h1 class="text-lg font-medium">Sizes</h1>
    <button
      v-for="size in product.sizes"
      :key="size"
      @click="selectedSize = size"
      :class="[
        'px-4 py-1 border rounded-full transition',
        selectedSize === size
          ? 'bg-black text-white border-black'
          : 'bg-white text-black border-gray-400 hover:bg-gray-100'
      ]"
    >
      {{ size }}
    </button>
  </div>

  <p v-if="selectedSize" class="mt-3 text-gray-600">Selected Size: <strong>{{ selectedSize }}</strong></p>
      <div class="mt-4 flex items-center gap-5 py-4">
        <label for="quantity" class="text-lg font-medium">Quantity:</label>
        <button
          @click="decrease"
          class="px-3 py-0 bg-gray-300 rounded font-bold hover:bg-[#D1A980] text-black"
        >
          -
        </button>

        <span class="text-lg font-medium">{{ quantity }}</span>

        <button
          @click="increase"
          class="px-3 py-0 bg-gray-300 font-bold rounded hover:bg-[#D1A980] text-black"
        >
          +
        </button>
      </div>
      <div class="flex items-center gap-5 py-4">
        <h1 class="text-lg font-medium">Ratings</h1>
        <span class="text-yellow-400 text-xl"
          >⭐⭐⭐<span class="text-gray-400">☆☆</span></span
        >
      </div>

      <div class="flex gap-4 mt-4">
      
        <button
          @click="buyNow"
          class="px-4 py-2 bg-gray-300 text-sm text-black font-bold rounded hover:bg-[#D1A980]">
          Buy Now
        </button>
        <button
          @click="addProductToCart"
          class="px-4 py-2 bg-[#D1A980] text-sm text-white font-bold rounded hover:bg-[#B18A5B]"
        >
          Add to Cart
        </button>
      </div>
    </div>
    <div class="w-1/4 p-5 bg-gray-100 rounded-lg shadow-lg hidden">
      add to cart logic here
    </div>
  </div>

 

     
  

  
</template>

<script setup>
import products from "@/assets/products.json";
import { cartStore } from "~/store/cartStore";


const route = useRoute();
const productId = route.params.id;
const product = ref(null);
const quantity = ref(1);
const router = useRouter();
const selectedSize = ref(null)
const sizes = ['S', 'M', 'L', 'XL']




function buyNow() {
router.push(`/products/checkout?redirect${productId}`);
  // Logic to handle the buy now action
  // This could involve navigating to a checkout page or processing the order directly
  // For example, you might want to redirect to a checkout page with the product details
}

product.value = products.find((p) => p.id === Number(productId));






const increase = () => {
  if (quantity.value < 10) {
    quantity.value++;
  }
};

const decrease = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addProductToCart = () => {
  if (!selectedSize.value) {
    alert('Please select a size!')
    return
  }

  cartStore().addToCart(product, selectedSize.value, quantity.value)
  console.log(selectedSize.value ,quantity.value )
  alert('Product added to cart with size & quantity!')
  router.push('/cart')
}


</script>
