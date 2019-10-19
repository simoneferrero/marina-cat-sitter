import React from 'react'
import styled from 'styled-components/macro'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const StyledServices = styled.section`
	background-color: ${({ theme: { colors } }) => colors.lightBlue};
	color: ${({ theme: { colors } }) => colors.darkBlue};
	width: 100%;
	padding: 40px;
	display: flex;
	justify-content: center;
	text-align: justify;

	> div {
		max-width: ${({ theme: { maxWidth } }) => maxWidth}px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;

		> p {
			grid-column: 1/4;
		}

		> div {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
	}
`

const Services = () => {
	const {
		gatsby: {
			childImageSharp: { fixed },
		},
	} = useStaticQuery(graphql`
		query IconQuery {
			gatsby: file(absolutePath: { regex: "/gatsby.png/" }) {
				childImageSharp {
					fixed(width: 100) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	const services = [
		{
			img: fixed,
			text: 'Dare da mangiare',
		},
		{
			img: fixed,
			text: 'Pulire la sabbietta',
		},
		{
			img: fixed,
			text: 'Coccole',
		},
		{
			img: fixed,
			text: 'Bagnare le piante',
		},
		{
			img: fixed,
			text: 'Raccolta e consegna chiavi',
		},
		{
			img: fixed,
			text: 'Aggiornamenti quotidiani',
		},
	]

	return (
		<StyledServices id="services">
			<div>
				<p>I miei servizi:</p>
				{services.map(({ img, text }) => (
					<div key={text}>
						<Img fixed={img} />
						<h4>{text}</h4>
					</div>
				))}
			</div>
		</StyledServices>
	)
}

export default Services
