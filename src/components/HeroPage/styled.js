import styled from 'styled-components/macro'

export const StyledHeroPage = styled.section`
	align-items: center;
	background-color: ${({ theme: { colors } }) => colors.darkBlue};
	background-image: url("${({ backgroundSrc }) => backgroundSrc}");
	background-position: center bottom;
	background-repeat: no-repeat;
	background-size: contain;
	color: ${({ theme: { colors } }) => colors.white};
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	padding-top: ${({ theme: { headerHeightMax } }) => headerHeightMax}px;
	text-align: center;
	width: 100%;

	> * {
		max-width: ${({ theme: { maxWidth } }) => maxWidth}px;
	}

	h1 {
		font-size: 4rem;
		font-style: italic;
		font-weight: normal;
		line-height: 5rem;

		span {
			color: ${({ theme: { colors } }) => colors.yellow};
		}
	}

	p {
		font-size: 1.3rem;
		line-height: 4rem;
		margin-top: 1rem;
	}
`
