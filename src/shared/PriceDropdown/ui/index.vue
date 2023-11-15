<script setup lang="ts">
import { defineEmits, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import Arrow from "../../svg/Arrow.vue";

interface DropdownProps {
  start: string;
  end: string;
}

const props = defineProps<DropdownProps>();

const emit = defineEmits<{
  (e: "update:start", value: string): void;
  (e: "update:end", value: string): void;
}>();

const isOpen = ref(false);
const target = ref<HTMLInputElement | null>(null);

const handleClick = () => {
  isOpen.value = !isOpen.value;
};

onClickOutside(target, () => {
  if (isOpen.value) {
    isOpen.value = false;
  }
});

const updateStart = (e: any) => {
  emit("update:start", e.target.value);
};

const updateEnd = (e: any) => {
  emit("update:end", e.target.value);
};
</script>
<template>
  <div class="w-fit relative" ref="target">
    <div
      @click="handleClick"
      class="py-2 px-5 flex justify-between cursor-pointer items-center"
    >
      <p class="select-none text-[16px] text-[#333]">Цена</p>
      <Arrow
        :color="'#828892'"
        :class="`${isOpen ? 'rotate-[-90deg]' : 'rotate-[90deg]'}`"
      />
    </div>
    <Transition name="dropdown">
      <div v-if="isOpen" class="absolute w-fit rounded-md top-[100%]">
        <div
          class="p-2 bg-secondary w-fit flex rounded-md flex-col gap-2 justify-center items-center mt-4"
        >
          <div class="relative flex w-fit">
            <span
              class="text-[#A8AFBB] text-[14px] absolute top-[25%] left-[15px]"
              >от</span
            >
            <input
              :value="props.start"
              @input="updateStart"
              class="h-[46px] block rounded-lg px-9 w-[166px]"
            />
            <span class="absolute top-[25%] right-[15px]">₽</span>
          </div>
          <div class="relative flex w-fit">
            <span
              class="text-[#A8AFBB] text-[14px] absolute top-[25%] left-[15px]"
              >до</span
            >
            <input
              :value="props.end"
              @input="updateEnd"
              class="h-[46px] block rounded-lg px-9 w-[166px]"
            />
            <span class="absolute top-[25%] right-[15px]">₽</span>
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
