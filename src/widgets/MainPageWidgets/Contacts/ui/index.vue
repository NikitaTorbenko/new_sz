<script setup lang="ts">
import { PhoneBlock } from "../../../../features/PhoneBlock";
import { ContentBlock } from "../../../../shared/ContentBlock";
import check from "../../../../shared/assets/icons/Interface/Check.svg";
</script>
<template lang="html">
  <ContentBlock
    class="flex flex-col md:flex-row mt-[48px] justify-between px-[20px] gap-[15px]"
  >
    <PhoneBlock />
    <div class="md:w-[65%] bg-white rounded-[15px] py-[31px] px-[26px]">
      <h4 class="text-[#014EBA] font-semibold lg:text-[16px] 2xl:text-[18px]">
        Компания «Союз застройщиков» - лидер в сфере недвижимости в сегменте
        продаж квартир в новостройках России
      </h4>
      <p class="lg:text-[14px] 2xl:text-[16px] ml-3 mt-[12px]">
        Союз Застройщиков – это Федеральный онлайн-сервис, созданный в интересах
        людей, желающих купить жилье, основанный на экспертном мнении
        специалистов в сфере недвижимости. Мы знакомы со всеми рисками в сфере
        недвижимости, обратитесь к нашим специалистам, чтобы ваша сделка прошла
        легко и без затруднений!
      </p>
      <p
        class="lg:text-[16px] 2xl:text-[18px] font-medium text-[#333] mt-[24px] mb-[13px]"
      >
        Наши специалисты абсолютно бесплатно:
      </p>

      <div class="ml-3">
        <div class="flex items-center gap-[14px]">
          <img :src="check" alt="" />
          <p>
            подбирают оптимальный вариант, исходя из всех пожеланий и
            особенностей;
          </p>
        </div>
        <div class="flex items-center gap-[14px]">
          <img :src="check" alt="" />
          <p>сопровождают на стройплощадке;</p>
        </div>
        <div class="flex items-center gap-[14px]">
          <img :src="check" alt="" />
          <p>забронируют у любого застройщика интересующую квартиру;</p>
        </div>
        <div class="flex items-center gap-[14px]">
          <img :src="check" alt="" />
          <p>помогут получить ипотеку в ведущих банках;</p>
        </div>
        <div class="flex items-center gap-[14px]">
          <img :src="check" alt="" />
          <p>готовят и проверяют документы на покупку квартиры</p>
        </div>
      </div>
    </div>
  </ContentBlock>
</template>
<style lang="scss"></style>
