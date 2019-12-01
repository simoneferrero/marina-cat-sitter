module.exports = {
	siteMetadata: {
		title: `Marina Pet Sitter`,
		description: `Pet sitter con anni di esperienza nel prendersi cura di gatti, cani e diversi tipi di animali. Disponibile a Torino e dintorni.`,
		authors: [
			{ name: 'Chiara', link: 'chiara-ferrero' },
			{ name: 'Simone', link: 'simoneferrero' },
		],
		siteUrl: `https://marinapetsitter.it`,
		image: `/images/icon.png`,
		submitUrl: 'https://submit-form.com/_O3HAwSR5ATBuTeGhfyGa',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `marina-pet-sitter`,
				short_name: `marina`,
				start_url: `/`,
				background_color: `#005560`,
				theme_color: `#005560`,
				display: `minimal-ui`,
				icon: `src/images/fav.png`,
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/config/typography`,
				omitGoogleFont: true,
			},
		},
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images/,
				},
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-sitemap`,
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://marinapetsitter.it',
				sitemap: 'https://marinapetsitter.it/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
	],
}
