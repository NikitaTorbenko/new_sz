<template>
	<div class="relative w-28" ref="target">
		<div
			@click="handleClick"
			class="py-2 px-5 flex justify-between gap-4 cursor-pointer"
		>
			<p class="select-none">
				{{ props.value || props.options[0] }}
			</p>
			<Arrow
				:color="'#828892'"
				:class="`${isOpen ? 'rotate-[-90deg]' : 'rotate-[90deg]'}`"
			/>
		</div>

		<Transition name="dropdown">
			<div v-if="isOpen" class="p-2 bg-secondary absolute w-full rounded-md">
				<div class="flex flex-col gap-1">
					<div
						:class="`w-full px-2 cursor-pointer `"
						v-for="(item, index) in props.options"
						:key="index"
						@click="selectValue(item)"
					>
						<p class="hover:text-blue-main/80 duration-300 select-none">
							{{ item }}
						</p>
					</div>
				</div>
			</div>
		</Transition>
	</div>
</template>
<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { defineEmits, ref } from 'vue'
import Arrow from '../svg/Arrow.vue'
import { SelectDropdownProps } from './interfaces'

const props = defineProps<SelectDropdownProps>()

const emit = defineEmits<{
	(e: 'update:value', value: string): void
}>()

const isOpen = ref(false)
const target = ref<HTMLInputElement | null>(null)

const handleClick = () => {
	isOpen.value = !isOpen.value
}

onClickOutside(target, () => {
	if (isOpen.value) {
		isOpen.value = false
		console.log('test1')
	}
})

const selectValue = (option: string) => {
	emit('update:value', option)
	isOpen.value = false
}
</script>

<style scoped>
.dropdown-move, /* apply transition to moving elements */
.dropdown-enter-active,
.dropdown-leave-active {
	transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}
</style>
