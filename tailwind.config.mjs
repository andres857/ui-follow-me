/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				// 'follow': '#1C3154',660087
				'follow': '#660087',
				'box-shadow': '0 4px 6px 0 rgba(0, 123, 255, 0.9)', /* Ajusta los valores y el color según tus necesidades */

				'Dark-gray-blue-alpha': 'hsl(224, 30%, 27%, 0.5)',
			}
		},
	},
	plugins: [],
}
