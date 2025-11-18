<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "nuxt/app";

const props = defineProps({
    isTransparent: Boolean
})

const isOpen = ref(false); // or true, depending on default
const route = useRoute();
const router = useRouter();
</script>

<template>
  <section class="w-full inner-nav w-full max-w-7xl main-c">
    <nav class="top-nav text-white" :style="{ 'background-color': isTransparent ? '' : '#ff4f00' }">
      <div class="mx-auto">
        <div class="flex items-center justify-between">
          <!-- Brand -->
          <div class="flex-shrink-0">
            <span @click="$router.push('/')" class="cursor-pointer logo">
              exo<span class="font-bold">search</span>
            </span>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex">
            <a href="#" class="">All products</a>
            <a href="#" class="">About</a>
            <a href="#" class="">Vendor sign-in</a>
          </div>

          <!-- Mobile Toggle Button -->
          <div class="md:hidden">
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
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden px-4 pb-3 space-y-2">
        <a href="#" class="block py-2 hover:text-yellow-400">All products</a>
        <a href="#" class="block py-2 hover:text-yellow-400">About</a>
        <a href="#" class="block py-2 hover:text-yellow-400">Vendor sign-in</a>
      </div>
    </nav>
  </section>
</template>
<style>
</style>
