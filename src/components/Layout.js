import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components/macro'

import Header from './Header'

import GlobalStyles from '../styles/index'
import theme from '../styles/theme'

const StyledContentContainer = styled.div`
	background-color: ${({ theme: { colors } }) => colors.lightBlue};
	margin: 0 auto;
	padding-top: 0;
`

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header siteTitle={data.site.siteMetadata.title} />
				<StyledContentContainer theme={theme}>
					<main>{children}</main>
					<footer>
						© {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.org">Gatsby</a>
					</footer>
				</StyledContentContainer>
			</>
		</ThemeProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	theme: PropTypes.shape({
		colors: PropTypes.object.isRequired,
		maxWidth: PropTypes.number.isRequired,
	}),
}

export default Layout
