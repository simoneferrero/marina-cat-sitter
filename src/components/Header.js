import PropTypes from 'prop-types'
import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components/macro'

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
const StyledLink = styled(Link)`
	text-decoration: ${props => props['data-active'] && 'underline !important'};
`

const Header = ({ theme }) => {
	const { hash } = window.location
	const menuItems = [
		{
			children: 'Chi Sono',
			to: '#about',
		},
		{
			children: 'Servizi',
			to: '#services',
		},
		{
			children: <Icon />,
			to: '/',
		},
		{
			children: 'Pacchetti',
			to: '#packages',
		},
		{
			children: 'Contatti',
			to: '#contacts',
		},
	]

	return (
		<StyledHeader theme={theme}>
			<div>
				{menuItems.map(({ children, to }) => (
					<h2 key={to}>
						<StyledLink data-active={hash === to} to={to}>
							{children}
						</StyledLink>
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
