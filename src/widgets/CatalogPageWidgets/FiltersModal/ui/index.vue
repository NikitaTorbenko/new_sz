<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import FilterItem from './FilterItem.vue';
import CheckBox from './CheckBox.vue';
import InputFromTo from './InputFromTo.vue';
import { CheckboxDropdown } from '../../../../shared/CheckboxDropdown';

interface FiltersModalProps {
  isOpenModal: boolean;
}

defineProps<FiltersModalProps>();

interface FiltersBtnEmits {
  (e: 'update:isOpenModal', value: boolean): void;
}

const emit = defineEmits<FiltersBtnEmits>();

const closeModal = () => {
  emit('update:isOpenModal', false);
};

// onMounted(() => {
//   const body = document.querySelector('body');
//   if (body) body.style.overflow = 'auto';
// });

// onUnmounted(() => {
//   const body = document.querySelector('body');

//   if (body) body.style.overflow = 'auto';
// });

const kitchenSquareFrom = ref('');
const kitchenSquareTo = ref('');

const priceFrom = ref('');
const priceTo = ref('');

const floorsInTheHouseFrom = ref('');
const floorsInTheHouseTo = ref('');

const notTheFirst = ref(false);
const notTheLast = ref(false);

const whithPhoto = ref(false);

const discountedPrice = ref(false);

const novelty = ref(false);

const modal = ref(null);

onClickOutside(modal, () => closeModal());
</script>

<template>
  <!-- Фон -->
  <div
    v-if="isOpenModal"
    class="bg-[#00000021] z-50 fixed p-[40px] top-0 left-0 w-full h-full flex justify-center items-center"
  >
    <!-- Сама модалка -->
    <div
      class="selector p-[40px] overflow-y-auto rounded-[5px] bg-[#fff] flex flex-col justify-between gap-[23px] max-w-[644px] w-full max-h-[796px] h-full"
      ref="modal"
    >
      <div class="flex justify-between items-start">
        <h2 class="text-[32px] text-blue-main font-bold">Фильтры</h2>
        <div
          @click="closeModal"
          class="flex items-center text-[16px] text-blue-main font-medium"
        >
          Закрыть
          <svg
            class="ml-[9px]"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M13.0001 1.26158L11.7319 0L6.70413 5.00158L1.67638 0L0.408203 1.26158L5.43595 6.26316L0.408203 11.2647L1.67638 12.5263L6.70413 7.52474L11.7319 12.5263L13.0001 11.2647L7.97231 6.26316L13.0001 1.26158Z"
              fill="#014EBA"
            />
          </svg>
        </div>
      </div>
      <div>
        <h4 class="mb-[12px] text-[18px] text-blue-main font-medium">
          Квартира
        </h4>
        <div class="flex flex-wrap gap-[12px]">
          <FilterItem title="Площадь кухни, м2">
            <InputFromTo
              v-model:from="kitchenSquareFrom"
              v-model:to="kitchenSquareTo"
            />
          </FilterItem>
          <div>
            <FilterItem title="Этаж">
              <InputFromTo v-model:from="priceFrom" v-model:to="priceTo" />
            </FilterItem>
            <div class="flex gap-[16px] mt-[12px]">
              <CheckBox title="Не первый" v-model:checkboxValue="notTheFirst" />
              <CheckBox
                title="Не последний"
                v-model:checkboxValue="notTheLast"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 class="mb-[12px] text-[18px] text-blue-main font-medium">Дом</h4>
        <FilterItem title="Этажей в доме">
          <InputFromTo
            v-model:from="floorsInTheHouseFrom"
            v-model:to="floorsInTheHouseTo"
          />
        </FilterItem>
      </div>
      <div class="flex gap-[12px] flex-wrap">
        <FilterItem title="Материал стен">
          <CheckboxDropdown
            title="Выбрать"
            class="bg-transparent rounded-[4px] border-[1px] border-[#D9D9D9] min-w-[276px] min-h-[48px] py-1 pt-2"
            id="id"
          />
        </FilterItem>
        <FilterItem title="Застройщик">
          <CheckboxDropdown
            title="Выбрать"
            class="bg-transparent rounded-[4px] border-[1px] border-[#D9D9D9] min-w-[276px] min-h-[48px] py-1 pt-2"
            id="id"
          />
        </FilterItem>
      </div>
      <div>
        <h4 class="mb-[12px] text-[18px] text-blue-main font-medium">Медиа</h4>
        <CheckBox title="С фото" v-model:checkboxValue="whithPhoto" />
      </div>
      <div>
        <h4 class="mb-[12px] text-[18px] text-blue-main font-medium">
          Интересные предложения
        </h4>
        <div class="flex gap-[16px] mt-[12px]">
          <CheckBox
            title="Цена со скидкой"
            v-model:checkboxValue="discountedPrice"
          />
          <CheckBox title="Новинка" v-model:checkboxValue="novelty" />
        </div>
      </div>
      <div
        class="flex justify-center items-center w-[260px] min-h-[48px] rounded-[15px] bg-blue-main text-[15px] text-[#fff] font-bold"
      >
        Показать 6123 предложений
      </div>
    </div>
  </div>
</template>

<style scoped>
.selector::-webkit-scrollbar {
  display: none;
}
</style>
