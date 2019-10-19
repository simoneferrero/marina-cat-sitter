import React from 'react'

import About from '../components/About'
import HeroPage from '../components/HeroPage'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<HeroPage />
		<About />
	</Layout>
)

export default IndexPage
