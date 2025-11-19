<script setup>
const props = defineProps({
  data: Object,
});
console.log(props.data);

</script>
<template>
  <div  v-if="data.columns.length">
    <h6 class="short-heading">{{ data.category_name }}</h6>
    <table class="cp-table">
      <tr  v-for="item in data.columns">
        <td>{{  item.display_name }}</td>
        <td>{{  item.value  }}</td>
      </tr>
     
    </table>
  </div>
</template>
<style></style>
