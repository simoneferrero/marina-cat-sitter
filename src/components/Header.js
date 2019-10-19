import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Icon from './Icon'

const StyledHeader = styled.header`
	background: transparent;
	margin-bottom: 1.45rem;
	position: fixed;
	top: 0;
	width: 100%;
	backdrop-filter: blur(20px);

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

const Header = ({ theme }) => {
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
		<StyledHeader theme={theme}>
			<div>
				{menuItems.map(({ children, href }) => (
					<h2 key={href}>
						<AnchorLink href={href} offset={theme ? theme.headerHeight : 0}>
							{children}
						</AnchorLink>
					</h2>
				))}
			</div>
		</StyledHeader>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string.isRequired,
	theme: PropTypes.object,
}

export default Header
