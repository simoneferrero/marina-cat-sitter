import React from 'react'
import styled from 'styled-components/macro'

const StyledFooter = styled.footer`
	background-color: ${({ theme: { colors } }) => colors.darkBlue};
	color: ${({ theme: { colors } }) => colors.white};
	padding: 40px;
	text-align: center;
	width: 100%;
`

// TODO: get links from maifest
const Footer = () => (
	<StyledFooter>
		© {new Date().getFullYear()}, Built by Chiara & Simone Ferrero
	</StyledFooter>
)

export default Footer
