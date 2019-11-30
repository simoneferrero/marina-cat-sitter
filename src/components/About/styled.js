import styled from 'styled-components/macro'
import Img from 'gatsby-image'

export const StyledAbout = styled.section`
	background-color: ${({ theme: { colors } }) => colors.white};
	color: ${({ theme: { colors } }) => colors.darkBlue};
	display: flex;
	justify-content: center;
	padding-top: ${({ theme: { headerHeight } }) => headerHeight + 40}px;
	text-align: justify;
	width: 100%;

	> div {
		align-items: end;
		display: grid;
		grid-gap: 2rem;
		grid-template-areas: 'content' 'image';
		grid-template-columns: auto;

		@media ${({ theme: { mediaQueries } }) => mediaQueries.desktop} {
			grid-template-areas: 'image content';
			grid-template-columns: repeat(2, auto);
			max-width: ${({ theme: { maxWidth } }) => maxWidth}px;
		}
	}
`
export const StyledImg = styled(Img)`
	grid-area: image;
`
export const StyledContent = styled.div`
	grid-area: content;
	padding: 0 2rem 3rem 2rem;

	h1,
	h2 {
		font-weight: normal;
		font-style: italic;

		span {
			color: ${({ theme: { colors } }) => colors.pink};
		}
	}

	p {
		margin: 2rem 0;

		a {
			color: ${({ theme: { colors } }) => colors.orange};
			text-decoration: none;

			:hover {
				text-decoration: underline;
			}

			:active {
				color: ${({ theme: { colors } }) => colors.orange};
			}
		}
	}
`
