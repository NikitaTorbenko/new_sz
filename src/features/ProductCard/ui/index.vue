<script setup lang="ts">
import { IconBtn } from "../../../shared/IconBtn";
import like from "../../../shared/assets/icons/like.svg";
import comparison from "../../../shared/assets/icons/comparison.svg";
import { TextBtn } from "../../../shared/TextButton";

interface ProductCardProps {
  price: string | number;
  area: string | number;
  district: string;
  rooms: string | number;
  priceOfArea: string | number;
  floor: string | number;
  agent: string;
  phone: string | number;
  office: string | number;
}

const props = defineProps<ProductCardProps>();
</script>
<template lang="html">
  <div class="lg:w-[32%] 2xl:w-[30%] rounded-[15px] bg-white pb-[22px] w-[100%]">
    <div
      class="relative bg-[url('/img/product_example.jpg')] rounded-[15px] h-[215px] bg-cover"
    >
      <IconBtn
        :icon="like"
        size="md"
        color="#F3F3F6"
        class="absolute top-[2px] right-[10px]"
      />
      <IconBtn
        :icon="comparison"
        size="md"
        color="#F3F3F6"
        class="absolute top-[48px] right-[10px]"
      />
      <div
        class="p-[5px] w-[86px] flex justify-center items-center absolute top-0 left-[16px] bg-white rounded-b-[15px]"
      >
        <p class="text-[14px] text-[#3D7900]">Новинка</p>
      </div>
      <div
        class="p-[5px] absolute top-0 left-[102px] w-[69px] flex justify-center items-center bg-white rounded-b-[15px]"
      >
        <p class="text-[14px] text-[#8A01BA]">Хит</p>
      </div>
    </div>
    <div class="flex justify-between px-[18px] mt-[18px] mb-[24px]">
      <div>
        <p class="2xl:text-[24px] lg:text-[16px] font-bold text-[#333]">
          {{ `от ${props.price} ₽` }}
        </p>
        <p
          class="text-[#828892] w-[180px] 2xl:text-[14px] lg:text-[12px] mt-[12px]"
        >
          {{ props.district }}
        </p>
      </div>
      <div>
        <p class="2xl:text-[18px] lg:text-[14px] text-[#333]">
          {{ `${props.priceOfArea} ₽/м²` }}
        </p>
        <TextBtn
          type="secondary"
          class="2xl:w-[106px] 2xl:h-[34px] lg:w-[80px] lg:h-[28px] lg:text-[12px] bg-secondaryBtn mt-[18px]"
          >Подробнее</TextBtn
        >
      </div>
    </div>
    <div class="w-[92%] h-[1px] bg-[#ECEFF4] mx-auto"></div>
    <div class="flex justify-between items-center mt-[24px] px-[18px]">
      <p class="font-semibold text-[#333]">{{ props.rooms }}</p>
      <p class="font-semibold text-[#333]">{{ `${props.area} м²` }}</p>
      <p class="font-semibold text-[#333]">{{ `${props.floor} эт.` }}</p>
    </div>
    <div class="px-[18px] mt-[20px] flex flex-col gap-[8px]">
      <div class="flex justify-between items-center">
        <p class="text-[14px] text-[#A8AFBB]">Агент</p>
        <p class="text-[14px] text-[#A8AFBB]">
          {{ props.agent }}
        </p>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-[14px] text-[#A8AFBB]">Телефон</p>
        <p class="text-[14px] text-[#A8AFBB]">
          {{ props.phone }}
        </p>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-[14px] text-[#A8AFBB]">Офис</p>
        <p class="text-[14px] text-[#A8AFBB]">
          {{ `от ${props.office} млн ₽` }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
