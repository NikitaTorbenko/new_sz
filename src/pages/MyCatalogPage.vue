<script setup lang="ts">
import { Header } from '../widgets/CatalogPageWidgets/Header';
import { MainFilter } from '../widgets/CatalogPageWidgets/MainFilter';

// import { ref } from 'vue';

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
  <Header />
  <MainFilter />
</template>
