<script setup lang="ts">
interface FilterItemProps {
  title: string;
}

defineProps<FilterItemProps>();
</script>

<template>
  <div>
    <h5 class="mb-[8px] text-[16px] text-[#454545] leading-[150%]">
      {{ title }}
    </h5>
    <slot />
  </div>
</template>
