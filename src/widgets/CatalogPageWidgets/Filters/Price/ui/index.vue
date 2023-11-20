<script setup lang="ts">
import { FilterItem } from '../../../../../shared/ui/FilterItem';
</script>

<template>
  <FilterItem title="Цена">
    <div
      class="hidden lg:flex items-center rounded-[15px] bg-[#F3F3F6] p-[20px] gap-[9px]"
    >
      <div class="">
        <span class="hidden md:inline text-[#828892] text-[14px] md:text-[18px]"
          >от</span
        >
        <input
          class="mx-[5px] outline-none text-[#333] text-[14px] md:text-[18px] font-medium w-[85px] bg-transparent"
          type="text"
          placeholder="1 254 897"
        />
        <span class="text-[#828892] text-[16px] md:text-[18px]">₽</span>
      </div>
      <svg
        class="hidden md:block"
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
        <span class="hidden md:inline text-[#828892] text-[14px] md:text-[18px]"
          >до</span
        >
        <input
          class="mx-[5px] outline-none text-[#333] text-[14px] md:text-[18px] font-medium w-[95px] bg-transparent"
          type="text"
          placeholder="12 254 897"
        />
        <span class="text-[#828892] text-[16px] md:text-[18px]">₽</span>
      </div>
    </div>
    <div
      class="flex lg:hidden items-center w-full min-w-[280px] rounded-[15px] bg-[#F3F3F6] py-[11px] px-[20px]"
    >
      <input
        class="outline-none placeholder:text-[#333] text-[#333] text-[14px] w-[80px] mr-[5px] bg-transparent"
        type="text"
        placeholder="Цена от"
      />
      <span class="text-[16px] text-[#A8AFBB]">₽</span>
      <svg
        class="mx-[20px]"
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
        class="outline-none placeholder:text-[#333] text-[#333] text-[14px] w-[80px] mr-[5px] bg-transparent"
        type="text"
        placeholder="Цена до"
      />
      <span class="text-[16px] text-[#A8AFBB]">₽</span>
    </div>
  </FilterItem>
</template>
