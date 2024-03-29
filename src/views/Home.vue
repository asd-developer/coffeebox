<template>
  <section class="flex flex-row w-[90%] mx-auto mb-5">
    <Search />
  </section>
  <section class="flex flex-row w-full">
    <CardGrid />
  </section>
</template>

<script setup>
import { ref ,onMounted} from 'vue'
import {addCoffeeName, getCoffeeNames} from '@/indexdb/indexdb'
import Search from '@/components/search.vue'
import CardGrid from '@/components/cardGrid.vue'

const namesList = ref([]); // Initialize as an empty array

onMounted(async () => {
  namesList.value = await getCoffeeNames();
  console.log(namesList.value); // Log the value after it's fetched
});
</script>

<style></style>
