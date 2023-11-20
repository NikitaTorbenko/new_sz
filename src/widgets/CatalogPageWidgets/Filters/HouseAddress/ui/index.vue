<script setup lang="ts"></script>

<template>
  <div class="flex items-center rounded-[15px] bg-[#F3F3F6] p-[20px] gap-[9px]">
    <div class="">
      <span class="text-[#828892] text-[18px]">от</span>
      <input
        class="mx-[5px] outline-none text-[#333] text-[18px] font-medium w-[90%] bg-transparent"
        type="text"
        placeholder="Город, район, улица, дом, ЖК"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M13.5 13.5L9.00001 9.00001M9.00001 9.00001L4.5 4.5M9.00001 9.00001L13.5 4.5M9.00001 9.00001L4.5 13.5"
          stroke="#A8AFBB"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>
