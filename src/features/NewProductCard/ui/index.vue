<script setup lang="ts">
import { IconBtn } from '../../../shared/IconBtn';
import like from '../../../shared/assets/icons/like.svg';
import { TextBtn } from '../../../shared/TextButton';

interface ProductCardProps {
  price: string | number;
  title: string;
  district: string;
  date: string | number;
  three:
    | { title: string; area: string | number; price: string | number }
    | undefined;
  two:
    | { title: string; area: string | number; price: string | number }
    | undefined;
  studio:
    | { title: string; area: string | number; price: string | number }
    | undefined;
  one:
    | { title: string; area: string | number; price: string | number }
    | undefined;
  flatsCount: string | number;
}

const props = defineProps<ProductCardProps>();
</script>
<template lang="html">
  <div class="w-full max-w-[367px] rounded-[15px] bg-white pb-[22px]">
    <div
      class="relative bg-[url('/img/product_example.jpg')] rounded-[15px] h-[215px] bg-cover w-full"
    >
      <IconBtn
        :icon="like"
        size="md"
        color="#F3F3F6"
        class="absolute top-[2px] right-[10px]"
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
    <div
      class="flex justify-between px-[18px] mt-[18px] mb-[18px] items-center gap-[20px]"
    >
      <div>
        <p class="2xl:text-[21px] lg:text-[18px] w-fit font-bold text-[#333]">
          {{ props.title }}
        </p>
        <p
          class="text-[#828892] 2xl:w-[180px] lg:w-[150px] 2xl:text-[14px] lg:text-[10px] mt-[12px]"
        >
          {{ props.district }}
        </p>
      </div>
      <div>
        <p
          class="2xl:text-[18px] lg:text-[13px] whitespace-nowrap font-bold text-[#333]"
        >
          {{ `от ${props.price} млн ₽` }}
        </p>
        <TextBtn
          type="secondary"
          class="2xl:w-[106px] 2xl:h-[34px] lg:w-[80px] lg:h-[28px] lg:text-[12px] bg-secondaryBtn mt-[18px]"
          >Подробнее</TextBtn
        >
      </div>
    </div>
    <p class="2xl:text-[14px] lg:text-[12px] ml-[18px] text-[#7A818D]">
      {{ `В продаже ${props.flatsCount} квартир` }}
    </p>
    <div class="flex justify-between items-center mt-[24px] px-[18px]">
      <p class="text-[14px] text-[#014EBA]">
        {{ props.studio?.title }}
      </p>
      <p class="text-[14px] text-[#A8AFBB]">
        {{ `от ${props.studio?.area} м²` }}
      </p>
      <p class="text-[14px] text-[#333]">
        {{ `от ${props.studio?.price} млн ₽` }}
      </p>
    </div>
    <div class="flex justify-between items-center mt-[10px] px-[18px]">
      <p class="text-[14px] text-[#014EBA]">
        {{ props.one?.title }}
      </p>
      <p class="text-[14px] text-[#A8AFBB]">
        {{ `от ${props.one?.area} м²` }}
      </p>
      <p class="text-[14px] text-[#333]">
        {{ `от ${props.one?.price} млн ₽` }}
      </p>
    </div>
    <div class="flex justify-between items-center mt-[10px] px-[18px]">
      <p class="text-[14px] text-[#014EBA]">
        {{ props.two?.title }}
      </p>
      <p class="text-[14px] text-[#A8AFBB]">
        {{ `от ${props.two?.area} м²` }}
      </p>
      <p class="text-[14px] text-[#333]">
        {{ `от ${props.two?.price} млн ₽` }}
      </p>
    </div>
    <div class="flex justify-between items-center mt-[10px] px-[18px]">
      <p class="text-[14px] text-[#014EBA]">
        {{ props.three?.title }}
      </p>
      <p class="text-[14px] text-[#A8AFBB]">
        {{ `от ${props.three?.area} м²` }}
      </p>
      <p class="text-[14px] text-[#333]">
        {{ `от ${props.three?.price} млн ₽` }}
      </p>
    </div>
    <div class="w-[92%] h-[1px] bg-[#ECEFF4] mx-auto my-[18px]" />
    <div class="flex justify-between px-[18px]">
      <p class="2xl:text-[14px] text-[#333] lg:text-[12px]">Срок сдачи</p>
      <p class="2xl:text-[14px] text-[#333} lg:text-[12px] font-semibold">
        {{ props.date }}
      </p>
    </div>
  </div>
</template>
<style lang="scss"></style>
