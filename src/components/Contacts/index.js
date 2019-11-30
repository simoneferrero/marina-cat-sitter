import React from 'react'
import styled from 'styled-components/macro'

import ContactForm from '../ContactForm'

const StyledContacts = styled.section`
	background-color: ${({ theme: { colors } }) => colors.lightBlue};
	color: ${({ theme: { colors } }) => colors.white};
	padding: 16px;
	padding-top: ${({ theme: { headerHeight } }) => headerHeight + 40}px;
	width: 100%;

	@media ${({ theme: { mediaQueries } }) => mediaQueries.desktop} {
		padding-bottom: 40px;
		padding-left: 40px;
		padding-right: 40px;
	}

	> div {
		margin: 0 auto;
		max-width: ${({ theme: { maxWidth } }) => maxWidth}px;

		> h1 {
			font-style: italic;
			font-weight: 400;
		}

		h1,
		p {
			margin-bottom: 16px;
		}

		form {
			padding: 15px 0;
		}
	}
`
// TODO: set url from constant or environment file
const Contacts = () => (
	<StyledContacts id="contacts">
		<div>
			<h1>Contattami</h1>
			<p>
				Per maggiori informazioni, per conoscerci, o per prenotare una visita,
				non esitare a contattarmi!
				<br />
				Compila il form sottostante, mi assicurerò di risponderti in meno di 24
				ore.
			</p>
			<ContactForm />
		</div>
	</StyledContacts>
)

export default Contacts
