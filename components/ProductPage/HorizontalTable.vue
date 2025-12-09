<script setup>
const props = defineProps({
  data: Object,
});
console.log(props.data);
</script>
<template>
  <div class="overflow-x-auto" v-if="data.columns.length">
    <table class="key_details">
      <thead>
        <tr class="bg-gray-100">
          <th
            v-for="item in data.columns"
            :key="item.key"
            class="border border-gray-300 px-4 py-3 text-left whitespace-nowrap"
          >
            {{ item.display_name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            v-for="item in data.columns"
            :key="item.key"
            class="border border-gray-300 p-2 text-center"
          >
            {{ item.value ?? 'n/a' }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style></style>
