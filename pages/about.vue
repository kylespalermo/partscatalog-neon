<script setup>
import { useRoute, useRouter } from "nuxt/app";
import { ref } from "vue";
const route = useRoute();
const router = useRouter();

const isOpen = ref(false); // or true, depending on default
</script>

<template>
  <body class="antialiased text-slate-800 bg-slate-50">
    <LayoutNavbar />
    <LayoutHero
      image_url="https://images.unsplash.com/photo-1705614681506-45a2bcdd458d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2532"
      sub_title="About Exosearch.io"
      title="Technical Search for high-performance aerospace products & R&D"
      image_attribution="Photo courtesy of Hermeus Aerospace"
    />

    <!-- MAIN CONTENT -->
    <main class="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 mt-10 md:mt-16">
      <section
        class="bg-white rounded-2xl shadow-lg p-6 md:p-10 ring-1 ring-slate-100"
      >
        <!-- Mission -->
        <div class="mb-8">
          <h2 class="text-xl md:text-2xl font-semibold text-slate-900">
            Mission
          </h2>
          <p class="mt-3 text-slate-700 leading-relaxed">
            Exosearch.io is a Technical Search Platform designed to “surface”
            high performance, high integrity Aerospace products and services,
            and R&amp;D technologies.
          </p>
        </div>

        <!-- Approach -->
        <div class="mb-8">
          <h2 class="text-xl md:text-2xl font-semibold text-slate-900">
            Approach
          </h2>

          <div class="mt-3 space-y-4 text-slate-700 leading-relaxed">
            <div>
              <strong class="block text-slate-900"
                >For Manufacturers and Services</strong
              >
              <p>
                Our data intake approach is a significant differentiator as we
                go intelligently beyond web crawlers and ecommerce models to
                unlock hidden data and display your key differentiators that
                will elevate your products and business.
              </p>
            </div>

            <div>
              <strong class="block text-slate-900"
                >For Engineers and Aerospace End Users</strong
              >
              <p>
                We understand applications and required parameters in a way that
                C-level executives at “Big Search” and high-volume, large
                e-commerce platforms can’t fully comprehend.
              </p>
            </div>
          </div>
        </div>

        <!-- About Us -->
        <div class="mb-6">
          <h2 class="text-xl md:text-2xl font-semibold text-slate-900">
            About Us
          </h2>
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
                Our Founder, <strong>Ron Palermo</strong>, is a USAF Veteran
                whose career spans 35+ years in Aerospace and High Technology.
                Our drive to innovate is underpinned by deep aerospace and high
                technology experience. As we grow, our team will continue to
                innovate based on user feedback to go beyond other platforms
                that thrive on a high-volume, low-touch business model.
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
