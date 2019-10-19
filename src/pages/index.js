import React from 'react'

import About from '../components/About'
import Break1 from '../components/Break1'
import HeroPage from '../components/HeroPage'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Services from '../components/Services'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<HeroPage />
		<About />
		<Break1 />
		<Services />
	</Layout>
)

export default IndexPage
