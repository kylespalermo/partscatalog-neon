<script setup>
  import columnConfigurations from './column_configurations'
const props = defineProps({
  product: Object,
});

let allProductProperties = {
  ...props.product,
  ...props.product.features,
  ...props.product.application
}
delete allProductProperties.features
delete allProductProperties.application

const categorizedProductData = Object.values(
  columnConfigurations.reduce((acc, col) => {
    const cat = col.category_name;

    if (!acc[cat]) {
      acc[cat] = {
        category_name: cat,
        columns: []
      };
    }
    if (allProductProperties[col.column_name]){
      acc[cat].columns.push({
        column_name: col.column_name,
        display_name: col.display_name,
        value: allProductProperties[col.column_name]
      });
    }

    return acc;
  }, {})
);
console.log(categorizedProductData);


</script>
<template>
  <div class="mt-[70px]">
    <h3 class="font-bold mb-4">Component specifications</h3>
    <ProductPageHorizontalTable :data="categorizedProductData.find((category) => category.category_name === 'Specifications')" />
    <div class="component-grid">
      <ProductPageVerticalTable 
              v-for="category in categorizedProductData"
              :key="category.category_name"
              :data="category"
              
              />
      
    </div>
  </div>
</template>
<style></style>
