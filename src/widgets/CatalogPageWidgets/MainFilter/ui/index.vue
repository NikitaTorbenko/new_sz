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
</script>

<template>
  <div
    class="w-[100vw] md:[61vw] max-w-[1170px] mx-auto my-0 mt-[20px] mb-[40px] p-[20px] lg:p-0"
  >
    <div
      class="flex flex-nowrap sm:flex-wrap flex-col sm:flex-row gap-[16px] lg:gap-[8px] justify-start sm:justify-center lg:justify-between items-center sm:items-end mb-[20px]"
    >
      <NumberOfRooms />
      <Square />
      <Price />
      <FullAddress />
      <ResidentialComplex class="hidden lg:block mx-auto" />
    </div>

    <div class="hidden lg:flex gap-[16px] justify-between items-end mb-[20px]">
      <Neighborhood />
      <DueDate />
      <Street />
      <FiltersButton />
    </div>
  </div>
</template>
