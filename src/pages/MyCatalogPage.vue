<script setup lang="ts">
import { ref } from 'vue';
import { Header } from '../widgets/CatalogPageWidgets/Header';
import { MainFilter } from '../widgets/CatalogPageWidgets/MainFilter';
import { CatalogList } from '../widgets/CatalogPageWidgets/CatalogList';
import { Map } from '../widgets/CatalogPageWidgets/Map';

const isMap = ref(false);

// const value = ref<string>('');

// console.log(value.value);

// маска на инпут
// const test = (e: Event) => {
//   if (e.target) {
//     if (
//       // @ts-ignore
//       e.target.value.match(/\D/g)
//       // && +e.target.value.length < 4
//     ) {
//       // @ts-ignore
//       value.value = e.target.value;
//     }
//   }
// };
</script>

<template>
  <Header v-model:isMap="isMap" />
  <MainFilter v-model:isMap="isMap" />
  <div class="flex flex-wrap md:flex-nowrap gap-[20px] bg-[#F4F6FB] px-[20px]">
    <CatalogList :class="isMap && 'w-[60%]'" />
    <Map v-if="isMap" />
  </div>
</template>
