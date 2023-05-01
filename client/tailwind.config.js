/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				schibsted: ['Schibsted Grotesk', 'sans-serif'],
			},
			colors: {
				primary: '#1abc9c',
				'secondary-blue': '#3498db',
				'secondary-green': '#2ecc71',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
