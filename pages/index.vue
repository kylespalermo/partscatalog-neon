<script setup>
// Font: Title Hero (configured in tailwind.config.js as `font-hero`)
const applications = [
  {displayName:"Accelerometers", link: "/products?type=Accelerometers"},
  {displayName:"AHRS", link: "/products?type=AHRS"},
  {displayName:"Global Positioning Systems", link: "/products?type=gps"},
  {displayName:"Gyroscopes", link: "/products?type=Gyroscopes"},
  {displayName:"IMUs", link: "/products?type=IMUs"},
];

const cards = [
  {
    title: "Search by Major Application",
    subtitle: "Aerospace - Aviation-Defense-Space",
    image: "/drone.jpg",
  },
  {
    title: "Destination Mars",
    subtitle:
      "Identifying components, systems, and services that are Mars proven or Mars ready",
    image: "/mars-touchdown.webp",
  },
  {
    title: "Emerging Technologies",
    subtitle:
      "Aerospace relevant SBIR and STTR work will be searchable at Exosearch",
    image: "/Starships-Second-Integrated-Test-Flight-IFT-2.webp",
  },
];
</script>
<template>
  <div class="bg-white text-gray-900 font-hero">
    <LayoutNavbar />  
    <!-- HERO -->
    <section class="px-6">
      <div class="relative max-w-7xl mx-auto rounded-3xl overflow-hidden">
        <img
          src="/satellite.jpg"
          alt="Hero background"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/40"></div>

        <div
          class="relative z-10 flex flex-col items-center text-center text-white px-6 py-32"
        >
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl"
          >
            The technical search platform<br />for aerospace
          </h1>
          <p class="mt-4 text-sm text-gray-200">
            Designed by Engineers for Engineers
          </p>

          <!-- SEARCH -->
          <div class="mt-10 w-full max-w-xl">
            <div class="flex items-center bg-white rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Search hundreds of components"
                class="flex-1 text-sm text-gray-800 outline-none"
              />
              <button
                class="ml-2 w-8 h-8 rounded-full bg-black flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <p class="mt-6 text-xs text-gray-300">Or browse by application</p>
          <div class="mt-3 flex flex-wrap justify-center gap-4 text-sm">
            <a
              v-for="item in applications"
              :key="item"
              :href="item.link"
              class="text-red-400 hover:underline"
            >
              {{ item.displayName }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- DATA SECTION -->
    <section class="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12">
      <div>
        <p class="text-xs text-red-500 mb-2">We've got the data.</p>
        <h2 class="text-2xl font-semibold leading-snug">
          ExoSearch surfaces high-performance systems, vetted for mission
          critical applications.
        </h2>
      </div>
      <div class="text-sm text-gray-600 leading-relaxed space-y-4">
        <p>
          The backend of this site is built on data collected from hundreds of
          hours of meetings with Aerospace Engineers, Manufacturers, and Service
          Providers to get to the DNA of the data that Engineers need to advance
          their ideas to the next phase.
        </p>
        <p>
          The spark for this venture was the fragmented nature of the aerospace
          sourcing chain. A few friendly Engineers said what we planned was
          already available from multiple sites and search engines. In those
          words was a sort of “Aha Moment” followed by a challenge to find 5
          unique items in minutes, something they just couldn’t easily do.
        </p>
      </div>
    </section>

    <!-- SERVICE INTRO -->
    <section class="max-w-7xl mx-auto px-8 pb-16">
      <h3 class="text-xl font-semibold mb-4">ExoSearch as a Service</h3>
      <p class="text-sm text-gray-600 max-w-3xl">
        The future is bright and we’re just getting started! By our standards,
        other platforms and search engines have much lower standards for
        vetting. The products and services on Exosearch.io are best in class for
        the intended application, and we’ll monitor Engineer’s feedback to make
        sure that’s 100% true in all cases.
      </p>
    </section>

    <!-- CARDS -->
    <section class="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-6 pb-20">
      <div
        v-for="card in cards"
        :key="card.title"
        class="rounded-xl overflow-hidden border bg-gray-50 relative"
      >
        <div
          class="h-36"
          :style="{
            background: `
        linear-gradient(
          to bottom,
          rgba(255, 255, 255, .4) 0%,
          rgba(255, 255, 255, .4) 59%,
          rgba(255, 255, 255, .6) 100%
        ),
        url(${card.image}) no-repeat
      `,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }"
        >
          <div class="p-4 flex flex-col justify-end h-full">
           
            <h4 class="font-semibold">{{ card.title }}</h4>
            <p class="text-xs mt-1">{{ card.subtitle }}</p>
          </div>
          <div class="absolute top-5 left-5">
             <svg
              width="26"
              height="26"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8333 20.1667V14.8333M14.8333 9.5H14.8467M28.1667 14.8333C28.1667 22.1971 22.1971 28.1667 14.8333 28.1667C7.46954 28.1667 1.5 22.1971 1.5 14.8333C1.5 7.46954 7.46954 1.5 14.8333 1.5C22.1971 1.5 28.1667 7.46954 28.1667 14.8333Z"
                stroke="#FF574C"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- REQUESTS -->
    <section class="max-w-7xl mx-auto px-8 pb-24">
      <h3 class="text-xl font-semibold mb-2">We take requests</h3>
      <p class="text-sm text-gray-600 mb-6">
        Give us a shot to search and vet items not yet in our database
      </p>
      <div class="flex flex-col sm:flex-row gap-4 max-w-md">
        <input
          type="email"
          placeholder="Enter email"
          class="flex-1 rounded-full border px-4 py-2 text-sm"
        />
        <button class="bg-black text-white px-6 py-2 rounded-full">
          Submit
        </button>
      </div>
      <label class="flex items-center gap-2 text-xs text-gray-500 mt-3">
        <input type="checkbox" /> I agree to receive marketing emails
      </label>
    </section>

    <!-- FOOTER -->
    <footer class="bg-gray-900 text-gray-300 px-8 py-16">
      <div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        <div class="font-semibold">
          <span style="font-weight: 300">exo</span><span>search</span>
        </div>
        <div>
          <p class="font-semibold mb-2">Product categories</p>
          <ul class="space-y-1">
            <li v-for="c in applications" :key="c"><a :href="c.link">{{ c.displayName }}</a></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold mb-2">Services</p>
          <ul class="space-y-1">
            <li>Digital Datasheets</li>
            <li>Technology Partnering</li>
          </ul>
        </div>
        <div>
          <p class="font-semibold mb-2">Company</p>
          <ul class="space-y-1">
            <li><a href="/about">About</a></li>
            <li>Contact</li>
            <li>News and Events</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
