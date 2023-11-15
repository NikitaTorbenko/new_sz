/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{vue,js}'],
	theme: {
		extend: {
			colors: {
				'blue-main': '#014EBA',
				'gray-light': '#ECEFF4',
				'dark-grey': '#828892',
				'black-main': '#333333',
				'secondary': '#F3F3F6',
				'secondaryBtn': '#F4F6FB'
			},
			fontSize: {
				h1: '32px',
				h2: '28px',
				h3: '24px',
				h4: '18px',
				p: '16px',
				'p-sm': '14px',
			},
		},
	},
	plugins: [],
}
