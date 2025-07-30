<template>
  <div class="h-[620px] py-4 animate__animated animate__bounceInLeft">
    <h1 class="text-3xl text-center font-bold mb-4 p-5">
      Shopping <span class="text-[#D1A980]">Cart</span>
    </h1>

    <div
      class="max-w-7xl flex h-full bg-[#F1F0E9] justify-between items-center mx-auto"
    >
      <div
        class="w-3/5 h-full overflow-auto bg-white shadow-md border rounded-lg"
      >
        <div class="flex items-center justify-between p-5">
          <h1 class="text-2xl font-medium p-5">Products</h1>

          <h1 class="text-lg font-medium">Name</h1>
          <h1 class="text-lg font-medium">Size</h1>
          <h1 class="text-lg font-medium">Quantity</h1>
          <h1 class="text-lg font-medium">Price</h1>
        </div>

        <div class="flex flex-col">
          <div
            v-for="item in cartStor.cart"
            :key="item.product.id + item.selectedSize"
            class="flex justify-between items-center p-5 border"
          >
            <img :src="item.product.image" alt="" class="w-20 h-20 rounded" />
            <h1 class="text-base font-medium">{{ item.product.name }}</h1>
            <h1 class="text-sm font-medium">{{ item.selectedSize }}</h1>
            <h1 class="text-sm font-medium">{{ item.quantity }}</h1>
            <h1 class="text-sm font-bold text-[#D1A980]">
              Rs. {{ item.product.price * item.quantity }}
            </h1>
          </div>
        </div>
        <div class="p-4">
          <button
            class="text-black mt-8 py-2 px-6 rounded bg-[#D1A980] text-sm font-medium hover:bg-black hover:text-white transition-colors"
            @click="cartStor.clearCart()"
          >
            Clear All
          </button>
        </div>
      </div>

      <div class="w-2/5 h-full overflow-auto p-5 rounded-lg shadow-md">
        <h1 class="text-2xl font-medium p-5">Summary</h1>
        <div
          v-for="item in cartStor.cart"
          :key="item.product.id + item.selectedSize"
          class="flex items-center p-4 justify-between space-y-4"
        >
          <h1>{{ item.product.name }} - ({{ item.selectedSize }})</h1>
          <h1>Items {{ item.quantity }}</h1>
          <h1 class="font-bold text-[#D1A980]">  Rs . {{ item.product.price * item.quantity }}</h1>
        </div>
        <h1 class="p-3 font-medium text-lg">SHIPPING</h1>

        <div class="py-2 p-4">
          <input
            type="number"
            placeholder="Standard-Delivery-200Rs"
            class="py-2 w-full text-center px-12 border-2 rounded-md font-medium text-black"
          />
        </div>

        <div
          class="flex justify-between text-base font-medium space-y-4 py-4 flex-col"
        >
          <div class="flex justify-between">
            <p>Total Price:</p>
            {{ totalPrice }}
          </div>
          <div class="flex justify-between">
            <p>Total Quantity:</p>
            {{ totalQuantity }}
          </div>
          <div class="flex justify-between">
            <p>Grand Total (with Shipping):</p>
            {{ grandTotal }}
          </div>
        </div>
        <div class="flex justify-center items-center  py-4">
          <button @click="() => router.push(`/products/checkout`)"  class="text-black mt-8 py-3  w-full rounded bg-[#D1A980] text-sm font-medium hover:bg-black hover:text-white transition-colors">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { cartStore } from "~/store/cartStore";

const router = useRouter()
const cartStor = cartStore();
const shipping = ref(200);


const totalQuantity = computed(() => {
  return cartStor.cart.reduce((sum, item) => sum + item.quantity, 0);
});

const totalPrice = computed(() => {
  return cartStor.cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
});

const grandTotal = computed(() => {
  return totalPrice.value + shipping.value;
});
</script>
