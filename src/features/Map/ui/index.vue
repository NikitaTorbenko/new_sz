<script setup lang="ts">
import { IconBtn } from "../../../shared/IconBtn";
import search from "../../../shared/assets/icons/search.svg";
</script>
<template lang="html">
  <h3 class="text-[24px] text-[#333] mb-[24px] font-medium">
    Ищите новостройки рядом на карте
  </h3>
  <div
    class="w-full h-[353px] bg-[url('/img/Map.jpg')] flex justify-center items-center rounded-[15px] bg-cover md:h-[84%]"
  >
    <IconBtn color="#014EBA" :icon="search" size="lg" />
  </div>
</template>
