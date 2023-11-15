<template>
  <div class="flex rounded-[15px] bg-[#F3F3F6] h-[63px] items-center">
    <CheckboxDropdown
      title="Квартира в новостройке"
      :options="typeOfFlatOptions"
      id="typeOfFlat"
      v-model:value="typeOfFlat"
      class="w-[35%] min-w-[35%]"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="45"
      viewBox="0 0 2 45"
      fill="none"
    >
      <path d="M1 0V45" stroke="#828892" stroke-opacity="0.19" />
    </svg>
    <CheckboxDropdown
      title="Комнат"
      :options="sizeOfFlatOptions"
      id="sizeOfFlat"
      v-model:value="sizeOfFlat"
      class="w-[20%] max-w-[125px] min-w-[15%]"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="45"
      viewBox="0 0 2 45"
      fill="none"
    >
      <path d="M1 0V45" stroke="#828892" stroke-opacity="0.19" />
    </svg>
    <PriceDropdown v-model:start="startPrice" v-model:end="endPrice" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="45"
      viewBox="0 0 2 45"
      fill="none"
    >
      <path d="M1 0V45" stroke="#828892" stroke-opacity="0.19" />
    </svg>
    <input
      placeholder="Город, район, улица, дом, ЖК"
      class="bg-transparent ml-2 w-[27%]"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { CheckboxDropdown } from "../../../shared/CheckboxDropdown";
import { PriceDropdown } from "../../../shared/PriceDropdown";

const typeOfFlat = ref([]);
const typeOfFlatOptions = ["Квартира в новостройке"];

watch(typeOfFlat, () => {
  console.log("test", typeOfFlat.value);
});

const sizeOfFlat = ref([]);
const sizeOfFlatOptions = [
  "Студия",
  "1-комнатная",
  "2-комнатная",
  "3-комнатная",
  "4+ комнат",
];

const startPrice = ref("0");
const endPrice = ref("0");
</script>
