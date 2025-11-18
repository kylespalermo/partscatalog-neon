<script setup>
const props = defineProps({
  product: Object,
});

const featureList = computed(() => {
  let features = props.product.features;
  if (!features) return [];

  // Parse string if necessary
  if (typeof features === "string") {
    try {
      features = JSON.parse(features);
    } catch (err) {
      console.error("Failed to parse features JSON:", err);
      return [];
    }
  }

  return Object.entries(features).map(([key, value]) => ({
    key,
    label: formatLabel(key),
    value,
  }));
});

// helper: format feature keys
function formatLabel(key) {
  return key
    .replace(/^ft_/, "") // remove ft_ prefix
    .replace(/_/g, " ") // underscores ? spaces
    .replace(/^\w/, (c) => c.toUpperCase()); // capitalize first letter
}
</script>
<template>
  <div class="mt-[70px]">
    <h3 class="font-bold mb-4">Component specifications</h3>
    <ProductPageHorizontalTable :featureList="featureList" />

    <div class="component-grid">
      <ProductPageVerticalTable />
      <ProductPageVerticalTable />
      <ProductPageVerticalTable />
      <ProductPageVerticalTable />
      <ProductPageVerticalTable />
    </div>
  </div>
</template>
<style></style>
