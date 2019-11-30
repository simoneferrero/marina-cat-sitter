import styled, { css, keyframes } from 'styled-components/macro'
import { Field } from 'formik'

export const StyledForm = styled.form`
	display: grid;
	grid-column-gap: 50px;
	grid-row-gap: 32px;
	grid-template-columns: 1fr;
	padding: 15px 0;

	@media ${({ theme: { mediaQueries } }) => mediaQueries.desktop} {
		grid-template-columns: repeat(2, 1fr);
	}
`
const disabledStyles = css`
	cursor: not-allowed;
	opacity: 0.4;
`
const inputStyles = css`
	appearance: none;
	background-color: ${({ required, theme: { colors } }) =>
		required ? '#e50267ad' : colors.white};
	border: none;
	border-radius: 8px;
	outline: none;
	width: 100%;

	:disabled {
		${disabledStyles}
	}
`
export const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media ${({ theme: { mediaQueries } }) => mediaQueries.desktop} {
		grid-column: ${({ fullWidth }) => fullWidth && '1/3'};
	}

	> * {
		align-self: start;
	}

	> span {
		margin-bottom: 8px;

		> span {
			color: ${({ theme: { colors } }) => colors.pink};
		}
	}

	.pacchetto--is-disabled {
		${disabledStyles}
	}

	#pacchetto {
		width: 100%;

		.pacchetto__control {
			padding: 2px 8px;

			${inputStyles}
		}

		.pacchetto__option,
		.pacchetto__option--is-focused {
			background-color: ${({ theme: { colors } }) => colors.white};
			color: black;

			:hover {
				background-color: ${({ theme: { colors } }) => colors.lightBlue};
				color: ${({ theme: { colors } }) => colors.white};
			}
		}

		.pacchetto__option--is-selected {
			background-color: ${({ theme: { colors } }) => colors.lightBlue};
			color: ${({ theme: { colors } }) => colors.white};
		}
	}
`
export const StyledField = styled(Field)`
	padding: 8px 16px;

	${inputStyles}
`
export const StyledAnimalsContainer = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr;
	width: 100%;

	@media ${({ theme: { mediaQueries } }) => mediaQueries.desktop} {
		grid-template-columns: repeat(2, 1fr);
	}

	> div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		> div {
			align-items: center;
			display: inline-flex;
			justify-content: space-between;
			padding: 4px 0;
			width: 100%;

			label {
				align-items: center;
				display: flex;
				${({ isSubmitting }) => isSubmitting && disabledStyles};

				input[type='checkbox'] {
					align-self: center;
					appearance: none;
					background-color: ${({ theme: { colors } }) => colors.white};
					border-radius: 4px;
					height: 15px;
					margin-right: 12px;
					width: 15px;

					:checked {
						background-color: ${({ theme: { colors } }) => colors.darkGreen};
					}

					:disabled {
						cursor: not-allowed;
					}
				}
			}
		}
	}
`
export const StyledSubmitButton = styled.button`
	background-color: ${({ theme: { colors } }) => colors.darkGreen};
	border-radius: 32px;
	color: ${({ theme: { colors } }) => colors.white};
	cursor: pointer;
	font-size: 1.2rem;
	padding: 8px 32px;
	width: fit-content;

	:hover {
		background-color: ${({ theme: { colors } }) => colors.pink};
	}

	:active {
		background-color: ${({ theme: { colors } }) => colors.lightGreen};
	}

	:disabled {
		${disabledStyles}
	}
`
export const StyledError = styled.p`
	color: ${({ theme: { colors } }) => colors.pink};
	display: ${({ showError }) => showError || 'none'};

	@media ${({ theme: { mediaQueries } }) => mediaQueries.desktop} {
		grid-column: '1/3';
	}
`
export const StyledThankYouMessage = styled.h2`
	font-style: italic;
	font-weight: 400;
	margin-top: 24px;
`
const spin = keyframes`
	from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
export const StyledLoader = styled.div`
	border: 0.35rem solid #ffffff66;
	border-top: 0.35rem solid #ffffffcc;
	border-radius: 50%;
	width: 2rem;
	height: 2rem;
	animation: ${spin} 2s linear infinite;
`
