<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { FlatLinks, AllJk } from '../../../../shared/api/services';
import { NumberOfRooms } from '../../Filters/NumberOfRooms';
import { Square } from '../../Filters/Square';
import { Price } from '../../Filters/Price';
import { ResidentialComplex } from '../../Filters/ResidentialComplex';
import { FullAddress } from '../../Filters/FullAddress';
import { Neighborhood } from '../../Filters/Neighborhood';
import { DueDate } from '../../Filters/DueDate';
import { Street } from '../../Filters/Street';
import { FiltersButton } from '../../Filters/FiltersButton';
import { OnMapBtn } from '../../Filters/OnMapBtn';
import { ShowProductListBtn } from '../../Filters/ShowProductListBtn';
import { ShowOffers } from '../../Filters/ShowOffers';
import { FiltersModal } from '../../FiltersModal';
import { TextBtn } from '../../../../shared/TextButton';

const jkNames = ref<string[]>([]);

onMounted(async () => {
  const { data: allJk } = await AllJk();

  jkNames.value = Object.values(allJk.all_jk).map(item => item.jk_name);
});

interface MainFilterProps {
  isMap: boolean;
}

const props = defineProps<MainFilterProps>();

interface MainFilterEmits {
  (e: 'update:isMap', value: boolean): void;
}

const emits = defineEmits<MainFilterEmits>();

const onMap = () => emits('update:isMap', true);
const fromMap = () => emits('update:isMap', false);

const isOpenModal = ref(false);

const openModalHandler = () => (isOpenModal.value = true);

const city = ref(1); // ================== город (по умолчанию ростов)

const count_room = ref<number[]>([]); // = количество комнат в квартире

const flat_from = ref(''); // ============ комнат в жк
const flat_to = ref('');

const floors_building_from = ref(''); // = этаж //========================= расширенные фильтры
const floors_building_to = ref('');

const square_kitchen_from = ref(''); // = площадь кухни //================= расширенные фильтры
const square_kitchen_to = ref('');

const flat_square_full_to = ref(''); //  общая площадь
const flat_square_full_from = ref('');

const from_cost = ref(''); // ========== цена
const to_cost = ref('');

const zastroi = ref(''); // ============ застройщик //==================== расширенные фильтры

const jk_name = ref(''); // ============ жк название

const district = ref(''); // =========== район

const wall_material = ref(1); // ======= материал стен //================== расширенные фильтры

const count = ref(false); // =========== количество квартир подходящее под данные фильтры
</script>

<template>
  <div
    class="w-[100vw] md:[61vw] max-w-[1170px] mx-auto my-0 mt-[20px] mb-[40px] p-[20px]"
  >
    <div
      class="flex flex-nowrap sm:flex-wrap flex-col sm:flex-row gap-[16px] lg:gap-[8px] justify-start sm:justify-center lg:justify-between items-center sm:items-end mb-[20px]"
    >
      <NumberOfRooms v-model:count_room="count_room" />
      <Square
        v-model:from="flat_square_full_from"
        v-model:to="flat_square_full_to"
      />
      <Price v-model:from="from_cost" v-model:to="to_cost" />
      <ResidentialComplex
        v-model:jkNames="jkNames"
        class="hidden lg:block address-top"
      />
      <FullAddress />

      <FiltersModal v-model:is-open-modal="isOpenModal" />

      <TextBtn
        @click="openModalHandler"
        type="secondary"
        class="flex lg:hidden w-[280px] h-[52px]"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.55556 19.5H23M1 19.5H4.66667M4.66667 19.5V22M4.66667 19.5V17M21.7778 12H23M1 12H16.8889M16.8889 12V14.5M16.8889 12V9.5M14.4444 4.5H23M1 4.5H9.55556M9.55556 4.5V7M9.55556 4.5V2"
            stroke="#014EBA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="ml-[15px] text-[15px]">Фильтры</span></TextBtn
      >
      <ShowOffers />
      <ShowProductListBtn v-if="props.isMap" @click="fromMap" />
      <OnMapBtn v-else @click="onMap" />
    </div>

    <div class="hidden lg:flex gap-[16px] justify-between items-end mb-[20px]">
      <ResidentialComplex
        v-model:jkNames="jkNames"
        class="hidden lg:block address-bottom"
      />
      <Neighborhood />
      <DueDate />
      <Street />
      <FiltersButton :openModalHandler="openModalHandler" />
    </div>
  </div>
</template>

<style scoped>
.address-bottom {
  display: none;
}
@media (max-width: 1086px) {
  .address-top {
    display: none;
  }
  .address-bottom {
    display: block;
  }
}
</style>
