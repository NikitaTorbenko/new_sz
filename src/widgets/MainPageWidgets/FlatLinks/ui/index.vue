<script setup lang="ts">
import { FlatLinkBlock } from "../../../../features/FlatLinkBlock";
import { ContentBlock } from "../../../../shared/ContentBlock";

const links1 = [
  { link: "test.com", text: "Сданные", number: "123" },
  { link: "test.com", text: "Строящиеся", number: "123" },
  { link: "test.com", text: "С отделкой", number: "123" },
  { link: "test.com", text: "В ипотеку", number: "123" },
  { link: "test.com", text: "В рассрочку", number: "123" },
  { link: "test.com", text: "Без отделки", number: "123" },
];
const links2 = [
  { link: "test.com", text: "Студии", number: "123" },
  { link: "test.com", text: "1-комнатные", number: "123" },
  { link: "test.com", text: "2-комнатные", number: "123" },
  { link: "test.com", text: "3-комнатные", number: "123" },
  { link: "test.com", text: "4-комнатные", number: "123" },
];
</script>
<template lang="html">
  <ContentBlock class="mt-[47px]">
    <div
      class="flex flex-col gap-[15px] md:flex-row md:justify-between md:gap-0"
    >
      <FlatLinkBlock :links="links1" title="Новостройки" />
      <FlatLinkBlock :links="links2" title="Купить квартиру" />
      <FlatLinkBlock :links="links2" title="Снять квартиру" />
    </div>
  </ContentBlock>
</template>
<style lang="scss"></style>
