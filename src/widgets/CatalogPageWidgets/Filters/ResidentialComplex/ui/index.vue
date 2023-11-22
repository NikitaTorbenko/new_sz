<script setup lang="ts">
import { FilterItem } from '../../../../../shared/ui/FilterItem';
import { CheckboxDropdown } from '../../../../../shared/CheckboxDropdown';

interface ResidentialComplexProps {
  jk: string[];
}

const props = defineProps<ResidentialComplexProps>();
</script>

<template>
  <FilterItem class="w-full lg:w-auto" title="Жилой комплекс">
    <CheckboxDropdown
      :options="props.jk"
      class="bg-[#F3F3F6] rounded-[15px] py-[14px] w-full"
      title="Любой"
      id="id"
    />
  </FilterItem>
</template>

<!-- <script setup lang="ts">
import { ref, watch } from 'vue';
import { FilterItem } from '../../../../../shared/ui/FilterItem';
import { CheckboxDropdown } from '../../../../../shared/CheckboxDropdown';

const dd = ref(0);
const jkNames = ref<string[]>([]);

interface JkObj {
  jk_name: string;
  id: number;
}

interface ResidentialComplexProps {
  jk: JkObj[];
}

const props = defineProps<ResidentialComplexProps>();

jkNames.value = Object.values(props.jk).map(item => item.jk_name);
// setInterval(() => dd.value++, 1000);
watch(dd, () => console.log('props', props.jk));
</script>

<template>
  <FilterItem class="w-full lg:w-auto" title="Жилой комплекс">
    <CheckboxDropdown
      v-if="!props.jk"
      :options="jkNames"
      class="bg-[#F3F3F6] rounded-[15px] py-[14px] w-full"
      title="Любой"
      id="id"
    />
  </FilterItem>
</template> -->
