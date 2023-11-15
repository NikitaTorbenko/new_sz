<script setup lang="ts">
import { NewProductCard } from "../../../../features/NewProductCard";
import { ContentBlock } from "../../../../shared/ContentBlock";

const cards = [
  {
    price: "9.2",
    title: "ЖК «Рубин»",
    studio: { title: "Студии", area: "27,44", price: "4,3" },
    one: { title: "1-комн.", area: "33,87", price: "5,3" },
    two: { title: "2-комн.", area: "55,55", price: "6,3" },
    three: { title: "3-комн.", area: "74,6", price: "8,3" },
    district: "Центральный район Ворошиловский пр-кт, 24",
    flatsCount: "247",
    date: "4 кв. 2023 - 4 кв. 2024",
  },
  {
    price: "9.2",
    title: "ЖК «Рубин»",
    studio: { title: "Студии", area: "27,44", price: "4,3" },
    one: { title: "1-комн.", area: "33,87", price: "5,3" },
    two: { title: "2-комн.", area: "55,55", price: "6,3" },
    three: { title: "3-комн.", area: "74,6", price: "8,3" },
    district: "Центральный район Ворошиловский пр-кт, 24",
    flatsCount: "247",
    date: "4 кв. 2023 - 4 кв. 2024",
  },
  {
    price: "9.2",
    title: "ЖК «Рубин»",
    studio: { title: "Студии", area: "27,44", price: "4,3" },
    one: { title: "1-комн.", area: "33,87", price: "5,3" },
    two: { title: "2-комн.", area: "55,55", price: "6,3" },
    three: { title: "3-комн.", area: "74,6", price: "8,3" },
    district: "Центральный район Ворошиловский пр-кт, 24",
    flatsCount: "247",
    date: "4 кв. 2023 - 4 кв. 2024",
  },
];
</script>
<template lang="html">
  <ContentBlock class="mt-[48px]">
    <div>
      <h2 class="text-[#333] text-[24px] font-medium">Новостройки</h2>
    </div>
    <div class="flex justify-between mt-[24px] overflow-x-auto gap-[12px]">
      <NewProductCard
        v-for="(item, index) in cards"
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
  </ContentBlock>
</template>
<style lang="scss"></style>
