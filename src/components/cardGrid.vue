<template>
  <section class="flex flex-wrap gap-5">
    <BeanBagCard class="w-full sm:w-1/2 md:w-2/3 lg:w-2/5 xl:w-2/6 flex-gap-5" v-for="index in 10" :key="index" />
  </section>
</template>

<script setup>
import BeanBagCard from '@/components/beanBagCard.vue'
</script>
