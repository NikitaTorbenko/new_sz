<script setup lang="ts">
import { CheckboxDropdown } from '../shared/CheckboxDropdown';
import { TextBtn } from '../shared/TextButton';

// import { ref } from 'vue';

// const value = ref<string>('');

// console.log(value.value);

// const test = (e: Event) => {
//   if (e.target) {
//     if (
//       // @ts-ignore
//       e.target.value.match(/\D/g)
//       // && +e.target.value.length < 4
//     ) {
//       // @ts-ignore
//       value.value = e.target.value;
//     }
//   }
// };
</script>

<template>
  <div class="flex gap-[3px] items-center mt-[24px] mb-[40px]">
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
  <div class="flex justify-between items-center mt-[32px]">
    <h1 class="text-blue-main md:text-h1 text-h3 mb-0 font-bold">
      Новостройки в Ростове-на-Дону
    </h1>
    <div class="flex gap-[20px]">
      <div
        class="bg-blue-main cursor-pointer flex justify-center items-center p-[13px] rounded-[13px]"
      >
        <img src="../shared/assets/icons/catalog/Editing.svg" alt="" />
      </div>
      <div
        class="bg-[#F4F6FB] cursor-pointer flex justify-center items-center p-[13px] rounded-[13px]"
      >
        <img src="../shared/assets/icons/catalog/map.svg" alt="" />
      </div>
    </div>
  </div>

  <!-- Фильтры -->
  <div class="mt-[20px]">
    <div class="flex gap-[16px] justify-between items-end mb-[20px]">
      <!-- Filter Item -->
      <div class="">
        <h4 class="text-[14px] text-[#A8AFBB] mb-[5px]">
          <!-- через пропсы -->Количество комнат
        </h4>
        <!-- изменяемый компонент -->
        <div
          class="flex items-center rounded-[15px] bg-[#F3F3F6] px-[20px] py-[9px] gap-[15px]"
        >
          <div class="text-[18px] text-[#333]">Студия</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="47"
            viewBox="0 0 2 47"
            fill="none"
          >
            <path
              d="M1 1L1 46"
              stroke="#828892"
              stroke-opacity="0.19"
              stroke-linecap="round"
            />
          </svg>
          <div class="text-[18px] text-[#333]">1к</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="47"
            viewBox="0 0 2 47"
            fill="none"
          >
            <path
              d="M1 1L1 46"
              stroke="#828892"
              stroke-opacity="0.19"
              stroke-linecap="round"
            />
          </svg>
          <div class="text-[18px] text-[#333]">2к</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="47"
            viewBox="0 0 2 47"
            fill="none"
          >
            <path
              d="M1 1L1 46"
              stroke="#828892"
              stroke-opacity="0.19"
              stroke-linecap="round"
            />
          </svg>
          <div class="text-[18px] text-[#333]">3к</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="47"
            viewBox="0 0 2 47"
            fill="none"
          >
            <path
              d="M1 1L1 46"
              stroke="#828892"
              stroke-opacity="0.19"
              stroke-linecap="round"
            />
          </svg>
          <div class="text-[18px] text-[#333]">4к+</div>
        </div>
      </div>
      <!-- Filter Item -->

      <div class="">
        <h4 class="text-[14px] text-[#A8AFBB] mb-[5px]">
          <!-- через пропсы -->Площадь, м2
        </h4>
        <div
          class="flex items-center rounded-[15px] bg-[#F3F3F6] p-[19px] pb-[21px] gap-[9px]"
        >
          <div class="">
            <span class="text-[#828892] text-[18px]">от</span>
            <input
              class="ml-[5px] outline-none text-[#333] text-[18px] font-medium w-[50px] bg-transparent"
              type="text"
              placeholder="120,5"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 12H9"
              stroke="#828892"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="">
            <span class="text-[#828892] text-[18px]">до</span>
            <input
              class="ml-[5px] outline-none text-[#333] text-[18px] font-medium w-[50px] bg-transparent"
              type="text"
              placeholder="170,5"
            />
          </div>
        </div>
      </div>

      <!-- Filter Item -->

      <div class="">
        <h4 class="text-[14px] text-[#A8AFBB] mb-[5px]">
          <!-- через пропсы -->Цена
        </h4>
        <div
          class="flex items-center rounded-[15px] bg-[#F3F3F6] p-[20px] gap-[9px]"
        >
          <div class="">
            <span class="text-[#828892] text-[18px]">от</span>
            <input
              class="mx-[5px] outline-none text-[#333] text-[18px] font-medium w-[85px] bg-transparent"
              type="text"
              placeholder="1 254 897"
            />
            <span class="text-[#828892] text-[18px]">₽</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 12H9"
              stroke="#828892"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="">
            <span class="text-[#828892] text-[18px]">до</span>
            <input
              class="mx-[5px] outline-none text-[#333] text-[18px] font-medium w-[95px] bg-transparent"
              type="text"
              placeholder="12 254 897"
            />
            <span class="text-[#828892] text-[18px]">₽</span>
          </div>
        </div>
      </div>
      <div class="">
        <h4 class="text-[14px] text-[#A8AFBB] mb-[5px]">
          <!-- через пропсы -->Жилой комплекс
        </h4>
        <CheckboxDropdown
          class="bg-[#F3F3F6] rounded-[15px] py-[14px] w-[230px]"
          title="Любой"
          id="id"
        />
      </div>
    </div>
    <div class="flex gap-[16px] justify-between items-end mb-[20px]">
      <div class="">
        <h4 class="text-[14px] text-[#A8AFBB] mb-[5px]">
          <!-- через пропсы -->Район
        </h4>
        <CheckboxDropdown
          class="bg-[#F3F3F6] rounded-[15px] py-[14px] w-[230px]"
          title="Любой"
          id="id"
        />
      </div>
      <div class="">
        <h4 class="text-[14px] text-[#A8AFBB] mb-[5px]">
          <!-- через пропсы -->Срок сдачи
        </h4>
        <CheckboxDropdown
          class="bg-[#F3F3F6] rounded-[15px] py-[14px] w-[230px]"
          title="Любой"
          id="id"
        />
      </div>
      <div class="">
        <h4 class="text-[14px] text-[#A8AFBB] mb-[5px]">
          <!-- через пропсы -->Улица
        </h4>
        <CheckboxDropdown
          class="bg-[#F3F3F6] rounded-[15px] py-[14px] w-[230px]"
          title="Любой"
          id="id"
        />
      </div>
      <!-- Button -->

      <TextBtn type="secondary" class="md:w-[250px] w-[180px] h-[63px]"
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
        <span class="ml-[15px]">Фильтры</span></TextBtn
      >

      <div class="flex items-center">
        <span class="text-[#333] text-[14px] mr-[3px]">Отчистить фильтр</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M14.9999 14.9999L10 10M10 10L5 5M10 10L15 5M10 10L5 15"
            stroke="#014EBA"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
