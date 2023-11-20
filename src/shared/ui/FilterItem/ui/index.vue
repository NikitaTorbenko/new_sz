<script setup lang="ts">
interface FilterItemProps {
  title: string;
}

defineProps<FilterItemProps>();
</script>

<template>
  <div>
    <h4 class="hidden md:block text-[14px] text-[#A8AFBB] mb-[5px]">
      {{ title }}
    </h4>
    <slot />
  </div>
</template>
