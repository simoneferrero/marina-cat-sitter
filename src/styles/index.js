import { createGlobalStyle, css } from 'styled-components/macro'

import fontFaces from './fonts'

const resetStyles = css`
	* {
		box-sizing: border-box;
		white-space: pre-line;
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		font-weight: bold;
		margin: 0;
	}

	p,
	img {
		margin: 0;
		padding: 0;
	}

	button {
		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
		font: inherit;
		outline: inherit;
		padding: 0;
	}
`

export default createGlobalStyle`
	${resetStyles}
	${fontFaces}
`
