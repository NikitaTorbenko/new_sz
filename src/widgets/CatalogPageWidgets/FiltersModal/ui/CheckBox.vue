<script setup lang="ts">
interface CheckBoxProps {
  title: string;
  checkboxValue: boolean;
}

const props = defineProps<CheckBoxProps>();

interface CheckBoxEmits {
  (e: 'update:checkboxValue', value: boolean): void;
}

const emits = defineEmits<CheckBoxEmits>();

const updateCheckboxValue = () =>
  emits('update:checkboxValue', !props.checkboxValue);
</script>

<template>
  <div @click="updateCheckboxValue" class="flex gap-[10px] items-center">
    <svg
      v-if="!checkboxValue"
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
    >
      <rect y="0.5" width="20" height="20" rx="5" stroke="#B5B5B5" />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <rect y="0.5" width="20" height="20" rx="5" fill="#014EBA" />
      <path
        d="M8.13636 14.2015L5.03409 10.7537L4 11.903L8.13636 16.5L17 6.64925L15.9659 5.5L8.13636 14.2015Z"
        fill="white"
      />
    </svg>
    <span>{{ props.title }}</span>
  </div>
</template>
