<template>
    <section class="max-w-5xl px-4 py-12 mx-auto bg-white sm:px-8 animate__animated animate__bounceInLeft font-poppins">
  <h2 class="mb-6 text-5xl font-bold text-center text-gray-900">Contact <span class="
    text-[#D1A980]">Us</span></h2>
  <p class="mb-12 text-center text-gray-600">
    Have a question about your order or want to know more about our products? We'd love to hear from you!
  </p>

  <div class="grid gap-10 md:grid-cols-2">
    
    <!-- Contact Form -->
    <form class="space-y-4">
      <input v-model="name" type="text" placeholder="Your Name" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />
      <input v-model="email" type="email" placeholder="Your Email" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />
      <textarea v-model="message" rows="5" placeholder="Your Message" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
      <button @click="submitForm" type="submit" class="bg-black text-white px-6 py-2 rounded hover:bg-[#D1A980] font-medium hover:text-black transition">
        Send Message
      </button>
    </form>

    <!-- Contact Info -->
    <div class="space-y-4 text-gray-700">
      <p><strong>📞 Phone:</strong> <a href="https://wa.me/923111023951" target="_blank" class="font-medium text-gray-600 hover:underline">0311-1023951</a></p>
      <p><strong>📧 Email:</strong> <a href="mailto:fahadnaveed159@gmail.com" class="text-gray-600 hover:underline">fahadnaveed159@gmail.com</a></p>
      <p><strong>📍 Address:</strong> FK Wear, Street 123, Lahore, Pakistan</p>
      <p><strong>⏰ Hours:</strong> Mon - Sat, 10am – 8pm</p>

      <!-- Social Icons -->
     <div class="flex items-center mt-4 space-x-4 sm:mt-0">
        <a
          href="https://www.facebook.com/profile.php?id=61565171947376"
          target="_blank"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-[#D1A980] hover:text-black"
          ><Icon
            name="mdi:facebook"
            class="w-5 h-5 transition hover:text-black"
        /></a>
        <a
          href="https://www.instagram.com/fahadnaveed738/?next=%2F"
          target="_blank"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-[#D1A980] hover:text-black"
          ><Icon name="mdi:instagram" class="w-5 h-5 transition"
        /></a>
        <a
          href="https://github.com/fahadnaveed159"
          target="_blank"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-[#D1A980] hover:text-black"
          ><Icon name="mdi:github" class="w-5 h-5 transition"
        /></a>
        <a
          href="https://wa.me/3111023951"
          target="_blank"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-[#D1A980] hover:text-black"
          ><Icon name="mdi:whatsapp" class="w-5 h-5 transition"
        /></a>
      </div>
    </div>

  </div>
</section>

</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
    
const submitForm = () => {    
    if (!name.value || !email.value || !message.value) {
        alert('Please fill in all fields.');
        return;
        
    }  
  alert(
    `📝 Message Sent!\n\nName: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}\n Thank you for contact me and i hope you feel like it then enjoy`
  )
}

</script>