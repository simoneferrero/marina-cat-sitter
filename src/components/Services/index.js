import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { StyledServices } from './styled'

const Services = () => {
	const {
		allFile: { edges },
	} = useStaticQuery(graphql`
		query {
			allFile(filter: { name: { regex: "/services-/" } }) {
				edges {
					node {
						name
						childImageSharp {
							fixed(height: 200) {
								...GatsbyImageSharpFixed
							}
						}
					}
				}
			}
		}
	`)

	const services = [
		{
			key: 'food',
			text: 'Dare da mangiare',
		},
		{
			key: 'litter',
			text: 'Pulire la sabbietta',
		},
		{
			key: 'love',
			text: 'Coccolare a volontà',
		},
		{
			key: 'plants',
			text: 'Bagnare le piante',
		},
		{
			key: 'keys',
			text: 'Ritirare e consegnare le chiavi',
		},
		{
			key: 'updates',
			text: 'Aggiornare quotidianamente',
		},
	].map(({ key, text }) => {
		const {
			node: {
				childImageSharp: { fixed },
			},
		} = edges.find(({ node: { name } }) => name === `services-${key}`)

		return {
			fixed,
			text,
		}
	})

	return (
		<StyledServices id="services">
			<div>
				<h1>I miei servizi:</h1>
				{services.map(({ fixed, text }) => (
					<div key={text}>
						<Img fixed={fixed} />
						<h3>{text}</h3>
					</div>
				))}
			</div>
		</StyledServices>
	)
}

export default Services
