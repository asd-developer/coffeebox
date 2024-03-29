<template>
  <section class="flex flex-row w-[90%] mx-auto mb-5">
    <dialog id="addBeanBag" class="modal">
      <div class="modal-box">
        <form method="dialog" class="flex flex-col gap-5">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 class="font-bold text-lg">Add new coffee bag</h3>
          <label class="input input-bordered flex items-center gap-2 font-bold">
            Name:
            <input type="text" class="grow font-normal" placeholder="" />
          </label>
          <div class="flex flex-row justify-between">
            <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
            <button class="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <Search />
  </section>
  <section class="flex flex-row w-full">
    <CardGrid />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { addCoffeeName, getCoffeeNames } from '@/indexdb/indexdb'
import Search from '@/components/search.vue'
import CardGrid from '@/components/cardGrid.vue'

const namesList = ref([]);

onMounted(async () => {
  namesList.value = await getCoffeeNames();
  console.log(namesList.value);
});
</script>
