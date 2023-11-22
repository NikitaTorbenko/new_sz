<script setup lang="ts">
import { NewProductCard } from '../../../../features/NewProductCard';
const cards = [
  {
    price: '9.2',
    title: 'ЖК «Рубин»',
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
    studio: { title: 'Студии', area: '27,44', price: '4,3' },
    one: { title: '1-комн.', area: '33,87', price: '5,3' },
    two: { title: '2-комн.', area: '55,55', price: '6,3' },
    three: { title: '3-комн.', area: '74,6', price: '8,3' },
    district: 'Центральный район Ворошиловский пр-кт, 24',
    flatsCount: '247',
    date: '4 кв. 2023 - 4 кв. 2024',
  },
];
</script>

<template>
  <div
    class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] content-start justify-evenly gap-[40px] lg:gap-[28px] lg:flex lg:flex-wrap lg:items-center max-w-[1170px] mx-auto my-0 mt-[42px]"
  >
    <NewProductCard
      v-for="(item, index) in [
        ...cards,
        ...cards,
        ...cards,
        ...cards,
        ...cards,
        ...cards,
      ]"
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
  </div>
</template>
