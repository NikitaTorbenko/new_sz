<script setup lang="ts">
import { Map } from "../../../../features/Map";
import { ExpertHelp } from "../../../../features/ExpertHelp";
import { ContentBlock } from "../../../../shared/ContentBlock";
</script>
<template lang="html">
  <ContentBlock class="mt-[48px] px-[20px]">
    <div class="flex flex-col md:flex-row w-full justify-between">
      <div class="lg:w-[66%] 2xl:w-[65%]">
        <Map />
      </div>

      <ExpertHelp class="mt-[15px]"/>
    </div>
  </ContentBlock>
</template>
<style lang="scss"></style>
