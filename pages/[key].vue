<script setup>
import { useRoute, useRouter } from "vue-router";
import "flag-icons/css/flag-icons.min.css";

const route = useRoute();
const router = useRouter();
// Fetch product details using key from the URL

const { data, error } = await useFetch(`/api/${route.query.category}/${route.params.key}`, {
  lazy: false,
  server: true,
});

const product = computed(() => data.value?.products || []);
const isOpen = ref(false); // or true, depending on default

const applicationsRaw = product.value?.application;
// Parse & filter
const applicationNames = computed(() => {
  try {
    const apps = JSON.parse(applicationsRaw);
    return Object.keys(apps)
      .filter((key) => apps[key] === "TRUE") // only TRUE values
      .map((key) =>
        key
          .replace(/^app_/, "")
          .replace(/_/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())
      );
    // e.g. "app_defense" ? "Defense"
  } catch {
    return [];
  }
});

// Map ISO 3166-1 alpha-3 → alpha-2
const iso3to2 = {
  usa: "us",
  ind: "in",
  deu: "de",
  fra: "fr",
  gbr: "gb",
  can: "ca",
  aus: "au",
  jpn: "jp",
  chn: "cn",
  ita: "it",
  esp: "es",
  // add more as needed
};

// Convert to alpha-2 lowercase for flag-icons
const convertCode = (code) => {
  return iso3to2[code.toLowerCase()] || code.toLowerCase();
};
</script>

<template class="!bg-white">
  <MainNavbar />
  <section class="inner-container">
    <div class="flex mt-[-13px] mb-[10px]">
      <client-only>
        <FontAwesomeIcon
          :icon="['fas', 'chevron-left']"
          class="h-4 text-blue-600"
        />
        <FontAwesomeIcon
          :icon="['fas', 'chevron-left']"
          class="h-4 mr-1 text-blue-600"
        />
      </client-only>
      <NuxtLink
        class="flex items-center text-blue-600 hover:underline cursor-pointer mt-[-5px]"
        :to="{ path: '/products', query: { type: product.type } }"
        >Back</NuxtLink
      >
    </div>

    <div v-if="product" class="">
      <div class="mb-6 flex items-center gap-3 product_name">
        <h3 class="in-heading">
          {{ product.manufacturer }} {{ product.model }}
          <span class="">
            {{ product.type }}
          </span>
        </h3>
      </div>
      <div class="relative -top-[10px]">
        <div class="small-badges">
          <span v-for="app in applicationNames" :key="app" class="appname">{{
            app
          }}</span>
          <span class="ml-[8px]"
            >{{ product.country_of_origin }}
            <span
              v-if="convertCode(product.country_of_origin)"
              :class="`fi fi-${convertCode(
                product.country_of_origin
              ).toLowerCase()}`"
              class="w-5 h-5"
            ></span>
          </span>
        </div>
      </div>
    </div>
    <img :src="product.image_url" alt="" />
    <div class="relative top-[40px]">
      <Button class="refine-btn">
        <NuxtLink to="mailto:sales@exosearch.io"> Request quote </NuxtLink>
      </Button>
      &nbsp;&nbsp;&nbsp;
      <span class="inline-flex items-center gap-1 website"
        >{{ product.website }}
        <NuxtLink class="" :to="`${product.website}`" target="_blank"
          ><client-only
            ><FontAwesomeIcon
              :icon="['fas', 'external-link-alt']"
              class="h-4 text-black" /></client-only></NuxtLink
      ></span>
    </div>
    <ProductPageComponentSpecifications :product="product" />
  </section>
</template>

<style scoped>
h1 {
  grid-column: 1 / span 12;
  grid-row: 1;
}

form {
  grid-column: 1 / span 12;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: start;
}

main {
  grid-column: 1 / span 12;
  grid-row: 3;
}

.cards-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.my-table :deep(.p-datatable-table) {
  table-layout: auto !important;
  width: auto;
  white-space: nowrap;
  td,
  th {
    padding: 4px 12px 4px 12px;
  }
}

.tags-cell {
  display: flex;
  gap: 2px;
}
</style>
