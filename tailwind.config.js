module.exports = {
	darkMode: 'class',
	content: ['./components/**/*.tsx', './pages/**/*.tsx'],
	theme: {
		screens: {
			xsm: '320px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		colors: {
			transparent: 'transparent',
			primary: '#30a692',
			blue: '#1fb6ff',
			purple: '#7e5bef',
			pink: '#ff49db',
			orange: '#ff7849',
			black: '#000000',
			white: '#ffffff',
			green: '#13ce66',
			midnight: '#121063',
			yellow: '#ffc82c',
			'gray-dark': '#273444',
			gray: '#f0f0f0',
			'gray-light': '#d3dce6'
		},
		fontFamily: {
			lato: ['Lato'],
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem'
			},
			borderRadius: {
				'4xl': '2rem'
			}
		}
	},
	plugins: []
};
