<script setup lang="ts">
import { useElementHover } from "@vueuse/core";
import { ref } from "vue";

interface IconBtnProps {
  icon: string;
  color: string;
  size: "lg" | "md" | "sm";
}
const btn = ref();
const isHover = useElementHover(btn);
const props = defineProps<IconBtnProps>();
</script>
<template lang="html">
  <div
    ref="btn"
    class="flex justify-center items-center rounded-[15px] cursor-pointer duration-300"
    :style="{
      backgroundColor: isHover ? `${props.color}f0` : props.color,
      width: props.size === 'lg' ? '52px' : '38px',
      height: props.size === 'lg' ? '52px' : '38px',
    }"
  >
    <img :src="props.icon" />
  </div>
</template>
<style lang="scss"></style>
