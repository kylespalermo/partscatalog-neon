<script setup>

const result = await $fetch('/api/parts-db');
console.log('Database data:', result);

</script>

<template>
    <h1>This is just a test!</h1>
</template>