/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'galaxy-express':'#3F54A3',
			}
		},
		fontFamily:{
			'sans-serif':['Barlow','Heebo','sans-serif']
		},
	},
	plugins: [require("daisyui")],
}
