import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { useStaticQuery, graphql } from 'gatsby'

const StyledFooter = styled.footer`
	background-color: ${({ theme: { colors } }) => colors.darkBlue};
	color: ${({ theme: { colors } }) => colors.white};
	padding: 40px;
	text-align: center;
	width: 100%;

	a {
		color: ${({ theme: { colors } }) => colors.white};
	}
`

const AuthorLink = ({ link, name }) => (
	<a
		href={`https://linkedin.com/in/${link}`}
		rel="noopener noreferrer"
		target="_blank"
	>
		{name}
	</a>
)

AuthorLink.propTypes = {
	link: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}

const Footer = () => {
	const {
		site: {
			siteMetadata: { authors },
		},
	} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						authors {
							name
							link
						}
					}
				}
			}
		`
	)

	return (
		<StyledFooter>
			© {new Date().getFullYear()}, Built by <AuthorLink {...authors[0]} /> &{' '}
			<AuthorLink {...authors[1]} /> Ferrero
		</StyledFooter>
	)
}

export default Footer
