import React, { useContext } from 'react'
import styled, { css } from 'styled-components/macro'
import { Field, FieldArray, Formik } from 'formik'
import * as Yup from 'yup'
import Select from 'react-select'

import FormContext from '../context/FormContext'
import { packages } from '../constants/index'

const StyledForm = styled.form`
	display: grid;
	grid-gap: 15px;
	grid-template-columns: repeat(2, 1fr);
	padding: 15px 0;
`
const StyledLabel = styled.label`
	display: grid;
	grid-column: ${({ fullWidth }) => fullWidth && '1/3'};
	grid-gap: 10px;
	grid-template-columns: 2fr 5fr;
	width: 100%;

	> * {
		align-self: center;
	}

	span > span {
		color: ${({ theme: { colors } }) => colors.pink};
	}
`
const inputStyles = css`
	appearance: none;
	background: rgba(255, 255, 255, 0.8);
	border: 2px solid
		${({ required, theme: { colors } }) =>
			required ? colors.pink : 'transparent'};
	border-radius: 5px;
	outline: none;
	padding: 3px 8px;
`
const StyledField = styled(Field)`
	${inputStyles}
`
const StyledAnimalsContainer = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 2fr 5fr;
	width: 100%;
`

const ContactForm = () => {
	const {
		state: { selectedPackage },
	} = useContext(FormContext)
	const selectedPackageOptions = packages.map(({ id, title }) => ({
		value: id,
		label: title,
	}))
	const initialValues = {
		animali: {
			quantità: 0,
			tipi: [],
		},
		cognome: '',
		commenti: '',
		email: '',
		nome: '',
		pacchetto: selectedPackageOptions.find(
			({ value }) => value === selectedPackage
		),
		telefono: '',
		_gotcha: undefined,
	}
	const validationSchema = Yup.object().shape({
		animali: Yup.object({
			quantità: Yup.number().nullable(),
			tipi: Yup.array(),
		}),
		cognome: Yup.string().required('Obbligatorio'),
		commenti: Yup.string().required('Obbligatorio'),
		email: Yup.string()
			.email()
			.required('Obbligatorio'),
		nome: Yup.string().required('Obbligatorio'),
		pacchetto: Yup.string().nullable(),
		telefono: Yup.string().required('Obbligatorio'),
		_gotcha: Yup.string().nullable(),
	})
	const personalInfoFields = [
		{
			id: 'nome',
			labelText: 'Nome',
			placeholder: 'Il tuo nome',
		},
		{
			id: 'cognome',
			labelText: 'Cognome',
			placeholder: 'Il tuo cognome',
		},
		{
			id: 'email',
			labelText: 'Email',
			placeholder: 'La tua email',
		},
		{
			id: 'telefono',
			labelText: 'Telefono',
			placeholder: 'Il tuo numero di telefono',
		},
	]
	const animals = [
		{
			id: 'gatto',
			name: 'Gatto',
		},
		{
			id: 'cane',
			name: 'Cane',
		},
		{
			id: 'altro',
			name: 'Altro',
		},
	]

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
				handleBlur,
				handleSubmit,
				isSubmitting,
				setFieldValue,
				touched,
				values,
			}) => {
				return (
					<StyledForm onSubmit={handleSubmit}>
						{personalInfoFields.map(({ id, labelText, placeholder }) => (
							<StyledLabel key={id} htmlFor={id}>
								<span>
									{labelText}
									<span>*</span>
								</span>
								<StyledField
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
													name="animali"
													type="checkbox"
													value={id}
													checked={values.animali.tipi.includes(id)}
													onChange={({ target: { checked } }) => {
														checked
															? push(id)
															: remove(values.animali.tipi.indexOf(id))
													}}
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
								name="animali.quantità"
								placeholder="Quanti animali hai"
								type="number"
							/>
						</StyledLabel>
						<StyledLabel fullWidth htmlFor="pacchetto">
							<span>Tipo di pacchetto</span>
							<Select
								id="pacchetto"
								options={selectedPackageOptions}
								onChange={value => setFieldValue('pacchetto', value)}
								onBlur={handleBlur}
								value={values.pacchetto}
							/>
						</StyledLabel>
						<StyledLabel fullWidth htmlFor="commenti">
							<span>Commenti</span>
							<Field
								component="textarea"
								name="commenti"
								placeholder="Raccontami di cosa hai bisogno"
							/>
						</StyledLabel>
						<Field name="_gotcha" style={{ display: 'none' }} />
						<button type="submit" disabled={isSubmitting}>
							Invia
						</button>
					</StyledForm>
				)
			}}
		</Formik>
	)
}

export default ContactForm
