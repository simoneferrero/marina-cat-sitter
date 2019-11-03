import React, { useContext, useEffect, useState } from 'react'
import styled, { ThemeContext } from 'styled-components/macro'
import smoothScroll from '../helpers/smoothScroll'

import Icon from './Icon'

const menuItems = [
	{
		children: 'Chi Sono',
		id: 'about',
	},
	{
		children: 'Servizi',
		id: 'services',
	},
	{
		children: <Icon />,
		id: 'home',
	},
	{
		children: 'Pacchetti',
		id: 'packages',
	},
	{
		children: 'Contatti',
		id: 'contacts',
	},
]

const SMALL_ICON = 50
const LARGE_ICON = 88

const StyledHeader = styled.header`
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
			}

			h4 {
				align-items: center;
				display: flex;
				font-family: 'Montserrat', sans-serif;
				font-weight: 900;
				justify-content: center;
				margin: 0;
				text-transform: lowercase;

				.gatsby-image-wrapper {
					max-height: ${({ isSmall }) => (isSmall ? SMALL_ICON : LARGE_ICON)}px;
					max-width: ${({ isSmall }) => (isSmall ? SMALL_ICON : LARGE_ICON)}px;
				}

				img {
					max-width: ${({ isSmall }) => (isSmall ? SMALL_ICON : LARGE_ICON)}px;
				}
			}

			:nth-child(${Math.ceil(menuItems.length / 2)}) {
				flex: 1;
			}
		}
	}
`

const Header = () => {
	const { headerHeight } = useContext(ThemeContext)
	const [isSmall, setIsSmall] = useState(false)

	useEffect(() => {
		const handleScroll = () => setIsSmall(window.scrollY > 0)

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	})

	return (
		<StyledHeader isSmall={isSmall}>
			<div>
				{menuItems.map(({ children, id }) => (
					<button
						key={id}
						onClick={() => smoothScroll(id, { offset: headerHeight })}
					>
						<h4>{children}</h4>
					</button>
				))}
			</div>
		</StyledHeader>
	)
}

export default Header
