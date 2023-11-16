<script setup lang="ts">
import { FilterItem } from '../../../../../shared/ui/FilterItem';
</script>

<template>
  <FilterItem title="Площадь, м2">
    <div
      class="flex items-center rounded-[15px] bg-[#F3F3F6] p-[19px] pb-[21px] gap-[9px]"
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
  </FilterItem>
</template>
