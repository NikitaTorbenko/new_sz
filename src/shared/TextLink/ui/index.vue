<script setup lang="ts">
export interface TextLinkProps {
  text: string;
  link: string;
  number: string | number;
}
const props = defineProps<TextLinkProps>();
</script>
<template>
  <div class="flex justify-between w-full">
    <p class="text-[#333]">{{ props.text }}</p>
    <a :href="props.link" class="text-[#014EBA] underline decoration-1">{{
      props.number
    }}</a>
  </div>
</template>
