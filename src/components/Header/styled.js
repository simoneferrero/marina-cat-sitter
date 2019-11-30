import styled from 'styled-components/macro'

const SMALL_ICON_MOBILE = 40
const LARGE_ICON_MOBILE = 70
const SMALL_ICON = 50
const LARGE_ICON = 88

export const StyledHeader = styled.header`
	background-color: ${({ theme: { colors } }) => colors.darkBlueTransparent};
	color: ${({ theme: { colors } }) => colors.white};
	height: ${({ isSmall, theme: { headerHeight, headerHeightMax } }) =>
		isSmall ? headerHeight : headerHeightMax}px;
	margin-bottom: 1.45rem;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 900;

	> div {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: space-between;
		margin: 0 auto;
		max-width: ${({ theme: { maxWidth } }) => maxWidth}px;
		padding: 0;

		button {
			flex: 2;
			height: 100%;
			overflow: hidden;
			text-decoration: none;

			:hover {
				color: ${({ theme: { colors } }) => colors.pink};

				circle,
				path {
					fill: ${({ theme: { colors } }) => colors.pink};
				}
			}

			h4 {
				align-items: center;
				display: flex;
				font-family: 'Montserrat', sans-serif;
				font-size: 0.7rem;
				font-weight: 700;
				justify-content: center;
				margin: 0;
				text-transform: lowercase;

				@media ${({ theme: { mediaQueries } }) => mediaQueries.desktop} {
					font-size: 1.2rem;
					font-weight: 900;
				}

				svg {
					height: ${({ isSmall }) =>
						isSmall ? SMALL_ICON_MOBILE : LARGE_ICON_MOBILE}px;
					width: auto;

					@media ${({ theme: { mediaQueries } }) => mediaQueries.desktop} {
						height: ${({ isSmall }) => (isSmall ? SMALL_ICON : LARGE_ICON)}px;
					}
				}
			}
		}
	}
`
