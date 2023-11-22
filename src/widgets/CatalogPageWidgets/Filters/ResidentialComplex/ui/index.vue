<script setup lang="ts">
import { FilterItem } from '../../../../../shared/ui/FilterItem';
import { CheckboxDropdown } from '../../../../../shared/CheckboxDropdown';

interface ResidentialComplexProps {
  jkNames: string[];
}

const props = defineProps<ResidentialComplexProps>();
</script>

<template>
  <FilterItem class="w-full lg:w-auto" title="Жилой комплекс">
    <CheckboxDropdown
      :options="props.jkNames"
      class="bg-[#F3F3F6] rounded-[15px] py-[14px] w-full"
      title="Любой"
      id="id"
    />
  </FilterItem>
</template>
