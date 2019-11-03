import React from 'react'
import styled from 'styled-components/macro'
import { graphql, useStaticQuery } from 'gatsby'

const StyledHeroPage = styled.section`
	align-items: center;
	background-color: ${({ theme: { colors } }) => colors.darkBlue};
	background-image: url("${({ backgroundSrc }) => backgroundSrc}");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	color: ${({ theme: { colors } }) => colors.white};
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	padding-top: ${({ theme: { headerHeightMax } }) => headerHeightMax}px;
	text-align: center;
	width: 100%;

	> * {
		max-width: ${({ theme: { maxWidth } }) => maxWidth}px;
	}

	h3 {
		font-size: 2.6rem;
		line-height: 5.2rem;

		span {
			color: ${({ theme: { colors } }) => colors.yellow};
		}
	}

	p {
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.8rem;
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
			<h3>Io e il tuo gatto, aMICI per la pelle</h3>
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
