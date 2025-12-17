<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "nuxt/app";

const isOpen = ref(false); // or true, depending on default
const route = useRoute();
const router = useRouter();
</script>
<template>
  <header>
    <!-- desktop nav -->
    <div
      class="hidden sm:flex items-center justify-between px-8 py-6 max-w-7xl mx-auto"
    >
      <div class="flex items-center gap-2">
        <span class="text-red-500 font-semibold"
          ><span style="font-weight: 300">exo</span><span>search</span></span
        >
        <span
          class="text-xs px-2 py-0.5 rounded-full border border-gray-300 text-gray-600"
          >beta</span
        >
      </div>
      <nav class="flex items-center gap-6 text-sm">
        <a href="/about" class="hover:text-black">About</a>
        <a href="#" class="hover:text-black">Get listed</a>
        <button class="bg-black text-white px-4 py-2 rounded-full">
          Explore components
        </button>
      </nav>
    </div>
    <!-- mobile nav -->
    <div class="sm:hidden">
      <div class="flex items-center justify-between px-8 py-3">
        <div class="flex items-center gap-2">
          <span class="text-red-500 font-semibold"
            ><span style="font-weight: 300">exo</span><span>search</span></span
          >
          <span
            class="text-xs px-2 py-0.5 rounded-full border border-gray-300 text-gray-600"
            >beta</span
          >
        </div>
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div v-if="isOpen" class="pl-12 pb-3 space-y-2">
        <a href="#" class="block py-2 hover:text-yellow-400">All products</a>
        <a href="/about" class="block py-2 hover:text-yellow-400">About</a>
        <a href="#" class="block py-2 hover:text-yellow-400">Vendor sign-in</a>
      </div>
    </div>
  </header>
</template>
