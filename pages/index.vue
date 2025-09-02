<script setup>
//const { products, error } = await useFetch('composables/useProducts');
const { data, error } = await useFetch('/api/all_products', {
  lazy: false,
  server: true
})

const products = computed(() => data.value?.products || [])
const productTypes = useProductTypes(products);
// const productApplications = useProductApplications(products);

// const productCategories = productTypes.value.concat(productApplications.value)

watch(error, (err) => {
  if (err) {
    console.error('Error loading products:', err);
  }
});

// Search logic
const search = ref('')
const router = useRouter()

// search logic
const handleSearch = () => {
	if (search.value.trim()) {
  	  router.push({ path: '/products', query: { search: search.value.trim() } })
 	 }}
   import { ref } from 'vue'

// reactive state for hamburger toggle
const isOpen = ref(false)
</script>

<template>
  <div class="w-full max-w-9xl main-background min-h-screen">
    <section class="w-full max-w-7xl main-c">
  <nav class="top-nav text-white">
      <div class="mx-auto">
        <div class="flex items-center justify-between h-16">
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
            <!--<a href="#" class="">Vendor sign-in</a>-->
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
       <!-- <a href="#" class="block py-2 hover:text-yellow-400">Vendor sign-in</a>-->
      </div>
    </nav>
  <div class="grid  flex items-center card-box">
    <!-- Each child div -->
    <div class="flex gap-2 card-flex justify-between">
	
      <div class="card basis-auto">
        <span><span class="intro text-white">The technical search platform for aerospace</span><span class="surfacetext text-white">Exosearch surfaces high-performance systems, vetted for mission critical applications.</span></span>
						
      </div>
	  
      <div class="card basis-auto form-box flex items-center justify-start">
       <div class=" card-box-bot">
					<div class="search_input flex justify-between">
					<InputText name="email" class="search_products" type="text" placeholder="Enter keywords"  v-model="search"/>
       
					<Button @click="handleSearch" class="find_component  text-white" type="submit" severity="secondary" label="Find Components"  /> 
					</div>
					<div class="browse_cat">
						<p class="b-text">Or browse components by applications</p>
						<div class="wrap flex flex-wrap gap-2">
							<Button class="product_types" asChild v-for="productType in productTypes" v-slot="slotProps">
								<NuxtLink class=" border-0 no-underline p-btns" :to="{path: '/products', query: { type: productType }}">{{ productType }}</NuxtLink>
							</Button>
						</div>
					</div>
					</div>
      </div>
    </div>
  </div>
    
   
    </section>
	</div>
</template>

<style lang="scss" scoped>

/*hgroup {
    grid-column: 1 / span 12;
    text-align: left;
	margin:22px
}

.wrap { flex-wrap: wrap; }

.text-center { text-align: center; }
.heading-content {
  
}

.search-wrapper {
    grid-column: 5 / span 4;
    display: flex;
    flex-wrap: w-child(1) {
        flex: 1 0 75%;
    }
    :nth-child(2) {
       flex: 0 1 auto;
    }
	 justify-content: flex-start;
    background: #f4f4f4;
    padding: 46px 0 28px 30px;
    flex-direction: column;
    width: 45vw;
}
.intro{
color:white;
font-size:42px;
font-weight:800;
line-height: 33px;
}
*/
</style>