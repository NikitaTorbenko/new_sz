<template>
  <div
    class="w-[100vw] md:[61vw] max-w-[1170px] mx-auto my-0 mt-[42px] px-[20px]"
  >
    <div class="hidden sm:flex gap-[3px] items-center mt-[24px] mb-[40px]">
      <div class="text-[#828892] text-[14px]">Главная</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 12H9"
          stroke="#A8AFBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="text-[#A8AFBB] text-[14px]">Поиск новостроек</div>
    </div>
    <div class="flex items-end sm:hidden gap-[3px] my-[8px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14 16L10 12L14 8"
          stroke="#A8AFBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="text-[#828892] text-[14px]">Назад</div>
    </div>
    <div class="flex justify-between items-center mt-[8px] sm:mt-[32px]">
      <h1 class="text-blue-main md:text-h1 text-h3 mb-0 font-bold">
        Новостройки в
        <!-- <br class="block sm:hidden" /> -->
        Ростове-на-Дону
      </h1>
      <div class="hidden sm:flex gap-[20px]">
        <div
          class="bg-blue-main cursor-pointer flex justify-center items-center p-[13px] rounded-[13px]"
        >
          <img
            src="../../../../shared/assets/icons/catalog/Editing.svg"
            alt=""
          />
        </div>
        <div
          class="bg-[#F4F6FB] cursor-pointer flex justify-center items-center p-[13px] rounded-[13px]"
        >
          <img src="../../../../shared/assets/icons/catalog/map.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
