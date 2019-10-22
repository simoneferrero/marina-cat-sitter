import React from 'react'

import About from '../components/About'
import Break from '../components/Break'
import HeroPage from '../components/HeroPage'
import Layout from '../components/Layout'
import Packages from '../components/Packages'
import SEO from '../components/Seo'
import Services from '../components/Services'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<HeroPage />
		<About />
		<Break id="break-1" />
		<Services />
		<Break id="break-2" />
		<Packages />
	</Layout>
)

export default IndexPage
