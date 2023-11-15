<template>
	<svg
		width="46"
		height="44"
		viewBox="0 0 46 44"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M9.58325 18.1919C9.58325 27.0869 17.7185 34.4427 21.3194 37.2629C21.8347 37.6665 22.0955 37.8707 22.4799 37.9743C22.7793 38.0549 23.2199 38.0549 23.5193 37.9743C23.9045 37.8705 24.1635 37.6683 24.6807 37.2632C28.2816 34.443 36.4164 27.0877 36.4164 18.1927C36.4164 14.8265 35.003 11.5978 32.4869 9.21749C29.9707 6.83722 26.5584 5.5 23.0001 5.5C19.4418 5.5 16.029 6.83742 13.5129 9.21769C10.9968 11.598 9.58325 14.8257 9.58325 18.1919Z"
			:stroke="props.color"
			stroke-width="3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M19.1666 16.5C19.1666 18.525 20.8828 20.1667 22.9999 20.1667C25.117 20.1667 26.8333 18.525 26.8333 16.5C26.8333 14.475 25.117 12.8333 22.9999 12.8333C20.8828 12.8333 19.1666 14.475 19.1666 16.5Z"
			:stroke="props.color"
			stroke-width="3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{ color?: string }>(), {
	color: '#014EBA',
})
</script>
