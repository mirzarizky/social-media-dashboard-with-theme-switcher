module.exports = {
	theme: {
		fontFamily: {
			serif: [ 'Inter', 'sans-serif' ]
		},
		extend: {
			colors: {
				'lime-green': 'hsl(163, 72%, 41%)',
				'bright-red': 'hsl(356, 69%, 56%)',
				facebook: 'hsl(195, 100%, 50%)',
				twitter: 'hsl(203, 89%, 53%)',
				youtube: 'hsl(348, 97%, 39%)',
				toggle: 'hsl(230, 22%, 74%)',
				// BG
				dark: 'hsl(230, 17%, 14%)',
				white: 'hsl(0, 0%, 100%)',
				// BG PATTERN
				'dark-pattern': 'hsl(232, 19%, 15%)',
				'light-pattern': 'hsl(225, 100%, 98%)',
				// CARD
				'dark-card': 'hsl(228, 28%, 20%)',
				'light-card': 'hsl(227, 47%, 96%)',
				// TEXT
				'dark-grayish-blue': 'hsl(228, 12%, 44%)',
				'dark-desatured-blue': 'hsl(228, 34%, 66%)'
			}
		},
		linearGradientColors: {
			instagram: [ 'hsl(37, 97%, 70%)', 'hsl(329, 70%, 58%)' ],
			'toggle-dark': [ 'hsl(210, 78%, 56%)', 'hsl(146, 68%, 55%)' ]
		},
		linearBorderGradients: {
			colors: {
				instagram: [ 'hsl(37, 97%, 70%)', 'hsl(329, 70%, 58%)' ]
			}
		}
	},
	variants: {
		backgroundColor: [ 'hover', 'dark', 'dark-hover' ],
		borderColor: [ 'dark', 'dark-focus', 'dark-focus-within' ],
		textColor: [ 'dark', 'dark-hover', 'dark-active', 'dark-placeholder' ],
		opacity: [ 'dark' ]
	},
	plugins: [
		require('tailwindcss-gradients'),
		require('tailwindcss-border-gradients')(),
		require('tailwindcss-dark-mode')()
	]
};
