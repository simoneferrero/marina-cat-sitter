import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components/macro'
import { useStaticQuery, graphql } from 'gatsby'

import FormContext from '../../context/FormContext'
import smoothScroll from '../../helpers/smoothScroll'
import { packages } from '../../constants/index'
import { StyledImg, StyledPackage, StyledPackages } from './styled'

const Packages = () => {
	const favouritePackage = '1 ora'
	const [active, setActive] = useState(favouritePackage)
	const {
		allFile: { edges },
	} = useStaticQuery(graphql`
		query {
			allFile(filter: { name: { regex: "/packages-/" } }) {
				edges {
					node {
						name
						childImageSharp {
							fixed(height: 100) {
								...GatsbyImageSharpFixed
							}
						}
					}
				}
			}
		}
	`)

	const mappedPackages = packages.map(({ id, title, text, favourite }) => {
		const {
			node: {
				childImageSharp: { fixed },
			},
		} = edges.find(({ node: { name } }) => name === `packages-${id}`)

		return (
			<StyledPackage
				active={active === id}
				key={id}
				onMouseEnter={() => setActive(id)}
				onMouseLeave={() => setActive(favouritePackage)}
			>
				<StyledImg fixed={fixed} />
				<h3>{title}</h3>
				<p>{text}</p>
				<button onClick={() => handleClick(id)}>Seleziona</button>
				{favourite && <div className="favourite">il più richiesto</div>}
			</StyledPackage>
		)
	})

	const { dispatch } = useContext(FormContext)
	const { headerHeight } = useContext(ThemeContext)
	const handleClick = selectedPackage => {
		dispatch({ type: 'SET_SELECTED_PACKAGE', payload: { selectedPackage } })
		smoothScroll('contacts', { offset: headerHeight })
	}

	return (
		<StyledPackages id="packages">
			<div>
				<h1>I pacchetti:</h1>
				<div>{mappedPackages}</div>
			</div>
		</StyledPackages>
	)
}

export default Packages
