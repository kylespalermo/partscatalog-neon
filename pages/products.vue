<script setup>

    import { ref, computed } from 'vue';
    import { useRoute, useRouter } from 'nuxt/app';

    const { products, error } = useProducts();
    const productTypes = useProductTypes(products);
    const productApplications = useProductApplications(products);

    const route = useRoute();
    const router = useRouter();

    // Store selected filters in a reactive state
    const selectedType = ref();
    const selectedApplication = ref();


    // When the page loads, set the initial filter from the query
    if (route.query.type) {
        console.log(route.query.type)
        selectedType.value = route.query.type;
    }

    router.replace({ path: '/products' });


    watch(error, (err) => {
        if (err) {
            console.error('Error loading products:', err);
        }
    });

    const filteredProducts = computed(() => {
        if (!products.value || !Array.isArray(products.value)) return []
        return products.value.filter(product => {
            // Filter by type (if selected)
            const matchesType =
            !selectedType.value || product.type === selectedType.value

            // Filter by application (if selected)
            const matchesApplication =
            !selectedApplication.value ||
            product.application?.[`app_${selectedApplication.value}`]?.toUpperCase() === "TRUE"

            return matchesType && matchesApplication
        })
    })

</script>

<template>
    <section class="base-grid">
        <h1>Explore products</h1>
        <aside>
            <template v-if="products">
                <fieldset>
                    <legend>Product types</legend>
                    <div v-for="productType in productTypes">
                        <input type="radio" :id=productType :name=productType :value=productType v-model="selectedType" />
                        <label :for=productType>{{ productType }}</label>
                    </div>
                    <input type="radio" id="showAllTypes" name="showAllTypes" value="" v-model="selectedType" />
                    <label for="showAllTypes">Show all</label>
                </fieldset>
                <fieldset>
                    <legend>Applications</legend>
                    <div v-for="productApplication in productApplications">
                        <input type="radio" :id=productApplication :name=productApplication :value=productApplication v-model="selectedApplication" />
                        <label :for=productApplication>{{ productApplication }}</label>
                    </div>
                    <input type="radio" id="showAllApplications" name="showAllApplications" value="" v-model="selectedApplication" />
                    <label for="showAllApplications">Show all</label>
                </fieldset>
            </template>
        </aside>
        <main>
            <DataView
                v-if="products"
                :value="filteredProducts"
            >
                <template #list="slotProps">
                    <div class="cards-list">
                        <DataCard v-for="product in slotProps.items" :key="product.key"
                            :manufacturer="product.manufacturer"
                            :manufacturer_part_number="product.manufacturer_part_number"
                            :model="product.model"
                            :applications="product.application"
                            :features="product.features"
                            :country_of_origin="product.country_of_origin"
                        />
                    </div>
                </template>
            </DataView>
        </main>
    </section>
</template>

<style scoped>

h1 {
    grid-column: 1 / span 12;
}

aside {
    grid-column: 1 / span 3;
    grid-row: 2;
}

main {
    grid-column: 4 / span 9;
}

.cards-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

</style>