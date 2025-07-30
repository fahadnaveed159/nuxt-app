<template>
  <footer class="bg-black text-white py-10 px-6 font-poppins">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
    >
      <!-- Logo & About -->
      <div>
        <h2 class="text-xl font-bold  tracking-wide font-playfair text-[#D1A980] mb-2">
          FK Clothes
        </h2>
        <p>Address: 60-49 Road 11378 Karachi, Pakistan</p>
        <p class="mt-2">
          Email:
          <a href="" class="hover:text-[#D1A980] transition"
            >fahadnaveed159@gmail.com</a
          >
        </p>
        <p class="py-2">
          Phone:
          <a
            href="https://wa.me/3111023951"
            target="_blank"
            class="hover:text-[#D1A980] transition"
            >📞 +92 3111023951</a
          >
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-[#D1A980] font-semibold mb-3 font-playfair">Quick Links</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="/" class="hover:text-[#D1A980] transition">Home</a></li>
          <li>
            <a href="/products" class="hover:text-[#D1A980] transition"
              >Products</a
            >
          </li>
          <li>
            <a href="/about" class="hover:text-[#D1A980] transition"
              >About Us</a
            >
          </li>
          <li>
            <a href="/contact" class="hover:text-[#D1A980] transition"
              >Contact</a
            >
          </li>
        </ul>
      </div>

      <!-- Categories -->
      <div>
        <h3 class="text-[#D1A980] font-semibold mb-3 font-playfair">Categories</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li>
            <a href="#" class="hover:text-[#D1A980] transition"
              >Men's Clothing</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-[#D1A980] transition"
              >Women's Clothing</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-[#D1A980] transition">Formal Wear</a>
          </li>
          <li>
            <a href="#" class="hover:text-[#D1A980] transition">Casual Wear</a>
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="text-[#D1A980] font-semibold mb-3 font-playfair">Stay Updated</h3>
        <p class="text-gray-400 text-sm mb-2">
          Subscribe for latest offers & updates.
        </p>
        <form class="flex items-center py-6">
          <input
            type="email"
            placeholder="Your email"
            class="w-full px-3 py-2 rounded-l bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <button @click="subscribe"
            class="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-r"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div
      class="mt-10 max-w-7xl mx-auto border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400"
    >
      <p>&copy; 2025 FK Clothes. All rights reserved.</p>
      <div class="flex space-x-4 mt-4 sm:mt-0 items-center">
        <a
          href="https://www.facebook.com/profile.php?id=61565171947376"
          target="_blank"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-[#D1A980] hover:text-black"
          ><Icon
            name="mdi:facebook"
            class="w-6 h-6 transition hover:text-black"
        /></a>
        <a
          href="https://www.instagram.com/fahadnaveed738/?next=%2F"
          target="_blank"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-[#D1A980] hover:text-black"
          ><Icon name="mdi:instagram" class="w-6 h-6 transition"
        /></a>
        <a
          href="https://github.com/fahadnaveed159"
          target="_blank"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-[#D1A980] hover:text-black"
          ><Icon name="mdi:github" class="w-6 h-6 transition"
        /></a>
        <a
          href="https://wa.me/3111023951"
          target="_blank"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-[#D1A980] hover:text-black"
          ><Icon name="mdi:whatsapp" class="w-6 h-6 transition"
        /></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
   
   function subscribe(params) {
    // Handle subscription logic here
    alert('Thank you for subscribing!');
    
   }


</script>
