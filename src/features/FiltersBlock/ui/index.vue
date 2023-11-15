<template>
  <h1 class="text-blue-main md:text-h1 text-h3 mb-0">{{ props.title }}</h1>
  <div class="flex gap-[16px] overflow-x-scroll w-full pb-3 scrollMy">
    <CategoryBtn
      v-for="(item, index) in props.categories"
      :key="index"
      :title="item.title"
      :id="item.id"
      v-model:active-id="activeId"
    >
      <component
        :is="item.svg"
        :color="item.id === activeId ? '#FFFFFF' : '#014EBA'"
        class="scale-75 md:scale-100"
      />
    </CategoryBtn>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import { CategoryBtn } from "../../../entities/CategoryBtn";
import { ICategories } from "../../../shared/interfaces";

interface FiltersBlockProps {
  title: string;
  categories: ICategories[];
}
const props = defineProps<FiltersBlockProps>();

const activeId = ref("buy");
</script>
../../../../../entities/CategoryBtn

<style scoped>
.scrollMy {
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */
}
.scrollMy::-webkit-scrollbar {
  display: none;
}
</style>
