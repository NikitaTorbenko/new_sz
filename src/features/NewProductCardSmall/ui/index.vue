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

<template>
  <div class="w-full rounded-[15px] bg-white pb-[22px]">
    <div
      class="bg-[url('/img/product_example.jpg')] rounded-[15px] h-[147px] bg-cover w-full"
    ></div>
    <div class="px-[18px] mt-[14px] mb-[17px] gap-[10px]">
      <div class="flex justify-between">
        <p class="text-[18px] w-fit font-bold text-[#333]">
          {{ props.title }}
        </p>

        <p class="text-[16px] whitespace-nowrap font-bold text-[#333]">
          от {{ props.price }} млн ₽
        </p>
      </div>
      <div>
        <p class="text-[#828892] text-[14px] mt-[10px]">
          {{ props.district }}
        </p>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <span class="text-[13px] ml-[18px] text-[#7A818D]">
        В продаже <br />
        <span class="font-bold">{{ props.flatsCount }} квартир</span>
      </span>
      <TextBtn
        type="secondary"
        class="w-[106px] h-[38px] text-[14px] bg-secondaryBtn"
        >Подробнее</TextBtn
      >
    </div>
  </div>
</template>
