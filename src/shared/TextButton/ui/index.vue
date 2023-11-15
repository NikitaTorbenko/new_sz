<template>
  <div
    :class="`font-semibold select-none bg-${
      props.type === 'blue'
        ? 'blue-main'
        : props.type === 'white'
        ? 'white'
        : props.type === 'border'
        ? 'transparent'
        : 'secondaryBtn'
    } rounded-[15px] ${
      props.type === 'blue' ? 'text-white' : 'text-blue-main'
    } hover:shadow-md ${
      props.type === 'blue'
        ? 'hover:bg-blue-main/80'
        : props.type === 'white'
        ? 'hover:bg-white'
        : props.type === 'border'
        ? ''
        : 'hover:bg-secondaryBtn/80'
    } ${
      props.class
    } flex items-center justify-center easy-in duration-300 cursor-pointer gap-[8px]`"
    :style="{
      border:
        props.type === 'border'
          ? isHover
            ? '2px solid rgba(1, 78, 186, 0.8)'
            : '2px solid #014EBA'
          : '',
    }"
    @mouseover="mouseEnter"
    @mouseleave="mouseOut"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

interface TextButtonProps {
  class?: string;
  w?: string;
  h?: string;
  type?: "blue" | "white" | "border" | "secondary";
}

const props = withDefaults(defineProps<TextButtonProps>(), {
  w: "180px",
  h: "52px",
  type: "blue",
});

const isHover = ref(false);

const mouseEnter = () => {
  isHover.value = true;
};

const mouseOut = () => {
  isHover.value = false;
};
</script>
