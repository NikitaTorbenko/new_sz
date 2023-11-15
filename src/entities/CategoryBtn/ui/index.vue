<template>
  <div :class="`inline-block`" @click="setActiveId">
    <div
      :class="` md:w-[162px] w-[126px] h-[90px] md:h-[115px] ${
        props.activeId === props.id ? 'bg-blue-main' : 'bg-secondary'
      } rounded-2xl p-[12px] ${
        props.activeId === props.id ? '' : 'hover:bg-blue-main/20'
      } duration-300 cursor-pointer hover:shadow-md`"
    >
      <div class="w-full flex flex-col h-[50%]">
        <div class="self-end">
          <slot />
        </div>
      </div>
      <div class="h-[50%] flex">
        <p
          :class="`select-none ${
            props.activeId == props.id ? 'text-white' : 'text-blue-main'
          } w-fit max-w-[110px] font-medium text-[13px] md:text-[16px] self-end leading-3 md:leading-5`"
        >
          {{ props.title }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface CategoryBtnProps {
  id: string;
  title: string;
  activeId: string;
}
const props = defineProps<CategoryBtnProps>();

const emit = defineEmits<{
  (e: "update:activeId", value: string): void;
}>();

const setActiveId = () => {
  emit("update:activeId", props.id);
};
</script>
