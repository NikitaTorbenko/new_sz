<script setup lang="ts">
import { ContentBlock } from "../../../../shared/ContentBlock";
import { DevelopersBlock } from "../../../../features/DevelopersBlock";
</script>
<template lang="html">
  <ContentBlock class="mt-[48px] px-[20px]">
    <div class="flex justify-between">
      <h2 class="text-[24px] text-[#333]">Застройщики</h2>
      <div class="items-center hidden md:flex">
        <a href="" class="text-[#014EBA] font-semibold text-[15px]"
          >Показать всех застройщиков</a
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <path
            d="M7.5 6.5L10.5 9.5L7.5 12.5"
            stroke="#014EBA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <DevelopersBlock />
    <div class="w-full flex justify-center mt-[26px]">
      <div class="items-center flex mx-auto">
        <a href="" class="text-[#014EBA] font-semibold text-[15px]"
          >Показать всех застройщиков</a
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <path
            d="M7.5 6.5L10.5 9.5L7.5 12.5"
            stroke="#014EBA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </ContentBlock>
</template>
<style lang="scss"></style>
