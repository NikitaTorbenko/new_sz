<script setup lang="ts"></script>
<template lang="html">
  <div
    class="flex items-center rounded-[15px] bg-[#F3F3F6] px-[20px] py-[17px] justify-around"
  >
    <div class="flex w-[45%] items-center">
      <input
        type="number"
        placeholder="Цена от"
        class="w-[90%] bg-transparent"
      />
      <p class="text-[#A8AFBB]">₽</p>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="29"
      viewBox="0 0 2 29"
      fill="none"
    >
      <path
        d="M1 0.00012207L1 29.0001"
        stroke="#828892"
        stroke-opacity="0.19"
      />
    </svg>
    <div class="flex w-[45%]">
      <input
        type="number"
        placeholder="Цена до"
        class="w-[90%] bg-transparent"
      />
      <p class="text-[#A8AFBB]">₽</p>
    </div>
  </div>
</template>
<style lang="scss"></style>
