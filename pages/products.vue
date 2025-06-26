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
    const selectedParametricFeatures = ref([]);
    const selectedApplications = ref([]);
    const selectedCountries = ref([])


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

    const typeFilteredProducts = computed(() => {
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
        return transform(typeFilteredProducts.value);
    });


    const finalFilteredProducts = computed(() => {
        console.log(transformedData)
        if (!transformedData) return []
            return transformedData.value.filter(product => {
            const matchesApplications =
                selectedApplications.value.length === 0 ||
                selectedApplications.value.some(app =>
                product.applications?.includes(app)
            )

            const matchesCountry =
            selectedCountries.value.length === 0 ||
            selectedCountries.value.includes(product.country_of_origin)

            return matchesApplications && matchesCountry
        })
    })

    const parametricFeatures = computed(() => {
        const first = transformedData.value?.[0];
        if (!first) return [];
            return Object.keys(first).filter(key => key.startsWith('ft_'));
    });

    function selectDefaultParametricFeatures() {
        selectedParametricFeatures.value = parametricFeatures.value.slice(0, 5);
    }

    onMounted(() => {
        selectDefaultParametricFeatures();
    });

    watch(selectedType, () => {
        selectDefaultParametricFeatures();
    })

    const uniqueApplications = computed(() => {
        const appSet = new Set()

        transformedData.value.forEach(product => {
            product.applications?.forEach(app => appSet.add(app))
        })

        return Array.from(appSet)
    })

    const uniqueCountries = computed(() => {
        const countrySet = new Set()

        transformedData.value.forEach(product => {
            if (product.country_of_origin) {
            countrySet.add(product.country_of_origin)
            }
        })

        return Array.from(countrySet)
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
                </fieldset>
                <fieldset>
                    <legend>Filter by applications</legend>
                    <div v-for="uniqueApplication in uniqueApplications">
                        <input type="checkbox" :id="uniqueApplication" :name="uniqueApplication" :value="uniqueApplication" v-model="selectedApplications" />
                        <label :for="uniqueApplication">{{ uniqueApplication }}</label>
                    </div>
                </fieldset>
                <fieldset v-if="uniqueCountries.length > 1">
                    <legend>Filter by countries of origin</legend>
                    <div v-for="uniqueCountry in uniqueCountries">
                        <input type="checkbox" :id="uniqueCountry" :name="uniqueCountry" :value="uniqueCountry" v-model="selectedCountries" />
                        <label :for="uniqueCountry">{{ uniqueCountry }}</label>
                    </div>
                </fieldset>
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
                :value="finalFilteredProducts"
            >
                <Column sortable key="product" field="product" header="Product"/>
                <Column sortable  key="applications" field="applications" header="Applications">
                    <template #body="{ data }">
                        <div class="tags-cell">
                            <Tag v-for="(application, index) in data.applications" :key="index" :value="application"></Tag>
                        </div>
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

.tags-cell {
    display: flex;
    gap: 2px;
}

</style>