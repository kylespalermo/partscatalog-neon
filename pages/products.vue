<script setup>

    import { ref, computed } from 'vue';
    import { useRoute, useRouter } from 'nuxt/app';

    // import 'primevue/datatable/datatable.css';
    // import 'primevue/paginator/paginator.css';


    const { products, error } = useProducts();
    const productTypes = useProductTypes(products);
    // const productApplications = useProductApplications(products);

    const route = useRoute();
    const router = useRouter();

    // Store selected filters in a reactive state
    const selectedType = ref();
    const selectedApplication = ref();
    const selectedParametricFeatures = ref([]);


    // When the page loads, set the initial filter from the query

    onMounted(() => {
        selectedType.value = route.query.type || productTypes.value?.[0];
    });

    router.replace({ path: '/products' });


    watch(error, (err) => {
        if (err) {
            console.error('Error loading products:', err);
        }
    });

    const filteredProducts = computed(() => {
        if (products.value) {
            return products.value.filter(product => product.type === selectedType.value)
        }
    });

    function labelFromFeatureKey(key) {
        return key
            .replace(/^ft_/, '')       // remove "ft_" prefix
            .replace(/_/g, ' ')        // replace remaining underscores with spaces
            .replace(/^\w/, c => c.toUpperCase()); // capitalize first letter
    }
    

    const { transform } = useTransformProducts();
    const transformedData = computed(() => {
        return transform(filteredProducts.value);
    });

    const parametricFeatures = computed(() => {
        const first = transformedData.value?.[0];
        if (!first) return [];
            return Object.keys(first).filter(key => key.startsWith('ft_'));
    });

    function selectDefaultParametricFeatures() {
        selectedParametricFeatures.value = parametricFeatures.value.slice(0, 5);
    }

    onMounted(() => {
        selectDefaultParametricFeatures()
    });

    // watch(
    //     () => parametricFeatures.value,
    //     (features) => {
    //         if (features?.length && selectedParametricFeatures.value.length === 0) {
    //             selectedParametricFeatures.value = features.slice(0, 5);
    //         }
    //     },
    //     { immediate: true }
    // );



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
                    <!-- <input type="radio" id="showAllTypes" name="showAllTypes" value="" v-model="selectedType" />
                    <label for="showAllTypes">Show all</label> -->
                </fieldset>
                <!-- <fieldset>
                    <legend>Applications</legend>
                    <div v-for="productApplication in productApplications">
                        <input type="radio" :id=productApplication :name=productApplication :value=productApplication v-model="selectedApplication" />
                        <label :for=productApplication>{{ productApplication }}</label>
                    </div>
                    <input type="radio" id="showAllApplications" name="showAllApplications" value="" v-model="selectedApplication" />
                    <label for="showAllApplications">Show all</label>
                </fieldset> -->
                <fieldset>
                    <legend>Parametric columns</legend>
                    <div v-for="parametricFeature in parametricFeatures">
                        <input type="checkbox" :id="parametricFeature" :name="parametricFeature" :value="parametricFeature" v-model="selectedParametricFeatures" />
                        <label :for="parametricFeature">{{ labelFromFeatureKey(parametricFeature) }}</label>
                    </div>
                </fieldset>
            </template>
        </aside>
        <main>
            <DataTable
                class="my-table"
                columnResizeMode="expand"
                v-if="products"
                :value="transformedData"
            >
                <Column sortable key="product" field="product" header="Product"/>
                <Column sortable  key="applications" field="applications" header="Applications">
                    <template #body="{ data }">
                        <span v-for="(application, index) in data.applications" :key="index">
                            {{ application }}
                        </span>
                    </template>
                </Column>
                <Column sortable key="country_of_origin" field="country_of_origin" header="Country of origin" />
                <template v-for="selectedParametricFeature in selectedParametricFeatures">
                    <Column sortable :field="selectedParametricFeature" :header="labelFromFeatureKey(selectedParametricFeature)" />
                </template>
            </DataTable>
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

.my-table :deep(.p-datatable-table) {
  table-layout: auto !important;
  width: auto;
  white-space: nowrap;
  td, th {
    padding: 4px 12px 4px 12px;
  }
}

</style>