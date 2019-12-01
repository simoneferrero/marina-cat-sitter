import React, { useContext, useState } from 'react'
import Select from 'react-select'
import { Field, FieldArray, Formik } from 'formik'
import { useStaticQuery, graphql } from 'gatsby'

import {
	StyledAnimalsContainer,
	StyledError,
	StyledField,
	StyledForm,
	StyledLabel,
	StyledLoader,
	StyledSubmitButton,
	StyledThankYouMessage,
} from './styled'
import FormContext from '../../context/FormContext'
import {
	getAnimalOptions,
	getHandleSubmit,
	getInitialValues,
	getPersonalInfoFields,
	getSelectedPackageOptions,
	getValidationSchema,
} from './helpers'

const ContactForm = () => {
	const {
		site: {
			siteMetadata: { submitUrl },
		},
	} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						submitUrl
					}
				}
			}
		`
	)
	const {
		state: { selectedPackage },
	} = useContext(FormContext)
	const [showGenericError, setShowGenericError] = useState(false)
	const [showForm, setShowForm] = useState(true)
	const selectedPackageOptions = getSelectedPackageOptions()
	const initialValues = getInitialValues(selectedPackage)
	const validationSchema = getValidationSchema()
	const personalInfoFields = getPersonalInfoFields()
	const animals = getAnimalOptions()

	return (
		<Formik
			enableReinitialize
			initialValues={initialValues}
			onSubmit={getHandleSubmit(setShowForm, setShowGenericError, submitUrl)}
			validationSchema={validationSchema}
		>
			{({
				errors,
				handleBlur,
				handleSubmit,
				isSubmitting,
				setFieldValue,
				touched,
				values,
			}) => {
				const form = (
					<StyledForm onSubmit={handleSubmit}>
						{personalInfoFields.map(({ id, labelText, placeholder }) => (
							<StyledLabel key={id} htmlFor={id}>
								<span>
									<span>*</span> {labelText}
								</span>
								<StyledField
									disabled={isSubmitting}
									name={id}
									placeholder={placeholder}
									required={touched[id] && errors[id]}
									type="text"
								/>
							</StyledLabel>
						))}
						<StyledLabel htmlFor="pacchetto">
							<span>Tipo di pacchetto</span>
							<Select
								aria-label="pacchetto"
								classNamePrefix="pacchetto"
								id="pacchetto"
								isDisabled={isSubmitting}
								isSearchable={false}
								onBlur={handleBlur}
								onChange={value => setFieldValue('pacchetto', value)}
								options={selectedPackageOptions}
								value={values.pacchetto}
							/>
						</StyledLabel>
						<FieldArray
							name="animali.tipi"
							render={({ push, remove }) => (
								<StyledAnimalsContainer isSubmitting={isSubmitting}>
									<div>
										<span>Animali</span>
										<div>
											{animals.map(({ id, name }) => (
												<label key={id}>
													<input
														checked={values.animali.tipi.includes(id)}
														disabled={isSubmitting}
														name="animali"
														onChange={({ target: { checked } }) => {
															checked
																? push(id)
																: remove(values.animali.tipi.indexOf(id))
														}}
														type="checkbox"
														value={id}
													/>{' '}
													{name}
												</label>
											))}
										</div>
									</div>
									<StyledLabel htmlFor="animali.quantità">
										<span>Numero di animali</span>
										<StyledField
											disabled={isSubmitting}
											min={0}
											name="animali.quantità"
											placeholder="Quanti animali hai"
											type="number"
										/>
									</StyledLabel>
								</StyledAnimalsContainer>
							)}
						/>
						<StyledLabel fullWidth htmlFor="commenti">
							<span>
								<span>*</span> Commenti
							</span>
							<StyledField
								component="textarea"
								disabled={isSubmitting}
								name="commenti"
								placeholder="Raccontami di cosa hai bisogno"
								required={touched.commenti && errors.commenti}
								rows={5}
							/>
						</StyledLabel>
						<Field name="_gotcha" style={{ display: 'none' }} />
						<StyledSubmitButton type="submit" disabled={isSubmitting}>
							{isSubmitting ? <StyledLoader /> : 'Invia'}
						</StyledSubmitButton>
						<StyledError showError={showGenericError}>
							Si è verificato un errore. Per favore, riprova più tardi.
						</StyledError>
					</StyledForm>
				)
				const thankYouMessage = (
					<StyledThankYouMessage>
						Grazie di avermi scritto!
						<br />
						Ti contatterò appena disponibile. A presto!
					</StyledThankYouMessage>
				)

				return showForm ? form : thankYouMessage
			}}
		</Formik>
	)
}

export default ContactForm
