import React from 'react'
import Img from 'gatsby-image'
import * as Yup from 'yup'
import { graphql, useStaticQuery } from 'gatsby'
import { packages } from '../../constants/index'
import axios from 'axios'

export const getSelectedPackageOptions = () =>
	packages.map(({ id, title }) => ({
		value: id,
		label: title,
	}))

export const getInitialValues = selectedPackage => ({
	animali: {
		quantità: 0,
		tipi: [],
	},
	cognome: '',
	commenti: '',
	email: '',
	nome: '',
	pacchetto: getSelectedPackageOptions().find(
		({ value }) => value === selectedPackage
	),
	telefono: '',
	_gotcha: undefined,
})

export const getValidationSchema = () =>
	Yup.object().shape({
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

export const getPersonalInfoFields = () => [
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

export const getAnimalOptions = () => {
	const {
		allFile: { edges },
	} = useStaticQuery(graphql`
		query {
			allFile(filter: { name: { regex: "/cat|dog/" } }) {
				edges {
					node {
						name
						childImageSharp {
							fixed(height: 40) {
								...GatsbyImageSharpFixed
							}
						}
					}
				}
			}
		}
	`)
	const animalPics = edges.reduce(
		(
			pics,
			{
				node: {
					name,
					childImageSharp: { fixed },
				},
			}
		) => ({
			...pics,
			[name]: fixed,
		}),
		{}
	)

	return [
		{
			id: 'gatto',
			name: <Img fixed={animalPics.cat} />,
		},
		{
			id: 'cane',
			name: <Img fixed={animalPics.dog} />,
		},
		{
			id: 'altro',
			name: 'Altro',
		},
	]
}

export const getHandleSubmit = (
	setShowForm,
	setShowGenericError,
	submitUrl
) => async (
	{ animali: { quantità, tipi }, pacchetto, ...values },
	{ resetForm, setSubmitting }
) => {
	if (values._gotcha) {
		return
	}

	try {
		setShowGenericError(false)

		const headers = new Headers({
			Accept: 'application/json',
			'Content-Type': 'application/json',
		})

		await axios(submitUrl, {
			method: 'POST',
			headers,
			data: {
				...values,
				animali: `${quantità} ${
					tipi.length ? ' - ' + tipi.join(', ') : 'animali'
				}`,
				...(pacchetto && { pacchetto: pacchetto.label }),
			},
		})

		resetForm()
		setSubmitting(false)
		setShowForm(false)
	} catch {
		setShowGenericError(true)
		setSubmitting(false)
	}
}
