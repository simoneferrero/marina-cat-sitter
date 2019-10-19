import React from 'react'

import Layout from '../components/Layout'
import HeroPage from '../components/HeroPage'
import SEO from '../components/Seo'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<HeroPage />
	</Layout>
)

export default IndexPage
