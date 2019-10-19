import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/macro'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Icon from './Icon'

const StyledHeader = styled.header`
	backdrop-filter: blur(20px);
	background: transparent;
	margin-bottom: 1.45rem;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 900;

	> div {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: ${({ theme: { maxWidth } }) => maxWidth}px;
		padding: 0;

		> h2 {
			line-height: 0;
			margin: 0;
			text-transform: uppercase;

			a {
				color: ${({ theme: { colors } }) => colors.lightGreen};
				text-decoration: none;

				img {
					max-height: ${({ theme: { headerHeight } }) => headerHeight}px;
				}
			}
		}
	}
`

const Header = () => {
	const theme = useContext(ThemeContext)
	const menuItems = [
		{
			children: 'Chi Sono',
			href: '#about',
		},
		{
			children: 'Servizi',
			href: '#services',
		},
		{
			children: <Icon />,
			href: '#home',
		},
		{
			children: 'Pacchetti',
			href: '#packages',
		},
		{
			children: 'Contatti',
			href: '#contacts',
		},
	]

	return (
		<StyledHeader>
			<div>
				{menuItems.map(({ children, href }) => (
					<h2 key={href}>
						<AnchorLink href={href} offset={theme.headerHeight}>
							{children}
						</AnchorLink>
					</h2>
				))}
			</div>
		</StyledHeader>
	)
}

export default Header
