import React, { useContext, useState } from 'react'
import { Field, FieldArray, Formik } from 'formik'
import Select from 'react-select'

import {
	StyledField,
	StyledForm,
	StyledLabel,
	StyledAnimalsContainer,
	StyledSubmitButton,
	StyledError,
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
			onSubmit={getHandleSubmit(setShowForm, setShowGenericError)}
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
									{labelText}
									<span>*</span>
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
						<FieldArray
							name="animali.tipi"
							render={({ push, remove }) => (
								<StyledAnimalsContainer>
									<span>Animali</span>
									<div>
										{animals.map(({ id, name }) => (
											<StyledLabel key={id}>
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
											</StyledLabel>
										))}
									</div>
								</StyledAnimalsContainer>
							)}
						/>
						<StyledLabel htmlFor="animali.quantità">
							<span>Quanti</span>
							<StyledField
								disabled={isSubmitting}
								name="animali.quantità"
								placeholder="Quanti animali hai"
								type="number"
							/>
						</StyledLabel>
						<StyledLabel fullWidth htmlFor="pacchetto">
							<span>Tipo di pacchetto</span>
							<Select
								classNamePrefix="pacchetto"
								isDisabled={isSubmitting}
								id="pacchetto"
								options={selectedPackageOptions}
								onChange={value => setFieldValue('pacchetto', value)}
								onBlur={handleBlur}
								value={values.pacchetto}
							/>
						</StyledLabel>
						<StyledLabel fullWidth htmlFor="commenti">
							<span>Commenti</span>
							<StyledField
								component="textarea"
								disabled={isSubmitting}
								name="commenti"
								placeholder="Raccontami di cosa hai bisogno"
								required={touched.commenti && errors.commenti}
							/>
						</StyledLabel>
						<Field name="_gotcha" style={{ display: 'none' }} />
						<StyledSubmitButton type="submit" disabled={isSubmitting}>
							Invia
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
						Cercherò di contattarti non appena sarò disponibile. A presto!
					</StyledThankYouMessage>
				)

				return showForm ? form : thankYouMessage
			}}
		</Formik>
	)
}

export default ContactForm
