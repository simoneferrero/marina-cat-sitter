import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Icon = () => {
	const data = useStaticQuery(graphql`
		query {
			file(absolutePath: { regex: "//icon.png/" }) {
				childImageSharp {
					fixed(height: 88) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	return <Img fixed={data.file.childImageSharp.fixed} />
}

export default Icon
