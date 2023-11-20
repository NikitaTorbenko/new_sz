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

// import { YandexMap, YandexMarker } from 'vue-yandex-maps';
// import { NewProductCardSmall } from '../features/NewProductCardSmall';

// const coordinates = [55, 33];
</script>

<template>
  <Header />
  <MainFilter />
  <!-- <CatalogList /> -->

  <!-- <div id="app" style="width: 600px; height: 400px">
    <YandexMap :coordinates="coordinates">
      <YandexMarker :coordinates="coordinates" :marker-id="123">
        <template #component>
          <NewProductCardSmall />
        </template>
      </YandexMarker>
    </YandexMap>
  </div> -->
</template>
