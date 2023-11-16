<script setup lang="ts">
import { NumberOfRooms } from '../../Filters/NumberOfRooms';
import { Square } from '../../Filters/Square';
import { Price } from '../../Filters/Price';
import { ResidentialComplex } from '../../Filters/ResidentialComplex';
import { Neighborhood } from '../../Filters/Neighborhood';
import { DueDate } from '../../Filters/DueDate';
import { Street } from '../../Filters/Street';
import { FiltersButton } from '../../Filters/FiltersButton';
</script>

<template>
  <div
    class="w-[100vw] md:[61vw] max-w-[1170px] mx-auto my-0 mt-[20px] mb-[40px]"
  >
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
      <FiltersButton />
    </div>
  </div>
</template>
