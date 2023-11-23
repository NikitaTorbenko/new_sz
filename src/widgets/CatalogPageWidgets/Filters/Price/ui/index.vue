<script setup lang="ts">
import { FilterItem } from '../../../../../shared/ui/FilterItem';
import { useProductsStore } from '../../../../../shared/store';

const { from_cost, to_cost, setfrom_cost, setto_cost } = useProductsStore();

// interface Props {
//   from: string;
//   to: string;
// }

// defineProps<Props>();

// interface Emit {
//   (e: 'update:from', value: string): void;
//   (e: 'update:to', value: string): void;
// }

// const emit = defineEmits<Emit>();

// const updateFrom = (e: any) => {
//   emit('update:from', e.target.value);
// };

// const updateTo = (e: any) => {
//   emit('update:to', e.target.value);
// };
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
          :value="from_cost"
          @input="setfrom_cost"
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
          :value="to_cost"
          @input="setto_cost"
        />
        <span class="text-[#828892] text-[16px] md:text-[18px]">₽</span>
      </div>
    </div>
  </FilterItem>
</template>
