import React from 'react'
import styled from 'styled-components/macro'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const StyledAbout = styled.section`
	background-color: ${({ theme: { colors } }) => colors.orange};
	color: ${({ theme: { colors } }) => colors.yellow};
	width: 100%;
	padding: 40px;
	display: flex;
	justify-content: center;
	text-align: justify;

	> div {
		max-width: ${({ theme: { maxWidth } }) => maxWidth}px;

		p {
			margin-bottom: 1rem;
		}
	}
`

const StyledImg = styled(Img)`
	float: left;
	margin: 0 1rem 1rem 0;
`

const About = () => {
	const {
		avatar: {
			childImageSharp: { fixed },
		},
	} = useStaticQuery(graphql`
		query AvatarQuery {
			avatar: file(absolutePath: { regex: "/avatar.png/" }) {
				childImageSharp {
					fixed(width: 400) {
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
				<h3>Ciao, mi chiamo Marina e adoro gli animali. </h3>
				<p>
					Ho 3 gatti meravigliosi a casa a farmi compagnia, e nella mia vita mi
					sono presa cura (e lo faccio tuttora!) di cani, gatti, pesci,
					tartarughe, cavalli, un marito e due figli (meno pelosi, ma molto più
					impegnativi!)
				</p>
				<p>
					Faccio parte del collettivo &quot;Le Sfigatte&quot;, e ogni giorno
					facciamo tutto il possibile affinchè nessun animale soffra: salviamo
					trovatelli e cuccioli dalla strada, ci assicuriamo che vengano curati
					adeguatamente e adottati in fretta.
				</p>
				<p>
					Posso assicurare un servizio di prima classe per i tuoi animali,
					grazie agli studi in veterinaria e alla conoscenza accumulata in anni
					di pratica. Offro diversi tipi di servizi, che si tratti di una visita
					singola, oppure di periodi più lunghi, ma la mia priorità rimane la
					stessa: dare al tuo animale lo stesso affetto che do ai miei.
				</p>
				<h3>Non vedo l&apos;ora di conoscere i tuoi amici a quattro zampe!</h3>
			</div>
		</StyledAbout>
	)
}

export default About
