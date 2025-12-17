<script setup>
const props = defineProps({
    featuredCategories: Array
})
</script>
<template>

<footer class="text-gray-300 px-8 py-16" style="background-color: #222222; border-radius: 24px 24px 0px 0px ;">
      <div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        <div class="font-semibold">
          <span style="font-weight: 300">exo</span><span>search</span>
        </div>
        <div>
          <p class="font-semibold mb-6">Product categories</p>
          <ul class="space-y-1">
            <li v-for="c in featuredCategories" :key="c"><a :href="c.link">{{ c.displayName }}</a></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold mb-6">Services</p>
          <ul class="space-y-1">
            <li>Digital Datasheets</li>
            <li>Technology Partnering</li>
          </ul>
        </div>
        <div>
          <p class="font-semibold mb-6">Company</p>
          <ul class="space-y-1">
            <li><a href="/about">About</a></li>
            <li>Contact</li>
            <li>News and Events</li>
          </ul>
        </div>
      </div>
    </footer>
</template>