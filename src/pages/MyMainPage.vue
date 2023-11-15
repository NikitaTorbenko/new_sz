<template>
  <div class="bg-[#F4F6FB]">
    <MainFilter />
    <FlatLink />
    <MapBlock />
    <NewInSZ />
    <Articles />
    <DinamicPrice />
    <NewBuildingsBlock />
    <Recommendations />
    <Developers />
    <FAQ />
    <Contacts />
  </div>
</template>
<script setup lang="ts">
import { MainFilter } from "../widgets/MainPageWidgets/MainFilter";
import { FlatLink } from "../widgets/MainPageWidgets/FlatLinks";
import { MapBlock } from "../widgets/MainPageWidgets/MapBlock";
import { NewInSZ } from "../widgets/MainPageWidgets/NewInSZ";
import { Articles } from "../widgets/MainPageWidgets/Articles";
import { DinamicPrice } from "../widgets/MainPageWidgets/DinamicPrice";
import { NewBuildingsBlock } from "../widgets/MainPageWidgets/NewBuildingsBlock";
import { Recommendations } from "../widgets/MainPageWidgets/Recommendations";
import { Developers } from "../widgets/MainPageWidgets/Developers";
import { FAQ } from "../widgets/MainPageWidgets/FAQ";
import { Contacts } from "../widgets/MainPageWidgets/Contacts";
</script>
