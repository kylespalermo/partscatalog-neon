<script setup>

    import { useRoute } from 'vue-router'
	import 'flag-icons/css/flag-icons.min.css'
	
const route = useRoute()

// Fetch product details using key from the URL
 const { data, error } = await useFetch(`/api/${route.params.key}`, {
  lazy: false,
  server: true
})

const product = computed(() => data.value?.products || [])


const applicationsRaw = product.value?.application
// Parse & filter
const applicationNames = computed(() => {
  try {
    const apps = JSON.parse(applicationsRaw)
    return Object.keys(apps)
      .filter(key => apps[key] === "TRUE")   // only TRUE values
      .map(key => key.replace(/^app_/, '').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())) 
      // e.g. "app_defense" ? "Defense"
  } catch {
    return []
  }
  })


// helper: format feature keys
function formatLabel(key) {
  return key
    .replace(/^ft_/, '')       // remove ft_ prefix
    .replace(/_/g, ' ')        // underscores ? spaces
    .replace(/^\w/, c => c.toUpperCase()) // capitalize first letter
}
const featureList = computed(() => {
  let features = product.value?.features 
  if (!features) return []

  // Parse string if necessary
  if (typeof features === 'string') {
    try {
      features = JSON.parse(features)
	 
    } catch (err) {
      console.error('Failed to parse features JSON:', err)
      return []
    }
  }

  return Object.entries(features).map(([key, value]) => ({
    key,
    label: formatLabel(key),
    value
  }))
})

// Map ISO 3166-1 alpha-3 → alpha-2
const iso3to2 = {
  usa: 'us',
  ind: 'in',
  deu: 'de',
  fra: 'fr',
  gbr: 'gb',
  can: 'ca',
  aus: 'au',
  jpn: 'jp',
  chn: 'cn',
  ita: 'it',
  esp: 'es',
  // add more as needed
}

// Convert to alpha-2 lowercase for flag-icons
const convertCode = (code) => {
  return iso3to2[code.toLowerCase()] || code.toLowerCase()
}
</script>

<template class="!bg-white">
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
        <a href="#" class="block py-2 hover:text-yellow-400">About</a>
        <a href="#" class="block py-2 hover:text-yellow-400">Vendor sign-in</a>
      </div>
    </nav>
		</section>
		<section class="inner-conatiner">
		<div v-if="product" class="">
        <div class="mb-6 flex items-center gap-3 product_name">
			<h3 class="in-heading">{{ product.manufacturer }} {{product.model}}
			<span class=""
			>
			 {{ product.type }}
			</span>
			</h3> 
		
			
			
			
        </div>
		<div class="relative -top-[10px]">
	
			<div class="small-badges">
						<span v-for="app in applicationNames" :key="app" class="appname">{{ app }}</span>
						 <span class="ml-[8px]">{{product.country_of_origin}} <span
							  v-if="convertCode(product.country_of_origin)"
							  :class="`fi fi-${convertCode(product.country_of_origin).toLowerCase()}`"
							  class="w-5 h-5"
							></span>
						</span>
			</div>
		
		
		</div>
       	</div>
		<div class="relative top-[40px]">
		<Button label="Request quote" class="refine-btn"></Button> &nbsp;&nbsp;&nbsp; <span class="inline-flex items-center gap-1 website">{{product.website}}  <NuxtLink class="" :to="`${product.website}`" target="_blank"><FontAwesomeIcon :icon="['fas', 'external-link-alt']" class="h-4 text-black"/></NuxtLink></span>
	   	</div>
		<div class="overflow-x-auto mt-[70px]">
		<p class="font-bold mb-4">Component specifications</p>
			<div class="keytable">
			<table class="key_details">
				  <thead>
				   <tr class="bg-gray-100">
				   <th class="border border-gray-300 px-4 py-3 text-left  left-0 bg-gray-100 z-10">Product</th>
					<th v-for="item in featureList" :key="item.key" class="border border-gray-300 px-4 py-3 text-left whitespace-nowrap">{{ item.label }}</th>
					</tr>
				  </thead>
				  <tbody>
				  <tr>
					<td class="border border-gray-300 p-2"> {{ product.manufacturer }} {{product.model}}</td>
				  
					<td v-for="item in featureList" :key="item.key" class="border border-gray-300 p-2">
					   {{ item.value }}</td>
					</tr>
				  </tbody>
			</table>
			</div>
	</div>
	
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
  td, th {
    padding: 4px 12px 4px 12px;
  }
}

.tags-cell {
    display: flex;
    gap: 2px;
}

</style>