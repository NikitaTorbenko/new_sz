<script setup>
import { ref } from 'vue';
import { YandexMap, YandexMarker } from 'vue-yandex-maps';

const settings = ref({
  apiKey: '1bc4c10e-abd5-4d94-8f04-2446a564060b',
  lang: 'ru_RU',
  coordorder: 'latlong',
  debug: false,
  version: '2.1',
});

const onClick = e => console.log(e.get('coords'));
</script>

<template>
  <div class="w-[40%] rounded-[15px] overflow-hidden sticky top-0 h-[100vh]">
    <YandexMap
      @click="onClick"
      :style="{
        height: 100 + '%',
      }"
      :settings="settings"
      :coordinates="[47.236826043254595, 39.71301759069304]"
      :zoom="17"
    >
      <YandexMarker
        :coordinates="[48.236826043254595, 39.71301759069304]"
        :marker-id="123"
      >
        <template #component>
          <div class="">iuwhojlqwd</div>
        </template>
      </YandexMarker>
      <YandexMarker
        :coordinates="[47.236826043254565, 39.71301759069304]"
        :marker-id="123"
      >
        <template #component>
          <div class="">iuwhojlqwdqwdqwd</div>
        </template>
      </YandexMarker>
    </YandexMap>
  </div>
</template>

<!-- <script setup>
import { ref } from 'vue';
import { YandexMap, YandexMarker } from 'vue-yandex-maps';
import { NewProductCard } from '../../../../features/NewProductCard';

const cards = [
  {
    price: '9.2',
    title: 'ЖК «Рубин»',
    coordinates: [54, 35],
    studio: { title: 'Студии', area: '27,44', price: '4,3' },
    one: { title: '1-комн.', area: '33,87', price: '5,3' },
    two: { title: '2-комн.', area: '55,55', price: '6,3' },
    three: { title: '3-комн.', area: '74,6', price: '8,3' },
    district: 'Центральный район Ворошиловский пр-кт, 24',
    flatsCount: '247',
    date: '4 кв. 2023 - 4 кв. 2024',
  },
  {
    price: '9.2',
    title: 'ЖК «Рубин»',
    coordinates: [55, 35],
    studio: { title: 'Студии', area: '27,44', price: '4,3' },
    one: { title: '1-комн.', area: '33,87', price: '5,3' },
    two: { title: '2-комн.', area: '55,55', price: '6,3' },
    three: { title: '3-комн.', area: '74,6', price: '8,3' },
    district: 'Центральный район Ворошиловский пр-кт, 24',
    flatsCount: '247',
    date: '4 кв. 2023 - 4 кв. 2024',
  },
  {
    price: '9.2',
    title: 'ЖК «Рубин»',
    coordinates: [56, 35],
    studio: { title: 'Студии', area: '27,44', price: '4,3' },
    one: { title: '1-комн.', area: '33,87', price: '5,3' },
    two: { title: '2-комн.', area: '55,55', price: '6,3' },
    three: { title: '3-комн.', area: '74,6', price: '8,3' },
    district: 'Центральный район Ворошиловский пр-кт, 24',
    flatsCount: '247',
    date: '4 кв. 2023 - 4 кв. 2024',
  },
];

const settings = ref({
  apiKey: '1bc4c10e-abd5-4d94-8f04-2446a564060b',
  lang: 'ru_RU',
  coordorder: 'latlong',
  debug: false,
  version: '2.1',
});
</script>

<template>
  <div class="w-[40%] rounded-[15px] overflow-hidden sticky top-0 h-[100vh]">
    <YandexMap
      :style="{
        height: 100 + '%',
      }"
      :settings="settings"
      :coordinates="[37.617644, 55.755819]"
      :zoom="12"
    >
      <YandexMarker
        :coordinates="item.coordinates"
        :marker-id="index"
        :key="index"
      >
        <template #component>
          <div class="">widuqwid</div>
          <NewProductCard
            :key="index"
            :studio="item.studio"
            :one="item.one"
            :two="item.two"
            :three="item.three"
            :title="item.title"
            :date="item.date"
            :price="item.price"
            :district="item.district"
            :flats-count="item.flatsCount"
            class="inline-block"
          /> 
        </template>
      </YandexMarker>
    </YandexMap>
     <YandexMap
      :style="{
        height: 100 + '%',
      }"
      :settings="settings"
      :coordinates="[37.617644, 55.755819]"
      :zoom="12"
    >
      <YandexMarker
        v-for="(item, index) in [cards]"
        :coordinates="item.coordinates"
        :marker-id="index"
        :key="index"
      >
        <template #component>
          <NewProductCard
            :key="index"
            :studio="item.studio"
            :one="item.one"
            :two="item.two"
            :three="item.three"
            :title="item.title"
            :date="item.date"
            :price="item.price"
            :district="item.district"
            :flats-count="item.flatsCount"
            class="inline-block"
          />
        </template>
      </YandexMarker>
    </YandexMap> 
  </div>
</template> -->
