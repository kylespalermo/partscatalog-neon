<script setup>
const route = useRoute();

// Font: Title Hero (configured in tailwind.config.js as `font-hero`)
const featuredCategories = [
  { displayName: "Accelerometers", link: "/products?type=Accelerometers" },
  { displayName: "AHRS", link: "/products?type=AHRS" },
  { displayName: "Global Positioning Systems", link: "/products?type=gps" },
  { displayName: "Gyroscopes", link: "/products?type=Gyroscopes" },
  { displayName: "IMUs", link: "/products?type=IMUs" },
];
const config = useRuntimeConfig();

const baseUrl = config.public.web3FormsBaseUrl;
const web3FormsPublicApiKey = config.public.web3FormsPublicApiKey;

const host = useRequestURL().host;
let contactFormSubmitted = route.query.contact_form_submitted;

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
    <section class="">
      <div class="relative mx-auto rounded-3xl overflow-hidden">
        <img
          src="/satellite.jpg"
          alt="Hero background"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/40"></div>

        <div
          class="relative z-10 flex flex-col items-center text-center text-white sm:px-6 px-3 py-24"
        >
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl"
          >
            The technical search platform<br />for aerospace
          </h1>
          <p class="mt-4 text-md text-gray-200">
            Designed by Engineers for Engineers
          </p>

          <!-- SEARCH -->
          <div class="lg:mt-48 mt-24 w-full max-w-xl">
            <div class="flex items-center bg-white rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Search hundreds of components"
                class="flex-1 text-md text-gray-800 outline-none"
              />
              <button
                class="ml-2 w-8 h-8 rounded-full bg-black flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgb(248 113 113)"
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
          <div class="mt-3 flex flex-wrap justify-center gap-4 text-md">
            <a
              v-for="item in featuredCategories"
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
      <div class="text-md text-gray-700 leading-relaxed space-y-4">
        <p>The future is bright and we’re just getting started!</p>
        <p>
          We like to think our vetting standards are high, and throughout our
          Aerospace and High Technology careers, we were guided by higher
          standards: AS9100, ASTM, CCSDS, ESA, FAA, IEEE, ISO, JAXA, NASA, NIST,
          RTCA, SAE, and more.
        </p>
      </div>
    </section>

    <!-- SERVICE INTRO -->
    <section class="max-w-7xl mx-auto px-8 pb-16">
      <h3 class="text-xl font-semibold mb-4">ExoSearch as a Service</h3>
      <p class="text-md text-gray-700 max-w-3xl">
        Our model is different, while large platforms thrive on high volume, low
        or zero touch, or treat you like you’re not worth their time with a chat
        bot, we have experienced Aerospace Professionals aka “humans” to take
        your calls. If we don’t have the answer, we’ll tell you that fast, but
        we will do our best and commit to a timeline to find what you need.
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

    <section class="max-w-7xl mx-auto px-8 pb-24">
      <form :action="baseUrl" method="POST">
        <input
          type="hidden"
          name="redirect"
          :value="'https://' + host + '/?contact_form_submitted=true'"
        />
        <input type="hidden" name="access_key" :value="web3FormsPublicApiKey" />
        <h3 class="text-xl font-semibold mb-2">We take requests</h3>
        <p class="text-md text-gray-700 mb-6">
          If it's not in our database, we'll find it!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md">
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            class="flex-1 rounded-full border px-4 py-2 text-md bg-gray-100"
          />
          <button
            class="text-white px-6 py-2 rounded-full"
            style="background-color: #222222"
            type="submit"
          >
            Submit
          </button>
        </div>
        <label
          class="flex items-center gap-2 text-xs text-gray-500 mt-3"
          style="cursor: pointer"
        >
          <input
            name="agree_to_receive_marketing_emails?"
            type="checkbox"
            class="checkmark accent-[#222222]"
          />
          I agree to receive marketing emails
        </label>
      </form>
      <div
        v-if="contactFormSubmitted === 'true'"
        class="px-3 py-1 mt-3 rounded-md bg-gray-100 border-gray-300 inline-block"
      >
        <p>Thanks for connecting, we will get back to you right away.</p>
      </div>
    </section>
    <LayoutFooter />
  </div>
</template>
