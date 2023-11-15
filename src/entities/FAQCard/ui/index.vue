<template>
  <div
    class="md:w-[23%] w-full h-[226px] bg-white duration-300 cursor-pointer hover:shadow-md rounded-[15px] px-[15px] flex flex-col 2xl:pt-[32px] lg:pt-[15px] pt-[32px]"
  >
    <slot />

    <div class="self-end mt-[16px]">
      <p
        class="select-none text-[#333] w-fit font-medium 2xl:text-[18px] lg:text-[16px] mb-[12px]"
      >
        {{ props.title }}
      </p>
      <p class="select-none lg:text-[14px] 2xl:text-[16px] text-[#828892]">
        {{ props.text }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
interface CategoryBtnProps {
  title: string;
  text: string;
}
const props = defineProps<CategoryBtnProps>();
</script>
