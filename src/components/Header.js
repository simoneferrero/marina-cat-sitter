import React, { useContext } from 'react'
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

const StyledHeader = styled.header`
	backdrop-filter: blur(20px);
	background: transparent;
	height: ${({ theme: { headerHeight } }) => headerHeight}px;
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
			color: ${({ theme: { colors } }) => colors.lightGreen};
			flex: 2;
			height: 100%;
			overflow: hidden;
			text-decoration: none;

			h2 {
				font-size: 1.7rem;
				line-height: 3.4rem;
				margin: 0;
				text-transform: uppercase;

				img {
					max-height: ${({ theme: { headerHeight } }) => headerHeight}px;
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

	return (
		<StyledHeader>
			<div>
				{menuItems.map(({ children, id }) => (
					<button
						key={id}
						onClick={() => smoothScroll(id, { offset: headerHeight })}
					>
						<h2>{children}</h2>
					</button>
				))}
			</div>
		</StyledHeader>
	)
}

export default Header
