import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { StyledHeroPage } from './styled'

const HeroPage = () => {
	const {
		background: {
			childImageSharp: {
				fixed: { src: backgroundSrc },
			},
		},
	} = useStaticQuery(graphql`
		query LayoutQuery {
			background: file(absolutePath: { regex: "/heroPage.png/" }) {
				childImageSharp {
					fixed(width: 1600) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	return (
		<StyledHeroPage backgroundSrc={backgroundSrc} id="home">
			<h1>
				Io e il tuo gatto, a<span>MICI</span> per la pelle
			</h1>
			<p>
				Pet sitter con anni di esperienza, pronta a prendersi cura dei tuoi cari
				a quattro zampe.
				<br />
				Disponibile a Torino e provincia.
			</p>
		</StyledHeroPage>
	)
}

export default HeroPage
