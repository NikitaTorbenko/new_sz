<template>
  <div class="relative h-[620px] flex justify-center">
    <div
      class="md:bg-[url('/img/video-preview.jpg')] w-full md:h-[421px] sm:h-[350px] bg-cover items-center justify-center hidden md:flex"
    ></div>
    <div
      class="rounded-[15px] px-[20px] md:px-[54px] py-[40px] flex flex-col gap-3 bg-white md:absolute top-[35%] md:w-[61vw] w-[100vw] mx-[auto]"
    >
      <FiltersBlock
        :categories="categories"
        :title="'Выберите себе недвижимость'"
      />
      <DropdownBlock class="hidden md:flex" />
      <DropdownBlockMobile class="md:hidden" />
      <div
        class="flex flex-col-reverse md:flex-row items-center gap-3 self-end w-[100%]"
      >
        <TextBtn type="border" class="md:w-[180px] w-[100%] h-[52px]"
          ><FilledLocationIcon /> На карте</TextBtn
        >
        <TextBtn type="blue" class="md:w-[180px] w-[100%] h-[52px]"
          >Найти</TextBtn
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FiltersBlock } from "../../../../features/FiltersBlock";
import { ICategories } from "../../../../shared/interfaces/variableInterfaces";
import KeyIcon from "../../../../shared/svg/KeyIcon.vue";
import CityIcon from "../../../../shared/svg/CityIcon.vue";
import TreeIcon from "../../../../shared/svg/TreeIcon.vue";
import BedIcon from "../../../../shared/svg/BedIcon.vue";
import HouseIcon from "../../../../shared/svg/HouseIcon.vue";
import LocationIcon from "../../../../shared/svg/LocationIcon.vue";
import BagIcon from "../../../../shared/svg/BagIcon.vue";
import { TextBtn } from "../../../../shared/TextButton";
import FilledLocationIcon from "../../../../shared/svg/FilledLocationIcon.vue";
import { DropdownBlock } from "../../../../features/DropdownBlock";
import { DropdownBlockMobile } from "../../../../features/DropdownBlockMobile";

const categories: ICategories[] = [
  {
    title: "Купить квартиру",
    id: "buy",
    disable: false,
    svg: KeyIcon,
  },
  {
    title: "Найти ЖК",
    id: "search-rc",
    disable: false,
    svg: CityIcon,
  },
  {
    title: "Купить дом или участок",
    id: "buy-house",
    disable: false,
    svg: TreeIcon,
  },
  {
    title: "Снять",
    id: "lease",
    disable: false,
    svg: BedIcon,
  },
  {
    title: "Проекты домов",
    id: "projects",
    disable: false,
    svg: HouseIcon,
  },
  {
    title: "Каталог поселков",
    id: "villages",
    disable: false,
    svg: LocationIcon,
  },
  {
    title: "Помещение для бизнеса",
    id: "buisness",
    disable: false,
    svg: BagIcon,
  },
];
</script>
../../../../features/DropdownBlock/ui/FiltersBlock
