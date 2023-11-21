<script setup lang="ts">
interface Props {
  isMap: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <svg
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.23114 1.41235L0.98114 3.82463V15.886L6.23114 13.4737M6.23114 1.41235L11.4811 3.82463M6.23114 1.41235V13.4737M11.4811 3.82463L16.7311 1.41235V13.4737L11.4811 15.886M11.4811 3.82463V15.886M11.4811 15.886L6.23114 13.4737"
      :stroke="props.isMap ? 'white' : 'blue'"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
