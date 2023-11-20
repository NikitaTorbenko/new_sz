<script setup lang="ts">
interface InputProps {
  from: String;
  to: String;
}

defineProps<InputProps>();

interface InputFormToEmit {
  (e: 'update:from', value: string): void;
  (e: 'update:to', value: string): void;
}

const emit = defineEmits<InputFormToEmit>();

const updateFrom = (e: any) => {
  emit('update:from', e.target.value);
};

const updateTo = (e: any) => {
  emit('update:to', e.target.value);
};
</script>

<template>
  <div
    class="flex border-[1px] border-[#B5B5B5] rounded-[5px] w-[276px] h-[48px]"
  >
    <div
      class="w-[50%] pl-[24px] py-[10px] pr-[10px] flex items-center border-r-[1px] border-r-[#B5B5B5]"
    >
      <span class="text-[16px] text-[#3B3B3B] leading-[1.5]">от </span>
      <input
        class="h-full w-full px-[5px]"
        type="text"
        :value="from"
        @input="updateFrom"
      />
    </div>
    <div
      class="w-[50%] pl-[24px] py-[10px] pr-[10px] flex items-center border-r-[1px] border-r-[#B5B5B5]"
    >
      <span class="text-[16px] text-[#3B3B3B] leading-[1.5]">до </span>

      <input
        class="h-full w-full px-[5px]"
        type="text"
        :value="to"
        @input="updateTo"
      />
    </div>
  </div>
</template>
