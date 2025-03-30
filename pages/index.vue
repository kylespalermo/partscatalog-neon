<script setup>
const { products, error } = useProducts();

const productTypes = useProductTypes(products);
// const productApplications = useProductApplications(products);

// const productCategories = productTypes.value.concat(productApplications.value)

watch(error, (err) => {
  if (err) {
    console.error('Error loading products:', err);
  }
});


</script>

<template>
    <section class="base-grid">
    <hgroup>
        <h1 class="large">Exosearch</h1>
        <p>The technical search engine for industry.</p>
    </hgroup>
    <div class="search-wrapper">
        <InputText name="email" type="text" placeholder="Search aerospace products" />
        <Button type="submit" severity="secondary" label="Let&rsquo;s go" />
    </div>
    <div class="heading-content">
        <h2 class="text-center">Or browse by category</h2>
        <div class="wrap">
            <Button asChild v-for="productType in productTypes" v-slot="slotProps">
                <NuxtLink :class="slotProps.class" :to="{path: '/products', query: { type: productType }}">{{ productType }}</NuxtLink>
            </Button>
        </div>
    </div>
    <div class="heading-content">
        <h2>Other products and services</h2>
        <div>
            <Card>
                <template #title>Test systems</template>
                <template #content>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</template>
            </Card>
            <Card>
                <template #title>Certification services</template>
                <template #content>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</template>
            </Card>
        </div>
    </div>
    <div class="heading-content">
        <h2>Trending capabilities</h2>
        <div>
            <Card>
                <template #title>Radiation hardened</template>
                <template #content>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</template>
            </Card>
            <Card>
                <template #title>Space ready</template>
                <template #content>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</template>
            </Card>
            <Card>
                <template #title>Digital twins</template>
                <template #content>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</template>
            </Card>
        </div>
    </div>
    </section>
</template>

<style lang="scss" scoped>

hgroup {
    grid-column: 1 / span 12;
    text-align: center;
}

.wrap { flex-wrap: wrap; }

.text-center { text-align: center; }


.heading-content {
    grid-column: 3 / span 8;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    row-gap: 1rem;
    div {
        display: flex;
        gap: .5rem;
        justify-content: center;
    }
    .card {
        flex-basis: auto;
    }
}

.search-wrapper {
    grid-column: 5 / span 4;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    :nth-child(1) {
        flex: 1 0 75%;
    }
    :nth-child(2) {
       flex: 0 1 auto;
    }
}


</style>