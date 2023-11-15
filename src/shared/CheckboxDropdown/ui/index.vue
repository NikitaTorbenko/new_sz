<script setup lang="ts">
import { defineEmits, ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';
import Arrow from '../../svg/Arrow.vue';

interface DropdownProps {
  title: string;
  options?: string[];
  value?: string[];
  id: string;
}

const props = defineProps<DropdownProps>();

const emit = defineEmits<{
  (e: 'update:value', value: string[]): void;
}>();

const isOpen = ref(false);
const target = ref<HTMLInputElement | null>(null);
const selectedValues = ref([]);

const handleClick = () => {
  isOpen.value = !isOpen.value;
};

onClickOutside(target, () => {
  if (isOpen.value) {
    isOpen.value = false;
  }
});

const selectValue = (options: string[]) => {
  emit('update:value', options);
};

watch(selectedValues, () => {
  selectValue(selectedValues.value);
});
</script>
<template>
  <div class="w-fit relative" ref="target">
    <div
      @click="handleClick"
      class="py-2 px-5 flex justify-between cursor-pointer items-center"
    >
      <p class="select-none text-[16px] text-[#333]">
        {{
          selectedValues.length > 0
            ? `Выбрано ${selectedValues?.length}`
            : props.title
        }}
      </p>
      <Arrow
        :color="'#828892'"
        :class="`${isOpen ? 'rotate-[-90deg]' : 'rotate-[90deg]'}`"
      />
    </div>
    <Transition name="dropdown">
      <div v-if="isOpen" class="absolute w-full min-w-[150px] top-[100%]">
        <div
          class="p-3 bg-secondary w-full flex flex-col gap-2 mt-4 rounded-md"
        >
          <div
            v-for="(item, index) in props.options"
            :key="index"
            class="flex items-center gap-[8px] hover:text-blue-main/80 w-full"
          >
            <input
              type="checkbox"
              :id="`check-${props.id}-${index}`"
              v-model="selectedValues"
              :value="item"
            />
            <label
              :for="`check-${props.id}-${index}`"
              class="cursor-pointer select-none text-sm whitespace-nowrap"
            >
              {{ item }}
            </label>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown-move, /* apply transition to moving elements */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
