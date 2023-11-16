<script setup lang="ts">
import { FilterItem } from '../../../../../shared/ui/FilterItem';
import { CheckboxDropdown } from '../../../../../shared/CheckboxDropdown';
</script>

<template>
  <FilterItem title="Район">
    <CheckboxDropdown
      class="bg-[#F3F3F6] rounded-[15px] py-[14px] w-[230px]"
      title="Любой"
      id="id"
    />
  </FilterItem>
</template>
