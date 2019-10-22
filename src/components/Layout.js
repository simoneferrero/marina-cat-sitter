import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components/macro'

import Footer from './Footer'
import Header from './Header'
import { FormContextProvider } from '../context/FormContext'

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
			<FormContextProvider>
				<GlobalStyles />
				<Header siteTitle={data.site.siteMetadata.title} />
				<StyledContentContainer theme={theme}>
					<main>{children}</main>
				</StyledContentContainer>
				<Footer />
			</FormContextProvider>
		</ThemeProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	theme: PropTypes.object,
}

export default Layout
