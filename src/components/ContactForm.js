import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { Field, Formik } from 'formik'
import * as Yup from 'yup'
import Select from 'react-select'

import FormContext from '../context/FormContext'

const StyledPersonalInfoSection = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`

const ContactForm = () => {
	const {
		state: { selectedPackage },
	} = useContext(FormContext)
	const selectedPackageOptions = [
		{ value: '30min', label: '30 minuti' },
		{ value: '1hour', label: '1 ora' },
		{ value: 'night', label: 'Notturna' },
	]
	const initialValues = {
		comments: '',
		email: '',
		lastName: '',
		name: '',
		selectedPackage: selectedPackageOptions.find(
			({ value }) => value === selectedPackage
		),
		telephone: '',
		__gotcha: undefined,
	}
	const validationSchema = Yup.object().shape({
		comments: Yup.string(),
		email: Yup.string()
			.email()
			.required('Obbligatorio'),
		lastName: Yup.string().required('Obbligatorio'),
		name: Yup.string().required('Obbligatorio'),
		selectedPackage: Yup.string().nullable(),
		telephone: Yup.string().required('Obbligatorio'),
		_gotcha: Yup.string().nullable(),
	})

	return (
		<Formik
			enableReinitialize
			initialValues={initialValues}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					console.log(JSON.stringify(values, null, 2))
					setSubmitting(false)
				}, 500)
			}}
			validationSchema={validationSchema}
		>
			{({
				errors,
				setFieldValue,
				handleBlur,
				handleSubmit,
				isSubmitting,
				values,
			}) => {
				return (
					<form onSubmit={handleSubmit}>
						<StyledPersonalInfoSection>
							<label htmlFor="name">
								Nome
								<Field name="name" placeholder="Il tuo nome" type="text" />
							</label>
							<label htmlFor="lastName">
								Cognome
								<Field
									name="lastName"
									placeholder="Il tuo cognome"
									type="text"
								/>
							</label>
							<label htmlFor="email">
								Email
								<Field name="email" placeholder="La tua email" type="text" />
							</label>
							<label htmlFor="telephone">
								Telefono
								<Field
									name="telephone"
									placeholder="Il tuo numero di telefono"
									type="text"
								/>
							</label>
						</StyledPersonalInfoSection>
						<label htmlFor="selectedPackage">
							Pacchetto
							<Select
								id="selectedPackage"
								options={selectedPackageOptions}
								onChange={value => setFieldValue('selectedPackage', value)}
								onBlur={handleBlur}
								value={values.selectedPackage}
							/>
						</label>
						<label htmlFor="comments">
							Commenti
							<Field
								component="textarea"
								name="comments"
								placeholder="Raccontami di cosa hai bisogno"
							/>
						</label>
						<Field name="_gotcha" style={{ display: 'none' }} />
						<button type="submit" disabled={isSubmitting}>
							Invia
						</button>
					</form>
				)
			}}
		</Formik>
	)
}

export default ContactForm
