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
			'bg-gray': '#fafafa',
			blue: '#1fb6ff',
			purple: '#7e5bef',
			pink: '#ff49db',
			orange: '#ff7849',
			black: '#000000',
			blacktwo : '#1d1d1d',
			white: '#ffffff',
			green: '#13ce66',
			midnight: '#121063',
			yellow: '#ffc82c',
			'gray-dark': '#273444',
			gray: '#f9f9f9',
			graylight: '#d3dce6',
			darkGray : '#202A37',
			darkBG : '#111827',
			textgray : '#D1D5DB',
			postColor : '#282F3C',
			navTextDark : '#E5E7EB',
			border :'#202A37'
		},
		fontFamily: {
			lato: ['Lato'],
			mono: ['SF Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New']
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
