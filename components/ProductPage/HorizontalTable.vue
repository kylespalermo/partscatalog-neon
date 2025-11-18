<script setup>
const props = defineProps({
  featureList: Object,
});</script>
<template>
        <div class="overflow-x-auto">
      <table class="key_details">
        <thead>
          <tr class="bg-gray-100">
            
            <th
              v-for="item in featureList"
              :key="item.key"
              class="border border-gray-300 px-4 py-3 text-left whitespace-nowrap"
            >
              {{ item.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td
              v-for="item in featureList"
              :key="item.key"
              class="border border-gray-300 p-2 text-center"
            >
              {{ item.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<style></style>