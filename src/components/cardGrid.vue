<template>
  <section class="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 justify-center gap-5">
    <BeanBagCard class="w-full flex-gap-5" v-for="index in 10" :key="index" />
  </section>
</template>

<script setup>
import BeanBagCard from '@/components/beanBagCard.vue'
</script>
