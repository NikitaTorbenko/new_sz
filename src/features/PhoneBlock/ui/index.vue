<script setup lang="ts"></script>
<template lang="html">
  <div
    class="rounded-[15px] bg-blue-main py-[39px] px-[31px] md:w-[32%] flex flex-col justify-between"
  >
    <div>
      <h3 class="text-[24px] font-bold text-white w-[240px]">
        Хотите купить или продать квартиру?
      </h3>
      <p class="text-white 2xl:text-[16px] lg:text-[12px] mt-[19px]">
        Обращайтесь в «Союз застройщиков», мы найдем лучшие предложения для вас!
      </p>
    </div>
    <div class="mt-[53px] flex flex-col items-center">
      <p class="text-white 2xl:text-[16px] lg:text-[12px] mb-[21px]">
        Телефон для консультации
      </p>
      <div class="relative flex items-center justify-center">
        <div
          class="anim2 bg-[#cacccfd7] lg:w-[200px] lg:h-[66px] 2xl:w-[250px] 2xl:h-[86px] absolute rounded-[20px]"
        ></div>
        <div class="px-[22px] py-[9px] bg-[#F7F9FC] rounded-[15px] z-20">
          <p
            class="text-[#014EBA] lg:text-[12px] 2xl:text-[16px] font-semibold"
          >
            +7 (863) 322-02-55
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.anim2 {
  animation: anim1 1.5s infinite;
}
@keyframes anim1 {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
