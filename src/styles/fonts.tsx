import { Global } from '@emotion/react'

export const Fonts = () => {
	return (
		<Global
			styles={`
      @font-face {
        font-family: 'SoDo Regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/SoDoSans-Regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'SoDo SemiBold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/SoDoSans-SemiBold.ttf') format('truetype');
      }
      `}
		/>
	)
}
