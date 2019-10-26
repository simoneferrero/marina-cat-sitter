import styled, { css } from 'styled-components/macro'
import { Field } from 'formik'

export const StyledForm = styled.form`
	display: grid;
	grid-gap: 15px;
	grid-template-columns: repeat(2, 1fr);
	padding: 15px 0;
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

	:disabled {
		cursor: not-allowed;
	}
`
export const StyledLabel = styled.label`
	display: grid;
	grid-column: ${({ fullWidth }) => fullWidth && '1/3'};
	grid-gap: 10px;
	grid-template-columns: 2fr 5fr;
	width: 100%;

	> * {
		align-self: start;
	}

	> input[type='checkbox'] {
		align-self: center;

		:disabled {
			cursor: not-allowed;
		}
	}

	span > span {
		color: ${({ theme: { colors } }) => colors.pink};
	}

	.pacchetto__control {
		${inputStyles}
	}
`
export const StyledField = styled(Field)`
	${inputStyles}
`
export const StyledAnimalsContainer = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 2fr 5fr;
	width: 100%;
`
export const StyledSubmitButton = styled.button`
	background: ${({ theme: { colors } }) => colors.orange};
	border: 2px solid ${({ theme: { colors } }) => colors.orange};
	border-radius: 5px;
	color: ${({ theme: { colors } }) => colors.yellow};
	font-weight: 700;
	padding: 5px 10px;
	text-transform: uppercase;
	width: fit-content;

	:hover {
		background: transparent;
		color: ${({ theme: { colors } }) => colors.orange};
	}

	:active {
		background: ${({ theme: { colors } }) => colors.pink};
		border: 2px solid ${({ theme: { colors } }) => colors.pink};
		color: ${({ theme: { colors } }) => colors.yellow};
	}

	:disabled {
		background: ${({ theme: { colors } }) => colors.orange};
		border: 2px solid ${({ theme: { colors } }) => colors.orange};
		color: ${({ theme: { colors } }) => colors.yellow};
		cursor: not-allowed;
		opacity: 0.7;
	}
`
export const StyledError = styled.p`
	color: ${({ theme: { colors } }) => colors.pink};
	display: ${({ showError }) => showError || 'none'};
	grid-column: 1/3;
`
export const StyledThankYouMessage = styled.p`
	border: 2px solid ${({ theme: { colors } }) => colors.orange};
	border-radius: 5px;
	color: ${({ theme: { colors } }) => colors.orange};
	font-weight: 600;
	margin-top: 15px;
	padding: 15px;
`
