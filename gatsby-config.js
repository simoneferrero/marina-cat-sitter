module.exports = {
  siteMetadata: {
    title: `Marina Cat Sitter`,
    description: `Cat sitter con anni di esperienza nel prendersi cura di gatti, cani e diversi tipi di animali. Disponibile a Torino e provincia.`,
    author: `simoneferrero`,
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
        name: `marina-cat-sitter`,
        short_name: `marina`,
        start_url: `/`,
        background_color: `#663399`, // TODO: change
        theme_color: `#663399`, // TODO: change
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/config/typography`,
        omitGoogleFont: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
