<script setup lang="ts">
import { FilterItem } from '../../../../../shared/ui/FilterItem';

interface NumberOfRoomsProps {
  count_room?: number[];
}

const props = defineProps<NumberOfRoomsProps>();

interface NumberOfRoomsEmits {
  (e: 'update:count_room'): void;
}

const emits = defineEmits<NumberOfRoomsEmits>();

// const toggleStudio = (arr) => emits('update:count_room', )
// @ts-ignore
const addStudio = () => emits('update:count_room', props.count_room.push(0));
</script>

<template>
  <FilterItem title="Количество комнат">
    <div
      class="hidden lg:flex items-center rounded-[15px] bg-[#F3F3F6] p-[17px] lg:px-[20px] lg:py-[9px] gap-[15px]"
    >
      <div @click="addStudio" class="text-[14px] lg:text-[18px] text-[#333]">
        Студия
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="47"
        viewBox="0 0 2 47"
        fill="none"
      >
        <path
          d="M1 1L1 46"
          stroke="#828892"
          stroke-opacity="0.19"
          stroke-linecap="round"
        />
      </svg>
      <div class="text-[14px] lg:text-[18px] text-[#333]">1к</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="47"
        viewBox="0 0 2 47"
        fill="none"
      >
        <path
          d="M1 1L1 46"
          stroke="#828892"
          stroke-opacity="0.19"
          stroke-linecap="round"
        />
      </svg>
      <div class="text-[14px] lg:text-[18px] text-[#333]">2к</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="47"
        viewBox="0 0 2 47"
        fill="none"
      >
        <path
          d="M1 1L1 46"
          stroke="#828892"
          stroke-opacity="0.19"
          stroke-linecap="round"
        />
      </svg>
      <div class="text-[14px] lg:text-[18px] text-[#333]">3к</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="47"
        viewBox="0 0 2 47"
        fill="none"
      >
        <path
          d="M1 1L1 46"
          stroke="#828892"
          stroke-opacity="0.19"
          stroke-linecap="round"
        />
      </svg>
      <div class="text-[14px] lg:text-[18px] text-[#333]">4к+</div>
    </div>
    <div
      class="flex lg:hidden items-center w-full min-w-[280px] rounded-[15px] bg-[#F3F3F6] p-[17px] gap-[15px]"
    >
      <div class="text-[14px] text-[#333]">Студия</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="18"
        viewBox="0 0 2 18"
        fill="none"
      >
        <path d="M1 1L1 17" stroke="#A8AFBB" stroke-linecap="round" />
      </svg>
      <div class="text-[14px] text-[#333]">1к</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="18"
        viewBox="0 0 2 18"
        fill="none"
      >
        <path d="M1 1L1 17" stroke="#A8AFBB" stroke-linecap="round" />
      </svg>
      <div class="text-[14px] text-[#333]">2к</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="18"
        viewBox="0 0 2 18"
        fill="none"
      >
        <path d="M1 1L1 17" stroke="#A8AFBB" stroke-linecap="round" />
      </svg>
      <div class="text-[14px] text-[#333]">3к</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="18"
        viewBox="0 0 2 18"
        fill="none"
      >
        <path d="M1 1L1 17" stroke="#A8AFBB" stroke-linecap="round" />
      </svg>
      <div class="text-[14px] text-[#333]">4к+</div>
    </div>
  </FilterItem>
</template>
