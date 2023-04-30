/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				schibsted: ['Schibsted Grotesk', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
