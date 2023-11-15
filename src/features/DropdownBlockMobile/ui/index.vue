<script setup lang="ts">
import { MobileRoomsSelect } from "../../../shared/MobileRoomsSelect";
import { MobilePriceBlock } from "../../../shared/MobilePriceBlock";
import { SearchBlock } from "../../../shared/SearchBlock";
</script>
<template lang="html">
  <div class="flex flex-col gap-[8px]">
    <MobileRoomsSelect />
    <MobilePriceBlock />
    <SearchBlock />
  </div>
</template>
<style lang="scss"></style>
