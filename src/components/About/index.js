import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { StyledAbout, StyledContent, StyledImg } from './styled'

const About = () => {
	const {
		avatar: {
			childImageSharp: { fixed },
		},
	} = useStaticQuery(graphql`
		query AvatarQuery {
			avatar: file(absolutePath: { regex: "/avatar.png/" }) {
				childImageSharp {
					fixed(width: 370) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	return (
		<StyledAbout id="about">
			<div>
				<StyledImg fixed={fixed} />
				<StyledContent>
					<h1>
						Ciao, mi chiamo <span>Marina</span> e adoro gli animali.
					</h1>
					<p>
						Ho 3 gatti meravigliosi a casa a farmi compagnia, e nella mia vita
						mi sono presa cura (e lo faccio tuttora!) di cani, gatti, pesci,
						tartarughe, cavalli, un marito e due figli (meno pelosi, ma molto
						più impegnativi!)
					</p>
					<p>
						Faccio parte dell&apos;associazione{' '}
						<a
							href="http://www.lesfigatte.org/"
							rel="noopener noreferrer"
							target="_blank"
						>
							Le Sfigatte
						</a>
						, e ogni giorno facciamo tutto il possibile affinchè nessun animale
						soffra: salviamo trovatelli e cuccioli dalla strada, ci assicuriamo
						che vengano curati adeguatamente e adottati in fretta.
					</p>
					<p>
						Posso assicurare un servizio di prima classe per i tuoi animali,
						grazie agli studi in veterinaria e alla conoscenza accumulata in
						anni di pratica. Offro diversi tipi di servizi, che si tratti di una
						visita singola, oppure di periodi più lunghi, ma la mia priorità
						rimane la stessa: dare al tuo animale lo stesso affetto che do ai
						miei.
					</p>
					<h2>
						Non vedo l&apos;ora di conoscere i tuoi amici a quattro zampe!
					</h2>
				</StyledContent>
			</div>
		</StyledAbout>
	)
}

export default About
