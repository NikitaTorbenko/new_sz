<script setup lang="ts">
import { TextBtn } from "../../../shared/TextButton";
const text = [
  {
    title: "Проконсультируем",
    text: "по рынку недвижимости в регионе",
  },
  {
    title: "Организуем и проведём",
    text: "просмотр квартир",
  },
  {
    title: "Подберём",
    text: "для вас идеальную квартиру",
  },
];
</script>
<template lang="html">
  <div>
    <h3 class="text-[24px] text-[#014EBA] mb-[24px] font-medium">
      Помощь эксперта
    </h3>
    <div
      class="2xl:p-[32px] lg:p-[20px] bg-[#014EBA] rounded-[15px] flex flex-col gap-[16px] py-[20px] px-[20px]"
    >
      <div v-for="(item, index) in text" :key="index">
        <p class="text-[18px] text-white font-semibold">
          {{ item.title }}
        </p>
        <p class="text-white 2xl:text-[16px] lg:text-[14px]">{{ item.text }}</p>
      </div>
      <TextBtn
        :type="'white'"
        class="text-[15px] 2xl:w-[188px] 2xl:h-[48px] lg:w-[170px] lg:h-[40px] mt-[35px] h-[52px]"
        >Оставить заявку</TextBtn
      >
    </div>
  </div>
</template>
<style lang="scss"></style>
