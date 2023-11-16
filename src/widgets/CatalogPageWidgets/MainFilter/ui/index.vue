<script setup lang="ts">
import { CheckboxDropdown } from '../../../../shared/CheckboxDropdown';
import { TextBtn } from '../../../../shared/TextButton';
import { NumberOfRooms } from '../../Filters/NumberOfRooms';
import { Square } from '../../Filters/Square';
import { Price } from '../../Filters/Price';
import { ResidentialComplex } from '../../Filters/ResidentialComplex';
import { Neighborhood } from '../../Filters/Neighborhood';
import { DueDate } from '../../Filters/DueDate';
import { Street } from '../../Filters/Street';
</script>

<template>
  <div class="w-[100vw] md:[61vw] max-w-[1170px] mx-auto my-0 mt-[20px]">
    <div class="flex gap-[16px] justify-between items-end mb-[20px]">
      <NumberOfRooms />
      <Square />
      <Price />
      <ResidentialComplex />
    </div>

    <div class="flex gap-[16px] justify-between items-end mb-[20px]">
      <Neighborhood />
      <DueDate />
      <Street />

      <!-- Button -->
      <TextBtn type="secondary" class="md:w-[250px] w-[180px] h-[63px]"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.55556 19.5H23M1 19.5H4.66667M4.66667 19.5V22M4.66667 19.5V17M21.7778 12H23M1 12H16.8889M16.8889 12V14.5M16.8889 12V9.5M14.4444 4.5H23M1 4.5H9.55556M9.55556 4.5V7M9.55556 4.5V2"
            stroke="#014EBA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="ml-[15px]">Фильтры</span></TextBtn
      >

      <!-- Clear filter -->
      <div class="flex items-center">
        <span class="text-[#333] text-[14px] mr-[3px]">Отчистить фильтр</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M14.9999 14.9999L10 10M10 10L5 5M10 10L15 5M10 10L5 15"
            stroke="#014EBA"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
