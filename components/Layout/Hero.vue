<script setup>
const props = defineProps({
  image_url: String,
  sub_title: String,
  title: String,
  image_attribution: String,
});
</script>
<template>
  <header class="relative">
    <div class="relative w-full overflow-hidden">
      <img
        :src="image_url"
        width="2532"
        height="1424"
        class="w-full h-[48vh] md:h-[56vh] lg:h-[70vh] object-cover"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
      ></div>

      <div
        class="absolute inset-0 flex items-end md:items-center justify-start p-6 md:p-12"
      >
        <div class="max-w-3xl text-white">
          <p class="text-sm uppercase tracking-widest text-white/80 mb-2">
            {{ sub_title }}
          </p>
          <h1
            class="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg"
          >
            {{ title }}
          </h1>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <p class="mr-5 text-xs">{{ image_attribution }}</p>
    </div>
  </header>
</template>
