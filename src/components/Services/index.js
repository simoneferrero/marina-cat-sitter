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
			text: 'Dare da mangiare', // TODO: fix text
		},
		{
			key: 'litter',
			text: 'Pulire la sabbietta',
		},
		{
			key: 'love',
			text: 'Coccole',
		},
		{
			key: 'plants',
			text: 'Bagnare le piante',
		},
		{
			key: 'keys',
			text: 'Raccolta e consegna chiavi',
		},
		{
			key: 'updates',
			text: 'Aggiornamenti quotidiani',
		},
	].map(({ key, text }) => {
		const {
			node: {
				childImageSharp: { fixed }, // TODO: use new images
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
