import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components/macro'

import Footer from '../Footer'
import Header from '../Header'
import { FormContextProvider } from '../../context/FormContext'

import GlobalStyles from '../../styles/index'
import theme from '../../styles/theme'

const StyledContentContainer = styled.div`
	background-color: ${({ theme: { colors } }) => colors.lightBlue};
	margin: 0 auto;
	padding-top: 0;
`

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<FormContextProvider>
			<GlobalStyles />
			<Header />
			<StyledContentContainer>
				<main>{children}</main>
			</StyledContentContainer>
			<Footer />
		</FormContextProvider>
	</ThemeProvider>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	theme: PropTypes.object,
}

export default Layout
