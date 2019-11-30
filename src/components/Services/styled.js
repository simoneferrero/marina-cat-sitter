import styled from 'styled-components/macro'

export const StyledServices = styled.section`
	background-color: ${({ theme: { colors } }) => colors.darkGreen};
	color: ${({ theme: { colors } }) => colors.white};
	display: flex;
	justify-content: center;
	padding-bottom: 40px;
	padding-left: 16px;
	padding-right: 16px;
	padding-top: ${({ theme: { headerHeight } }) => headerHeight + 40}px;
	text-align: center;
	width: 100%;

	@media ${({ theme: { mediaQueries } }) => mediaQueries.desktop} {
		padding-left: 40px;
		padding-right: 40px;
	}

	> div {
		display: grid;
		grid-gap: 3rem;
		grid-template-columns: 1fr;
		width: ${({ theme: { maxWidth } }) => maxWidth}px;

		@media ${({ theme: { mediaQueries } }) => mediaQueries.laptop} {
			grid-template-columns: repeat(2, 1fr);
		}

		@media ${({ theme: { mediaQueries } }) => mediaQueries.desktop} {
			grid-template-columns: repeat(3, 1fr);
		}

		> h1 {
			font-style: italic;
			font-weight: 400;
			grid-column: 1;
			text-align: left;

			@media ${({ theme: { mediaQueries } }) => mediaQueries.laptop} {
				grid-column: 1/3;
			}

			@media ${({ theme: { mediaQueries } }) => mediaQueries.desktop} {
				grid-column: 1/4;
			}
		}

		> div {
			align-items: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
`
