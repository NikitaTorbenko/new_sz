<script setup lang="ts">
import { TextLink } from "../../../shared/TextLink";

interface FlatLinkBlockProps {
  title: string;
  links: { text: string; link: string; number: string | number }[];
}
const props = defineProps<FlatLinkBlockProps>();
</script>
<template lang="html">
  <div
    class="bg-white rounded-[15px] lg:w-[32%] 2xl:w-[30%] w-[100vw] py-[31px] px-[21px] md:px-[26px] flex flex-col justify-center"
  >
    <h3 class="text-[18px] font-semibold text-[#333]">{{ props.title }}</h3>
    <div class="flex flex-col gap-[15px] md:gap-[15px] mt-[18px] md:mt-[16px]">
      <TextLink
        v-for="(item, index) in links"
        :key="index"
        :link="item.link"
        :number="item.number"
        :text="item.text"
      />
    </div>
  </div>
</template>
<style lang="scss"></style>
