import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'

export const customTheme = extendTheme({
	fonts: {
		body: `'SoDo Regular'`,
		heading: `'SoDo SemiBold'`,
		b: `'SoDo SemiBold'`,
	},
	colors,
	components: {
		Button: {
			variants: {
				solid: {
					backgroundColor: 'primary',
					color: 'contrast',
					_hover: {
						backgroundColor: 'secondary',
						_disabled: {
							backgroundColor: 'secondary',
							cursor: 'not-allowed',
						},
					},
				},
			},
		},
	},
})
