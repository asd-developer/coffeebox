<template>
  <section class="flex flex-row w-full">
    <Search />
  </section>
  <section class="flex flex-row w-full">
    <CardGrid />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import {addCoffeeName, getCoffeeNames} from '@/indexdb/indexdb'
import Search from '@/components/search.vue'
import CardGrid from '@/components/cardGrid.vue'



</script>

<style></style>
