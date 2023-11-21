<script setup lang="ts">
import { FilterItem } from '../../../../../shared/ui/FilterItem';
import { CheckboxDropdown } from '../../../../../shared/CheckboxDropdown';
</script>

<template>
  <FilterItem class="w-full" title="Срок сдачи">
    <CheckboxDropdown
      class="bg-[#F3F3F6] rounded-[15px] py-[14px] w-full"
      title="Любой"
      id="id"
    />
  </FilterItem>
</template>
