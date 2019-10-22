import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { useStaticQuery, graphql } from 'gatsby'

const StyledBreak = styled.section`
	background-image: url("${({ src }) => src}");
	background-attachment: fixed;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 600px;
	width: 100%;
`

const Break = ({ id = 'break-1' }) => {
	const {
		images: { edges },
	} = useStaticQuery(graphql`
		query {
			images: allFile {
				edges {
					node {
						name
						childImageSharp {
							sizes(maxWidth: 1200) {
								src
							}
						}
					}
				}
			}
		}
	`)

	const {
		node: {
			childImageSharp: {
				sizes: { src },
			},
		},
	} = edges.find(({ node: { name } }) => name === id)

	return <StyledBreak src={src} />
}

Break.propTypes = {
	id: PropTypes.string.isRequired,
}

export default Break
