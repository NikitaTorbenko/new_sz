<script setup lang="ts">
import { ProductCard } from "../../../../features/ProductCard";
import { ContentBlock } from "../../../../shared/ContentBlock";

const cards = [
  {
    price: "9 000 000",
    agent: "Виктория Иванченко",
    area: "45.5",
    district: "Центральный район Ворошиловский пр-кт, 24",
    rooms: "1-комн.",
    phone: "+7 (928) 258-58-00",
    office: "7,8",
    priceOfArea: "97 143",
    floor: "11/17",
  },
  {
    price: "9 000 000",
    agent: "Виктория Иванченко",
    area: "45.5",
    district: "Центральный район Ворошиловский пр-кт, 24",
    rooms: "1-комн.",
    phone: "+7 (928) 258-58-00",
    office: "7,8",
    priceOfArea: "97 143",
    floor: "11/17",
  },
  {
    price: "9 000 000",
    agent: "Виктория Иванченко",
    area: "45.5",
    district: "Центральный район Ворошиловский пр-кт, 24",
    rooms: "1-комн.",
    phone: "+7 (928) 258-58-00",
    office: "7,8",
    priceOfArea: "97 143",
    floor: "11/17",
  },
  {
    price: "9 000 000",
    agent: "Виктория Иванченко",
    area: "45.5",
    district: "Центральный район Ворошиловский пр-кт, 24",
    rooms: "1-комн.",
    phone: "+7 (928) 258-58-00",
    office: "7,8",
    priceOfArea: "97 143",
    floor: "11/17",
  },
  {
    price: "9 000 000",
    agent: "Виктория Иванченко",
    area: "45.5",
    district: "Центральный район Ворошиловский пр-кт, 24",
    rooms: "1-комн.",
    phone: "+7 (928) 258-58-00",
    office: "7,8",
    priceOfArea: "97 143",
    floor: "11/17",
  },
  {
    price: "9 000 000",
    agent: "Виктория Иванченко",
    area: "45.5",
    district: "Центральный район Ворошиловский пр-кт, 24",
    rooms: "1-комн.",
    phone: "+7 (928) 258-58-00",
    office: "7,8",
    priceOfArea: "97 143",
    floor: "11/17",
  },
];
</script>
<template lang="html">
  <ContentBlock class="mt-[48px]">
    <div>
      <h2 class="text-[#333] text-[24px] font-medium">Рекомендуемое</h2>
    </div>
    <div class="flex justify-between md:flex-wrap overflow-x-auto gap-[12px]">
      <ProductCard
        v-for="(item, index) in cards"
        :key="index"
        :phone="item.phone"
        :price="item.price"
        :agent="item.agent"
        :area="item.area"
        :district="item.district"
        :rooms="item.rooms"
        :office="item.office"
        :price-of-area="item.priceOfArea"
        :floor="item.floor"
        class="mt-[30px] inline-block"
      />
    </div>
  </ContentBlock>
</template>
<style lang="scss"></style>
