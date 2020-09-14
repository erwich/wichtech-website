module.exports = {
  siteMetadata: {
    siteTitle: `Eric Wich`,
    siteTitleAlt: `Eric Wich - Code. Play. Live.`,
    siteHeadline: `Eric Wich - Code. Play. Live.`,
    siteUrl: `https://www.wich.tech`,
    siteDescription: `A fun landing page to learn a little about me.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@ewich`,
    basePath: `/`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`
  ].filter(Boolean),
}
