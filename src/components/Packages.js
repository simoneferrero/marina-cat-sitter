import React, { useContext, useState } from 'react'
import styled, { css, ThemeContext } from 'styled-components/macro'

import FormContext from '../context/FormContext'
import smoothScroll from '../helpers/smoothScroll'

const activePackageStyles = css`
	transform: scale(1.5);
	z-index: 700;
`
const StyledPackages = styled.section`
	background-color: ${({ theme: { colors } }) => colors.lightGreen};
	color: ${({ theme: { colors } }) => colors.darkGreen};
	padding: 40px;
	width: 100%;

	> div {
		display: flex;
		justify-content: center;
		margin: 0 auto;
		max-width: ${({ theme: { maxWidth } }) => maxWidth}px;
		padding: 75px 0;
		text-align: justify;
	}
`
const StyledPackage = styled.div`
	color: ${({ theme: { colors } }) => colors.darkBlue};
	background-color: ${({ theme: { colors } }) => colors.lightBlue};
	border: 2px solid ${({ theme: { colors } }) => colors.darkBlue};
	border-radius: 5px;
	cursor: default;
	height: 300px;
	margin: 0 25px;
	overflow: hidden;
	position: relative;
	transition: 0.3s;
	width: 300px;
	padding: 15px;
	font-size: 0.75rem;
	z-index: 600;

	${({ active }) => active && activePackageStyles}

	h4 {
		text-align: center;
		width: 100%;
	}

	button {
		background-color: ${({ theme: { colors } }) => colors.pink};
		border-radius: 20px;
		bottom: 10px;
		color: ${({ theme: { colors } }) => colors.white};
		cursor: pointer;
		left: 50%;
		padding: 4px 8px;
		position: absolute;
		transform: translateX(-50%);

		:hover {
			background-color: ${({ theme: { colors } }) => colors.orange};
		}

		:active {
			background-color: ${({ theme: { colors } }) => colors.darkGreen};
		}
	}

	> div {
		background-color: ${({ theme: { colors } }) => colors.pink};
		color: ${({ theme: { colors } }) => colors.white};
		font-size: 0.7rem;
		padding: 0 40px;
		position: absolute;
		right: -45px;
		top: 20px;
		transform: rotate(45deg);
	}
`

const Packages = () => {
	const [active, setActive] = useState('1hour')
	const { dispatch } = useContext(FormContext)
	const { headerHeight } = useContext(ThemeContext)
	const packages = [
		{
			id: '30min',
			title: '30 minuti',
			text:
				'Una visita breve per dare da mangiare, pulire la sabbietta e assicurarti che tutto sia a posto',
		},
		{
			id: '1hour',
			title: '1 ora',
			text:
				'Una visita più lunga per dare da mangiare, pulire la sabbietta e fare compagnia ai tuoi animali',
			favourite: true,
		},
		{
			id: 'night',
			title: 'Notturna',
			text:
				'Nel caso i tuoi animali necessitino di cure particolari o di una compagnia prolungata',
		},
	]
	const handleClick = selectedPackage => {
		dispatch({ type: 'SET_SELECTED_PACKAGE', payload: { selectedPackage } })
		smoothScroll('contacts', { offset: headerHeight })
	}

	return (
		<StyledPackages id="packages">
			<p>I pacchetti:</p>
			<div>
				{packages.map(({ id, title, text, favourite }) => (
					<StyledPackage
						active={active === id}
						key={id}
						onMouseEnter={() => setActive(id)}
						onMouseLeave={() => setActive('1hour')}
					>
						<h4>{title}</h4>
						<p>{text}</p>
						<button onClick={() => handleClick(id)}>Seleziona</button>
						{favourite && <div>+ richiesto</div>}
					</StyledPackage>
				))}
			</div>
		</StyledPackages>
	)
}

export default Packages
