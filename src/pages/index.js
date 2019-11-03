import React from 'react'

import About from '../components/About'
import Contacts from '../components/Contacts'
// import Break from '../components/Break'
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
		{/* <Break id="break-1" /> */}
		<Services />
		{/* <Break id="break-2" /> */}
		<Packages />
		{/* <Break id="break-3" /> */}
		<Contacts />
	</Layout>
)

export default IndexPage
