import React from 'react'
import styled from 'styled-components/macro'

import ContactForm from './ContactForm'

const StyledContacts = styled.section`
	background-color: ${({ theme: { colors } }) => colors.yellow};
	color: ${({ theme: { colors } }) => colors.darkBlue};
	padding: 40px;
	width: 100%;

	> div {
		margin: 0 auto;
		max-width: ${({ theme: { maxWidth } }) => maxWidth}px;

		form {
			padding: 15px 0;
		}
	}
`
const Contacts = () => (
	<StyledContacts id="contacts">
		<div>
			<h2>Contattami</h2>
			<p>
				Per maggiori informazioni, per conoscerci, o per prenotare una visita,
				non esitare a contattarmi!
				<br />
				+38 348 8701690
				<br />
				<a
					href="mailto:marinasilviadeambrosi@gmail.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					marinasilviadeambrosi@gmail.com
				</a>
			</p>
			<ContactForm />
		</div>
	</StyledContacts>
)

export default Contacts
