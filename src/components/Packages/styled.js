import Img from 'gatsby-image'
import styled, { css } from 'styled-components/macro'

const activePackageStyles = css`
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
	transform: scale(1.25);
	z-index: 700;
`
export const StyledPackages = styled.section`
	background-color: ${({ theme: { colors } }) => colors.white};
	color: ${({ theme: { colors } }) => colors.darkBlue};
	padding: 40px;
	padding-top: ${({ theme: { headerHeight } }) => headerHeight + 40}px;
	width: 100%;

	> div {
		margin: 0 auto;
		max-width: ${({ theme: { maxWidth } }) => maxWidth}px;

		> h1 {
			font-style: italic;
			font-weight: 400;
			grid-column: 1/4;
		}

		> div {
			display: flex;
			justify-content: center;
			padding: 80px 0;
			text-align: justify;
		}
	}
`
export const StyledPackage = styled.div`
	background-color: ${({ theme: { colors } }) => colors.white};
	border-radius: 8px;
	border: 1px solid ${({ theme: { colors } }) => colors.lightBlue};
	color: ${({ theme: { colors } }) => colors.darkBlue};
	cursor: default;
	font-size: 0.75rem;
	height: 380px;
	margin: 0 16px;
	overflow: hidden;
	padding: 24px;
	position: relative;
	transition: 0.3s;
	width: 350px;
	z-index: 600;

	${({ active }) => active && activePackageStyles}

	h3 {
		text-align: center;
		width: 100%;
	}

	button {
		background-color: ${({ theme: { colors } }) => colors.lightBlue};
		border-radius: 32px;
		bottom: 24px;
		color: ${({ theme: { colors } }) => colors.white};
		cursor: pointer;
		font-size: 0.9rem;
		left: 50%;
		padding: 8px 32px;
		position: absolute;
		transform: translateX(-50%);

		:hover {
			background-color: ${({ theme: { colors } }) => colors.pink};
		}

		:active {
			background-color: ${({ theme: { colors } }) => colors.darkGreen};
		}
	}

	.favourite {
		background-color: ${({ theme: { colors } }) => colors.pink};
		color: ${({ theme: { colors } }) => colors.white};
		font-size: 0.9rem;
		padding: 5px 40px;
		position: absolute;
		right: -47px;
		top: 35px;
		transform: rotate(45deg);
	}
`
export const StyledImg = styled(Img)`
	left: 50%;
	margin: 16px 0;
	transform: translateX(-50%);
`
