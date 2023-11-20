<script setup lang="ts">
import { FilterItem } from '../../../../../shared/ui/FilterItem';
</script>

<template>
  <FilterItem title="Площадь, м2">
    <div
      class="hidden lg:flex items-center rounded-[15px] bg-[#F3F3F6] p-[19px] pb-[21px] gap-[9px]"
    >
      <div class="">
        <span class="text-[#828892] text-[18px]">от</span>
        <input
          class="ml-[5px] outline-none text-[#333] text-[18px] font-medium w-[50px] bg-transparent"
          type="text"
          placeholder="120,5"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 12H9"
          stroke="#828892"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="">
        <span class="text-[#828892] text-[18px]">до</span>
        <input
          class="ml-[5px] outline-none text-[#333] text-[18px] font-medium w-[50px] bg-transparent"
          type="text"
          placeholder="170,5"
        />
      </div>
    </div>
    <div
      class="flex lg:hidden items-center gap-[20px] w-full min-w-[280px] rounded-[15px] bg-[#F3F3F6] py-[11px] px-[20px]"
    >
      <input
        class="mr-[11px] outline-none placeholder:text-[#333] text-[#333] text-[14px] w-[85px] bg-transparent"
        type="text"
        placeholder="Площадь от"
      />
      <!-- <div class="flex items-center gap-[20px]"> -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="30"
        viewBox="0 0 2 30"
        fill="none"
      >
        <path
          d="M1 0.555664L1 29.5557"
          stroke="#828892"
          stroke-opacity="0.19"
        />
      </svg>
      <input
        class="outline-none placeholder:text-[#333] text-[#333] text-[14px] w-[85px] bg-transparent"
        type="text"
        placeholder="Площадь до"
      />
      <!-- </div> -->
    </div>
  </FilterItem>
</template>
