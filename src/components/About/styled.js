import styled from 'styled-components/macro'

export const StyledAbout = styled.section`
	background-color: ${({ theme: { colors } }) => colors.white};
	color: ${({ theme: { colors } }) => colors.darkBlue};
	width: 100%;
	padding-top: ${({ theme: { headerHeight } }) => headerHeight + 40}px;
	display: flex;
	justify-content: center;
	text-align: justify;

	> div {
		align-items: end;
		display: grid;
		grid-template-columns: auto auto;
		grid-gap: 2rem;
		max-width: ${({ theme: { maxWidth } }) => maxWidth}px;
	}
`
export const StyledContent = styled.div`
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
