<script setup lang="ts">
// import { ref } from 'vue';
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YandexMapMarker,
} from 'vue-yandex-maps';

const map = null;

// const sup = ref('');
</script>

<template>
  <div class="w-[40%] rounded-[15px] overflow-hidden sticky top-0 h-[100vh]">
    <yandex-map
      v-model="map"
      :settings="{
        location: {
          center: [37.617644, 55.755819],
          zoom: 9,
        },
      }"
      width="100%"
      height="100%"
    >
      <yandex-map-default-scheme-layer />
      <YandexMapMarker :coordinates="[37.617644, 55.755819]" :marker-id="123">
        <template #component>
          <div class="text-[20px]">hahahaha</div>
        </template>
      </YandexMapMarker>
    </yandex-map>
  </div>
</template>
