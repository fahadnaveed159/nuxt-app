<template>
  <div class="flex items-center justify-center bg-[#F1F0E9] font-poppins">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4">
      <div class="w-1/2 animate__animated animate__bounceInLeft">
        <h2 class="font-medium text-xl ">
          <span class="text-[#D1A980]">Clothing</span> Collection
        </h2>
        <h1 class="text-5xl py-2 font-black ">
          Luxury You <span class="text-[#D1A980]">Can Wear</span>
        </h1>
        <p class="mt-2 text-slate-500 font-medium">
          Each piece in our collection is designed with precision, passion, and
          purpose. Crafted with premium fabrics to offer the elegance you
          deserve, every day.
        </p>
        <button
          class="text-black mt-8 py-3 px-12 rounded-full  duration-300 ease-in-out  bg-[#D1A980] font-medium hover:bg-black hover:text-white transition-colors"
        >
          Shop Now
        </button>
      </div>
      <div class="flex-1 w-1/2">
        <img
          src="/public/—Pngtree—portrait of business man thinking_14256827 (1).png"
          alt=""
          class="max-w-md ml-24"
        />
      </div>
    </div>
  </div>
  <div class="max-w-7xl mx-auto py-4 font-poppins">
    <h1 class="text-5xl font-bold text-center mt-12 ">
      Our <span class="text-[#D1A980]">products</span>
    </h1>
    <div class="flex flex-wrap justify-center items-center mt-8 py-8 gap-10">
      <div
        @click="() => router.push(`/products/${item.id}`)"
        v-for="item in data"
        :key="item.id"
        class="max-w-xs cursor-pointer  bg-white rounded-xl shadow-lg animation: rotate-center 0.6s ease-in-out  both;
	        animation: rotate-center 0.6s  both; overflow-hidden hover:shadow-2xl  transition-shadow duration-300"
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
    <button class=" flex mx-auto text-lg text-black mt-4 py-2 px-6 rounded-full duration-300 ease-out bg-[#D1A980] font-medium hover:bg-black hover:text-white transition-colors" @click="() => router.push('/products')">View all products </button>
  </div>
  <div
    class="max-w-7xl mx-auto flex flex-wrap items-center justify-center px-4 py-8 font-"
  >
    <div class="w-full bg-[#F1F0E9] text-center p-8 rounded-lg shadow-lg">
      <h1 class="text-4xl py-4 font-bold">
        Gentle Formal <span class="text-[#D1A980]">Looks</span>
      </h1>
      <p class="font-medium text-slate-600">
        Elevate your style with our collection of gentle formal looks, perfect
        for any occasion.
      </p>
    </div>
    <div class="flex gap-8 justify-between items-center mt-8 ">
      <div class="w-1/2 p-5">
        <h2 class="text-lg font-medium text-[#D1A980]">
          Exclusive collection 2021
        </h2>
        <h1 class="text-5xl font-bold py-2">
          Discover the <span class="text-[#D1A980]">Elegance</span>
        </h1>
        <p class="mt-2 text-slate-500 font-medium">
          Explore our exclusive collection of formal wear, designed to make you
          stand out with elegance and sophistication.
        </p>
        <a href="https://suitsupply.com/en-nl/" target="_blank">
        <button
          class="text-black mt-4 py-2 px-6 rounded-full duration-300 ease-in-out bg-[#D1A980] font-medium hover:bg-black hover:text-white transition-colors"
        >
          Explore Now
        </button>
        </a>
      </div>
      <div class="w-1/2 h- p-5 mt-8">
        <img src="/public/pexels-ahcapture-30916980.jpg" alt="" />
      </div>
    </div>
  </div>
  <div class="max-w-7xl mx-auto py-8 font-poppins">
    <h1 class="text-4xl text-center font-bold">
      Checkout New <span class="text-[#D1A980]">Arrivals</span>
    </h1>
    <p class="text-center text-slate-500 mt-2 font-medium">
      Explore our latest arrivals and elevate your wardrobe with the newest
      trends.
    </p>
    <div>
      <h2 class="text-2xl font-semibold text-center mt-4">New Arrivals</h2>
      <div class="flex flex-wrap justify-center items-center mt-4">
        <div
          @click="() => router.push(`/products/${item.id}`)"
          v-for="item in card"
          :key="item.id"
          class="max-w-xs cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 m-4"
        >
          <img :src="item.image" alt="" class="w-72 h-72 object-cover" />
          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold text-gray-800">{{ item.name }}</h3>
            <span class="text-lg font-bold text-[#D1A980]">{{
              item.price
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-between items-center px-16 bg-[#F1F0E9] py-8">
    <div class="w-1/2 p-8">
      <div class="py-8">
        <h1 class="text-4xl font-bold">
          Explore the <span class="text-[#D1A980]">Latest Trends</span>
        </h1>
        <p class="text-slate-500 mt-2 font-medium">
          Stay ahead in fashion with our latest trends and styles.Far far away,
          behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts. Separated they live in
          Bookmarksgrove right at the coast of the Semantics, a large language
          ocean.
        </p>
      </div>
      <div class="flex gap-4 mt-4">
        <NuxtLink to="/products">
          <Icon
            name="material-symbols:shopping-cart-outline"
            style="color: black"
            class="w-6 h-6 transition delay- duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </NuxtLink>
        <NuxtLink to="/login">
          <Icon
            name="material-symbols:person-outline"
            style="color: black"
            class="w-6 h-6 transition delay- duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        /></NuxtLink>
        <a href="">
          <Icon
            name="material-symbols:search-rounded"
            style="color: black"
            class="w-6 h-6 transition delay- duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        /></a>
      </div>
      <button
        class="text-black mt-4 py-2 px-6 duration-300 ease-in-out rounded-full bg-[#D1A980] font-medium hover:bg-black hover:text-white transition-colors"
      >
        Discover Now
      </button>
    </div>
    <div class="w-96 h-96">
      <img
        src="/public/—Pngtree—bearded man in sweater with_14063766 (1).png"
        alt=""
      />
    </div>
  </div>

  <div class="max-w-7xl mx-auto py-8">
    <h1 class="text-center text-4xl py-4 mt-4 font-bold">
      Customers <span class="text-[#D1A980]">Feedback ❤️ </span>
    </h1>
    <div  class="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-14">
      <div v-for="item in cutomers" class="bg-white p-4 shadow rounded">
        <div class="flex flex-col items-center justify-center py-2">
          <img
            :src="item.img"
            alt=""
            class="w-20 h-20 rounded-full object-contain mb-2"
          />
          <p class="font-semibold text-base">{{ item.name }}</p>
          <p class="text-sm text-gray-500">{{ item.loc }}</p>
        </div>
        <p class="text-gray-700 italic">
          {{ item.review }}
        </p>
        <div class="flex items-center justify-between mt-4">
          <span class="text-yellow-400 text-base">{{ item.rating }}</span>

          <p class="text-xs text-green-600 mt-2">{{ item.verify }}</p>
        </div>
      </div>

     
    </div>
  </div>
</template>

<script setup>
import 'animate.css';



const router = useRouter();
const cutomers = ref([
  {
   img: "https://images.pexels.com/photos/5478435/pexels-photo-5478435.jpeg?_gl=1*1u21ujw*_ga*NDkyMjQ5NTkxLjE3NTE1NTA0MzM.*_ga_8JE65Q40S6*czE3NTIxNDA2NTkkbzExJGcxJHQxNzUyMTQwNzk4JGoxMCRsMCRoMA..",
   name: "Ayesha Khan",
   loc: "Lahore — June 2025",
   review: " “I received my order right on time and the product quality was absolutely impressive! The fabric feels premium and fits perfectly — definitely ordering again!”",
   rating: "⭐⭐⭐⭐☆",
   verify: "✔ Verified Buyer" 
  },
  {
     img: "https://images.pexels.com/photos/14384303/pexels-photo-14384303.jpeg?_gl=1*1pi86ro*_ga*NDkyMjQ5NTkxLjE3NTE1NTA0MzM.*_ga_8JE65Q40S6*czE3NTIxNDA2NTkkbzExJGcxJHQxNzUyMTQyMDQ5JGo0NiRsMCRoMA..",
     name: "Bilal Khan",
     loc: "Karachi — July 2025",
     review: " “Absolutely loved the quality! The stitching was clean, fabric felt premium, and the delivery was quicker than expected. This was my first order — and definitely not the last!”",
     rating: "⭐⭐⭐⭐☆",
     verify: "✔ Verified Buyer" 
  },
  {
     img: "https://images.pexels.com/photos/2747616/pexels-photo-2747616.jpeg",
     name: "Sara Ahemad",
     loc: "Islamabad — November 2025",
     review: " “From stitching to packaging, everything felt luxurious. I wore the Rosewood Maxi to a dinner party and got so many compliments quality was absolutely impressive !”",
     rating: "⭐⭐⭐⭐☆",
     verify: "✔ Verified Buyer" 
  }
])
const card = ref([
  {
    id: 1483,
    name: "Silver Executive Edge Suit",
    price: "8699 PKR",
    image: "122ac39a-47e2-4c4f-bcd4-c490f8394251.jfif",
  },
  {
    id: 1484,
    name: "Elegant Black Tuxedo",
    price: "3999 PKR",
    image: "dfe90b93-5368-40bf-a7a2-d688a0552aba.jfif",
  },
  {
    id: 1485,
    name: "Classic White Shirt",
    price: "2999 PKR",
    image: "c3088f65-7617-46d0-9b46-c3ee72e36150.jfif",
  },
  {
    id: 1486,
    name: "Brown Elegant Blazer",
    price: "8700 PKR",
    image: "Explore the latest trends in mens winter fashion….jfif",
  },
]);

const data = ref([
  {
    id: 1475,
    name: "Grey Flannel Check Shirt",
    price: "800 PKR",
    image: "be14662f-aa9c-4376-a59b-b3cddcc6f40b.jfif",
  },
  {
    id: 1476,
    name: "Midnight Blue Denim",
    price: "850 PKR",
    image: "tyyyyyy.jfif",
  },

  {
    id: 1477,
    name: "Dark Grid Casual Shirt",
    price: "1200 PKR",
    image: "dark shirt.png.jfif",
  },
  {
    id: 1478,
    name: "Urban Fit Black Trousers",
    price: "900 PKR",
    image: "28b2952b-7143-4e26-9eca-6a6dc864a7fc.jfif",
  },
  {
    id: 1479,
    name: "Rosewood Maxi",
    price: "1500 PKR",
    image: "972c9af2-0446-4a63-9295-5355d9ac9c15.jfif",
  },

  {
    id: 1480,
    name: "Noir Elegance Dress9",
    price: "950 PKR",
    image: "Johanna™ - Die Elegante knitterfreie Hose für….jfif",
  },
  {
    id: 1481,
    name: "Skin Checkered Shirt",
    price: "1350 PKR",
    image: "Discover Your New Wardrobe Essential Elevate your….jfif",
  },
  {
    id: 1482,
    name: "Green Casual Shirt",
    price: "999 PKR",
    image: "6410853f-fb61-4c96-b60d-9b72baa785ec.jfif",
  },
]);
</script>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
