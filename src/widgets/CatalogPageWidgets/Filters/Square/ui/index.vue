<script setup lang="ts">
import { FilterItem } from '../../../../../shared/ui/FilterItem';
import { useProductsStore } from '../../../../../shared/store';

const {
  flat_square_full_to,
  flat_square_full_from,
  setflat_square_full_to,
  setflat_square_full_from,
} = useProductsStore();
// interface SquareProps {
//   from?: string;
//   to?: string;
// }

// defineProps<SquareProps>();

// interface SquareEmit {
//   (e: 'update:from', value: string): void;
//   (e: 'update:to', value: string): void;
// }

// const emit = defineEmits<SquareEmit>();

// const updateFrom = (e: any) => {
//   emit('update:from', e.target.value);
// };

// const updateTo = (e: any) => {
//   emit('update:to', e.target.value);
// };
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
          :value="flat_square_full_from"
          @input="setflat_square_full_from"
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
          :value="flat_square_full_to"
          @input="setflat_square_full_to"
        />
      </div>
    </div>
  </FilterItem>
</template>
