<script setup lang="ts">
import { ContentBlock } from "../../../../shared/ContentBlock";
import point from "../../../../shared/assets/icons/Map_Pin.svg";
import arrow from "../../../../shared/assets/icons/Trending_Up.svg";
import arrowDown from "../../../../shared/assets/icons/Trending_Down.svg";
</script>
<template lang="html">
  <ContentBlock class="mt-[48px]">
    <h2 class="text-[#333] text-[24px] font-medium mb-[30px]">
      Динамика стоимости жилья
    </h2>
    <div class="flex justify-between flex-col md:flex-row">
      <div
        class="bg-white rounded-[15px] md:w-[49%] py-[23px] px-[26px] mb-[8px]"
      >
        <div class="flex justify-between items-center">
          <div class="flex gap-[4px]">
            <img :src="point" />
            <p class="font-medium lg:text-[14px] 2xl:text-[16px]">
              Ростов-на-Дону
            </p>
          </div>
          <p class="text-[#A8AFBB] lg:text-[14px] 2xl:text-[16px]">за месяц</p>
        </div>
        <div class="mt-[23px]">
          <div class="flex items-center justify-between">
            <p class="text-[#A8AFBB] w-[100px] lg:text-[14px] 2xl:text-[16px]">
              Вторичка
            </p>
            <p class="lg:text-[14px] 2xl:text-[16px]">253 885 ₽/м²</p>
            <div class="flex gap-[14px]">
              <p class="lg:text-[14px] 2xl:text-[16px]">3 885 ₽</p>
              <img :src="arrow" />
            </div>
          </div>
          <div class="flex items-center justify-between mt-[23px]">
            <p class="text-[#A8AFBB] w-[100px] lg:text-[14px] 2xl:text-[16px]">
              Новостройки
            </p>
            <p class="lg:text-[14px] 2xl:text-[16px]">253 885 ₽/м²</p>
            <div class="flex gap-[14px]">
              <p class="lg:text-[14px] 2xl:text-[16px]">3 885 ₽</p>
              <img :src="arrowDown" />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-[15px] md:w-[49%] py-[23px] px-[26px]">
        <div class="flex justify-between items-center">
          <div class="flex gap-[4px]">
            <img :src="point" />
            <p class="font-medium lg:text-[14px] 2xl:text-[16px]">
              Ростов-на-Дону
            </p>
          </div>
        </div>
        <div class="mt-[23px]">
          <div class="flex items-center justify-between">
            <p class="text-[#A8AFBB] w-[100px] lg:text-[14px] 2xl:text-[16px]">
              Вторичка
            </p>
            <p class="lg:text-[14px] 2xl:text-[16px]">253 885 ₽/м²</p>
            <div class="flex gap-[14px]">
              <p class="lg:text-[14px] 2xl:text-[16px]">3 885 ₽</p>
              <img :src="arrow" />
            </div>
          </div>
          <div class="flex items-center justify-between mt-[23px]">
            <p class="text-[#A8AFBB] w-[100px] lg:text-[14px] 2xl:text-[16px]">
              Новостройки
            </p>
            <p class="lg:text-[14px] 2xl:text-[16px]">253 885 ₽/м²</p>
            <div class="flex gap-[14px]">
              <p class="lg:text-[14px] 2xl:text-[16px]">3 885 ₽</p>
              <img :src="arrowDown" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContentBlock>
</template>
<style lang="scss"></style>
