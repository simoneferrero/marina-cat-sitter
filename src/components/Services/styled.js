import styled from 'styled-components/macro'

export const StyledServices = styled.section`
	background-color: ${({ theme: { colors } }) => colors.darkGreen};
	color: ${({ theme: { colors } }) => colors.white};
	width: 100%;
	padding: 40px;
	padding-top: ${({ theme: { headerHeight } }) => headerHeight + 40}px;
	display: flex;
	justify-content: center;
	text-align: justify;

	> div {
		width: ${({ theme: { maxWidth } }) => maxWidth}px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 3rem;

		> h1 {
			font-style: italic;
			font-weight: 400;
			grid-column: 1/4;
		}

		> div {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
	}
`
