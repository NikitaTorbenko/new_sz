<script setup lang="ts">
import { ContentBlock } from "../../../../shared/ContentBlock";
import article from "../../../../shared/assets/img/article2.jpg";
</script>
<template lang="html">
  <ContentBlock class="mt-[48px] px-[20px]">
    <div class="flex justify-between">
      <h2 class="text-[24px] text-[#333] font-medium">
        Полезные статьи о недвижимости
      </h2>
      <div class="items-center hidden md:flex">
        <a
          class="text-[#014EBA] font-semibold hover:text-[#014EBA/80] cursor-pointer"
          >Читать все</a
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M8 6.5L11 9.5L8 12.5"
            stroke="#014EBA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="flex justify-between items-center mt-[33px]">
      <div
        class="bg-[url('/img/Article.jpg')] w-[100%] 2xl:h-[34vh] lg:h-[41vh h-[364px] bg-cover rounded-[15px] cursor-pointer"
      ></div>

      <div
        class="w-[22%] bg-white rounded-[15px] cursor-pointer hidden md:block"
      >
        <img :src="article" class="w-full rounded-[15px]" />
        <div class="px-[15px] mt-[20px] pb-[15px]">
          <p class="2xl:text-[16px] lg:text-[14px] text-[#333]">
            Топ 3 Предложения для инвестиций в Москве
          </p>
          <p class="mt-[89px]">22 февраля 2022</p>
        </div>
      </div>
      <div
        class="w-[22%] bg-white rounded-[15px] cursor-pointer hidden md:block"
      >
        <img :src="article" class="w-full rounded-[15px]" />
        <div class="px-[15px] mt-[20px] pb-[15px]">
          <p class="2xl:text-[16px] lg:text-[14px] text-[#333]">
            Топ 3 Предложения для инвестиций в Москве
          </p>
          <p class="mt-[89px]">22 февраля 2022</p>
        </div>
      </div>
    </div>
    <div class="items-center md:hidden flex mx-auto w-fit mt-[34px]">
      <a
        class="text-[#014EBA] font-semibold hover:text-[#014EBA/80] cursor-pointer"
        >Читать все</a
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
      >
        <path
          d="M8 6.5L11 9.5L8 12.5"
          stroke="#014EBA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </ContentBlock>
</template>
<style lang="scss"></style>
