<script setup lang="ts">
import { FilterItem } from '../../../../../shared/ui/FilterItem';
import { CheckboxDropdown } from '../../../../../shared/CheckboxDropdown';

interface ResidentialComplexProps {
  jk?: string[];
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
import { ref, watch, computed } from 'vue';
import { FilterItem } from '../../../../../shared/ui/FilterItem';
import { CheckboxDropdown } from '../../../../../shared/CheckboxDropdown';
import { AllJk } from '../../../../../shared/api/services';

interface JkObj {
  jk_name: string;
  id: number;
}

interface ResidentialComplexProps {
  jk: JkObj[];
}

const flag = ref(false);

const jk = ref<JkObj[]>([]);

watch(flag, async () => {
  if (flag) {
    // @ts-ignore
    const { data } = await AllJk();

    jk.value = data.all_jk;

    console.log(jk.value);
  }
});

const jkNames = ref<string[]>([]);

Object.values(jk).forEach(el => console.log('el', el));

// jkNames.value = Object.values(jk).map(item => item.jk_name);

const handler = () => (flag.value = true);
</script>

<template>
  <FilterItem class="w-full lg:w-auto" title="Жилой комплекс">
    <CheckboxDropdown
      @click="handler"
      :options="jkNames"
      class="bg-[#F3F3F6] rounded-[15px] py-[14px] w-full"
      title="Любой"
      id="id"
    />
  </FilterItem>
</template> -->
