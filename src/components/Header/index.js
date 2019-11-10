import React, { useEffect, useState } from 'react'

import smoothScroll from '../../helpers/smoothScroll'
import { StyledHeader } from './styled'
import SiteIcon from '../../images/site-icon.svg'

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
		children: <SiteIcon />,
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

const Header = () => {
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
					<button key={id} onClick={() => smoothScroll(id)}>
						<h4>{children}</h4>
					</button>
				))}
			</div>
		</StyledHeader>
	)
}

export default Header
