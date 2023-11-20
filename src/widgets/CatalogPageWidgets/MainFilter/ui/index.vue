<script setup lang="ts">
import { NumberOfRooms } from '../../Filters/NumberOfRooms';
import { Square } from '../../Filters/Square';
import { Price } from '../../Filters/Price';
import { ResidentialComplex } from '../../Filters/ResidentialComplex';
import { FullAddress } from '../../Filters/FullAddress';
import { Neighborhood } from '../../Filters/Neighborhood';
import { DueDate } from '../../Filters/DueDate';
import { Street } from '../../Filters/Street';
import { FiltersButton } from '../../Filters/FiltersButton';
import { OnMapBtn } from '../../Filters/OnMapBtn';
import { ShowOffers } from '../../Filters/ShowOffers';
import { TextBtn } from '../../../../shared/TextButton';
</script>

<template>
  <div
    class="w-[100vw] md:[61vw] max-w-[1170px] mx-auto my-0 mt-[20px] mb-[40px] p-[20px]"
  >
    <div
      class="flex flex-nowrap sm:flex-wrap flex-col sm:flex-row gap-[16px] lg:gap-[8px] justify-start sm:justify-center lg:justify-between items-center sm:items-end mb-[20px]"
    >
      <NumberOfRooms />
      <Square />
      <Price />
      <FullAddress />
      <TextBtn type="secondary" class="flex lg:hidden w-[280px] h-[52px]"
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
        <span class="ml-[15px] text-[15px]">Фильтры</span></TextBtn
      >
      <ShowOffers />
      <OnMapBtn />
    </div>

    <div class="hidden lg:flex gap-[16px] justify-between items-end mb-[20px]">
      <ResidentialComplex />
      <Neighborhood />
      <DueDate />
      <Street />
      <FiltersButton />
    </div>
  </div>
</template>
