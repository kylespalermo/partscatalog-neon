<script setup>

    import { ref, watch } from 'vue';
    import { useRoute, useRouter } from 'nuxt/app';

    const { products, error } = useProducts();
    const productTypes = useProductTypes(products);
    const productApplications = useProductApplications(products);

    const route = useRoute();
    const router = useRouter();

    // Store selected filters in a reactive state
    const selectedCategories = ref([]);

    // When the page loads, set the initial filter from the query
    if (route.query.category) {
        selectedCategories.value = [route.query.category];
    }

    router.replace({ path: '/products' });

    function manageCheckedState(checkbox) {
        return selectedCategories.value.includes(checkbox);
    }

    

</script>

<template>
    <section class="base-grid">
        <h1>Explore products</h1>
        <aside>
            <fieldset>
                <legend>Product types</legend>
                <div v-for="productType in productTypes">
                    <input type="checkbox" :id=productType :name=productType :checked="manageCheckedState(productType)" />
                    <label :for=productType>{{ productType }}</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Applications</legend>
                <div v-for="productApplication in productApplications">
                    <input type="checkbox" :id=productApplication :name=productApplication :checked="manageCheckedState(productApplication)"/>
                    <label :for=productApplication>{{ productApplication }}</label>
                </div>
            </fieldset>
        </aside>
        <main>
            <DataView :value="products">
                <template #list="slotProps">
                    <div class="cards-list">
                        <DataCard v-for="product in slotProps.items"
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