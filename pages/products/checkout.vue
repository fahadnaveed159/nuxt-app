<template>
  <div class="h-[700px] py-4 animate__animated animate__bounceInLeft">
    <div class="flex items-center justify-between h-full mx-auto max-w-7xl">
      <div class="w-3/5 h-full overflow-auto">
        <div class="p-5">
          <div class="py-4">
            <h1 class="py-2 text-xl font-medium">Contact</h1>
            <input
              v-model="form.email"
              type="email"
              placeholder="Email or mobile phone number"
              class="w-full p-4 py-3 mt-2 mb-3 border rounded"
            />
            <input type="checkbox" class="w-4 h-4" />
            <label for="" class="p-3 py-2">Email me with news and offers</label>
          </div>
          <div class="py-4 space-y-5">
            <h1 class="py-3 text-xl font-medium">Delivery</h1>
            <input
              v-model="form.country"
              list="country"
              name="country"
              placeholder="Counrty/Region"
              class="w-full p-3 border rounded"
            />
            <datalist id="country">
              <option value="Afghanistan" />
              <option value="Pakistan" />
              <option value="Dubai" />
              <option value="American Samoa" />
              <option value="England" />
              <option value="Bangladesh" />
              <option value="India" />

              //... //...
            </datalist>
            <div class="flex gap-4">
              <input
                v-model="form.name"
                type="text"
                placeholder="First Name"
                class="w-1/2 p-3 border rounded-lg"
              />
              <input
                v-model="form.lastname"
                type="text"
                placeholder="Last Name"
                class="w-1/2 p-3 border rounded-lg"
              />
            </div>
            <input
              v-model="form.address"
              type="text"
              placeholder="Address"
              class="w-full p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc, (optional)"
              class="w-full p-3 border rounded"
            />
            <div class="flex gap-4">
              <input
                v-model="form.city"
                type="text"
                placeholder="City"
                class="w-1/2 p-3 border rounded-lg"
              />
              <input
                v-model="form.phone"
                type="tel"
                placeholder="Phone"
                class="w-1/2 p-3 border rounded-lg"
              />
            </div>
            <input type="checkbox" class="w-4 h-4" />
            <label for="" class="p-3 py-2"
              >Save this information for next time</label
            >
            <div class="py-4">
              <h1 class="py-2 text-base font-medium">Shipping method</h1>
              <input
                type="number"
                placeholder="Standard  Rs.200.00"
                class="w-full p-4 py-3 mt-2 mb-3 border rounded"
              />
            </div>
            <div class="mb-8">
              <h2 class="mb-3 text-xl font-semibold">Payment Method</h2>
              <select
                v-model="form.paymentMethod"
                class="w-full p-3 border rounded"
              >
                <option disabled value="">Select Payment Method</option>
                <option>Cash on Delivery</option>
                <option>Credit Card</option>
                <option>EasyPaisa / JazzCash</option>
              </select>
            </div>
            <div class="flex items-center justify-center py-4">
              <button
                @click="placeOrder"
                class="bg-[#D1A980] text-white py-3 transition-all font-medium ease-out delay-150 duration-200 scale-100 w-full rounded hover:bg-black hover:text-white"
              >
                Complete Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="w-2/5 h-full p-5 overflow-auto rounded shadow-lg bg-gray-50">
        <h2 class="py-2 mb-3 text-2xl font-semibold text-center">
          Order Summary
        </h2>
        <div
          v-for="item in cartStor.cart"
          :key="item.product.id + item.selectedSize"
          class="flex items-center justify-between p-3 mb-2"
        >
          <img :src="item.product.image" class="w-16 h-16 rounded" />
          <p>{{ item.product.name }} ({{ item.selectedSize }})</p>
          <p>Quantity: {{ item.quantity }}</p>
          <p>Rs. {{ item.product.price * item.quantity }}</p>
        </div>
        <div class="flex items-center justify-between py-2 font-medium">
          <p>Total Price:</p>
          Rs .
          {{ totalPrice }}
        </div>
        <div class="flex items-center justify-between py-2 font-medium">
          <p>Shipping:</p>
          Rs .
          {{ shipping }}
        </div>
        <div
          class="flex items-center justify-between py-2 mt-4 text-2xl font-bold"
        >
          <p>Total</p>
          Rs .
          {{ grandTotal }}
        </div>
      </div>

      <!-- Shipping Information -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { cartStore } from "~/store/cartStore";
const route = useRoute();
const cartStor = cartStore();
const shipping = ref(200);

const totalPrice = computed(() =>
  cartStor.cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )
);

const grandTotal = computed(() => totalPrice.value + shipping.value);

const form = ref({
  name: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  country: "",
  paymentMethod: "",
});

function placeOrder() {
  if (!form.value.name || !form.value.address || !form.value.paymentMethod) {
    alert("Please fill all required fields");
    return;
  }

  console.log("Order Placed:", {
    ...form.value,
    cart: cartStor.cart,
    total: grandTotal.value,
  });

  alert("Order placed successfully!");
  cartStor.clearCart();
}
</script>
