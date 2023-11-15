<template>
	<svg
		width="25"
		height="24"
		viewBox="0 0 25 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M10.3555 8L14.3555 12L10.3555 16"
			:stroke="props.color"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{ color: string }>(), {
	color: '#014EBA',
})
</script>
