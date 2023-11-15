<script setup lang="ts">
import { ContentBlock } from "../../../../shared/ContentBlock";
import man from "../../../../shared/svg/Man.vue";
import city from "../../../../shared/svg/City.vue";
import house from "../../../../shared/svg/House.vue";
import earth from "../../../../shared/svg/Earth.vue";
import { FAQCard } from "../../../../entities/FAQCard";

const cards = [
  {
    title: "Войти в Личный кабинет",
    text: "Получите самую актуальную информацию о недвижимости",
    svg: man,
  },
  {
    title: "Квартиры в новостройках",
    text: "Купить жильё в строящихся домах и новостройках ",
    svg: city,
  },
  {
    title: "Вторичное жильё",
    text: "Выгодные предложения вторичного рынка",
    svg: house,
  },
  {
    title: "Франшиза компании",
    text: "Зарабатывайте от 500 000 рублей вместе с нами",
    svg: earth,
  },
];
</script>
<template lang="html">
  <ContentBlock class="mt-[42px] px-[20px]">
    <h2 class="text-[#333] text-[24px] font-medium">Популярные запросы</h2>
    <div class="flex flex-col md:flex-row justify-between mt-[24px] gap-[16px]">
      <FAQCard
        v-for="(item, index) in cards"
        :key="index"
        :title="item.title"
        :text="item.text"
      >
        <component :is="item.svg" class="2xl:w-[87px] lg:w-[60px]" />
      </FAQCard>
    </div>
  </ContentBlock>
</template>
<style lang="scss"></style>
