import React from 'react'
import styled from 'styled-components/macro'
import { graphql, useStaticQuery } from 'gatsby'

const StyledHeroPage = styled.section`
	align-items: center;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url("${({
		backgroundSrc,
	}) => backgroundSrc}");
	background-attachment: fixed;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	color: ${({ theme: { colors } }) => colors.lightBlue};
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	padding-top: ${({ theme: { headerHeight } }) => headerHeight}px;
	text-align: center;
	width: 100%;

	> * {
		max-width: ${({ theme: { maxWidth } }) => maxWidth}px;
	}

	h1 {
		font-size: 6rem;
		line-height: 6rem;
	}

	h2 {
		margin-top: 1rem;
	}
`

const HeroPage = () => {
	const {
		background: {
			childImageSharp: {
				fixed: { src: backgroundSrc },
			},
		},
	} = useStaticQuery(graphql`
		query LayoutQuery {
			background: file(absolutePath: { regex: "/hero-page-background.jpg/" }) {
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
			<h1>Io e il tuo gatto, aMICI per la pelle</h1>
			<h2>
				Pet sitter con anni di esperienza, pronta a prendersi cura dei tuoi cari
				a quattro zampe. Disponibile a Torino e provincia.
			</h2>
		</StyledHeroPage>
	)
}

export default HeroPage
