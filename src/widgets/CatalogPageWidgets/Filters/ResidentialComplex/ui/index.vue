<script setup lang="ts">
import { ref } from 'vue';
import { FilterItem } from '../../../../../shared/ui/FilterItem';
import { CheckboxDropdown } from '../../../../../shared/CheckboxDropdown';

interface JkObj {
  jk_name: string;
  id: number;
}

interface ResidentialComplexProps {
  jkObj: JkObj[];
}

const props = defineProps<ResidentialComplexProps>();

const jkNames = ref<string[]>([]);

jkNames.value = Object.values(props.jkObj).map(item => item.jk_name);
console.log('jkNames', jkNames);

console.log('yfduyg', props.jkObj[0].jk_name);
</script>

<template>
  <FilterItem class="w-full lg:w-auto" title="Жилой комплекс">
    <CheckboxDropdown
      :options="jkNames"
      class="bg-[#F3F3F6] rounded-[15px] py-[14px] w-full"
      title="Любой"
      id="id"
    />
  </FilterItem>
</template>
