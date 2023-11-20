<script setup lang="ts">
import { Header } from '../widgets/CatalogPageWidgets/Header';
import { MainFilter } from '../widgets/CatalogPageWidgets/MainFilter';
import { CatalogList } from '../widgets/CatalogPageWidgets/CatalogList';
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

import { YandexMap, YandexMapDefaultSchemeLayer } from 'vue-yandex-maps';

//Можно использовать для различных преобразований
const map = null;
</script>

<template>
  <Header />
  <MainFilter />
  <CatalogList />

  <yandex-map
    v-model="map"
    :settings="{
      location: {
        center: [37.617644, 55.755819],
        zoom: 9,
      },
    }"
    width="100%"
    height="500px"
  >
    <yandex-map-default-scheme-layer />
  </yandex-map>
</template>
