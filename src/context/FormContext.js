import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const FormContext = createContext()
const initialState = {
	selectedPackage: null,
}
const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_SELECTED_PACKAGE':
			return { ...state, selectedPackage: action.payload.selectedPackage }

		default:
			return state
	}
}

export const FormContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const value = { state, dispatch }

	return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

FormContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export const FormContextConsumer = FormContext.Consumer

export default FormContext
