<script setup>
    import { useRoute, useRouter } from 'nuxt/app';
    import { ref } from 'vue';
    const route = useRoute();
    const router = useRouter();

    const isOpen = ref(false) // or true, depending on default
</script>


<template>
<body class="antialiased text-slate-800 bg-slate-50">
    <section class="w-full inner-nav">
<nav class="top-nav text-white">
      <div class="mx-auto">
        <div class="flex items-center justify-between">
          <!-- Brand -->
          <div class="flex-shrink-0">
            <span 
              @click="$router.push('/')" 
              class="cursor-pointer logo"
            >
              exo<span class="font-bold">search</span>
            </span>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex ">
            <a href="#" class="">All products</a>
            <a href="/about" class="">About</a>
            <a href="#" class="">Vendor sign-in</a>
          </div>

          <!-- Mobile Toggle Button -->
          <div class="md:hidden">
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden px-4 pb-3 space-y-2">
        <a href="#" class="block py-2 hover:text-yellow-400">All products</a>
        <a href="/about" class="block py-2 hover:text-yellow-400">About</a>
        <a href="#" class="block py-2 hover:text-yellow-400">Vendor sign-in</a>
      </div>
    </nav>
    </section>
  <header class="relative">
    <div class="relative w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1705614681506-45a2bcdd458d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2532"
        width="2532"
        height="1424"
        alt="Aerospace technical search hero image"
        class="w-full h-[48vh] md:h-[56vh] lg:h-[70vh] object-cover"
      />

      <!-- overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>


      <!-- hero text -->
      <div class="absolute inset-0 flex items-end md:items-center justify-start p-6 md:p-12">
        <div class="max-w-3xl text-white">
          <p class="text-sm uppercase tracking-widest text-white/80 mb-2">About Exosearch.io</p>
          <h1 class="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Technical Search for high-performance aerospace products & R&D
          </h1>
        </div>
      </div>
    </div>
    <div class="flex justify-end !bg-slate-50">
      <p class="mr-5 text-xs">Photo courtesy of Hermeus Aerospace</p>
    </div>
  </header>

  <!-- MAIN CONTENT -->
  <main class="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 mt-10 md:mt-16">
    <section class="bg-white rounded-2xl shadow-lg p-6 md:p-10 ring-1 ring-slate-100">
      <!-- Mission -->
      <div class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold text-slate-900">Mission</h2>
        <p class="mt-3 text-slate-700 leading-relaxed">
          Exosearch.io is a Technical Search Platform designed to “surface” high performance,
          high integrity Aerospace products and services, and R&amp;D technologies.
        </p>
      </div>

      <!-- Approach -->
      <div class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold text-slate-900">Approach</h2>

        <div class="mt-3 space-y-4 text-slate-700 leading-relaxed">
          <div>
            <strong class="block text-slate-900">For Manufacturers and Services</strong>
            <p>
              Our data intake approach is a significant differentiator as we go intelligently
              beyond web crawlers and ecommerce models to unlock hidden data and display your
              key differentiators that will elevate your products and business.
            </p>
          </div>

          <div>
            <strong class="block text-slate-900">For Engineers and Aerospace End Users</strong>
            <p>
              We understand applications and required parameters in a way that C-level executives
              at “Big Search” and high-volume, large e-commerce platforms can’t fully comprehend.
            </p>
          </div>
        </div>
      </div>

      <!-- About Us -->
      <div class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold text-slate-900">About Us</h2>
        <div class="mt-4 md:flex md:items-start md:gap-6">
          <!-- founder image placeholder
          <div class="flex-shrink-0 mb-4 md:mb-0">
            <img
              src="https://via.placeholder.com/240x240.png?text=Ron+Palermo"
              alt="Ron Palermo — Founder"
              width="240"
              height="240"
              class="w-40 h-40 rounded-full object-cover ring-2 ring-slate-100 shadow-sm"
            />
          </div> -->

          <div class="text-slate-700 leading-relaxed">
            <p>
              Our Founder, <strong>Ron Palermo</strong>, is a USAF Veteran whose career spans
              35+ years in Aerospace and High Technology. Our drive to innovate is underpinned
              by deep aerospace and high technology experience. As we grow, our team will continue to innovate based on user feedback to go beyond
              other platforms that thrive on a high-volume, low-touch business model.
            </p>
          </div>
        </div>
      </div>

    </section>
  </main>

  <footer class="mt-12 mb-12 text-center text-sm text-slate-500">
    © <span id="year">2025</span> Exosearch.io — All rights reserved.
  </footer>

</body>

</template>