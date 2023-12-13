/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'follow': '#1C3154',
				'Dark-gray-blue-alpha': 'hsl(224, 30%, 27%, 0.5)',
			}
		},
	},
	plugins: [],
}
