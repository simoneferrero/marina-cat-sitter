import React from 'react'
import styled from 'styled-components/macro'
import { useStaticQuery, graphql } from 'gatsby'

const StyledBreak = styled.section`
	background-image: url("${({ backgroundSrc }) => backgroundSrc}");
	background-attachment: fixed;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 800px;
	width: 100%;
`

const Break = () => {
	const {
		breakBackground: {
			childImageSharp: {
				fixed: { src: backgroundSrc },
			},
		},
	} = useStaticQuery(graphql`
		query Break1Query {
			breakBackground: file(absolutePath: { regex: "/break-1.jpg/" }) {
				childImageSharp {
					fixed(width: 1200) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	return <StyledBreak backgroundSrc={backgroundSrc} />
}

export default Break
