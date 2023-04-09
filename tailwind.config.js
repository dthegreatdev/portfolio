/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#72e2ae',
			},
			fontFamily: {
				radio: ['Radio Canada'],
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
