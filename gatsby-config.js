module.exports = {
  pathPrefix: `/wichtech-website`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1024 }
          },
          {
            resolve: `gatsby-remark-highlight-code`
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `wichtech`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-180358086-1",
        head: false,
        exclude: [],
        pageTransitionDelay: 0,
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "wich.tech",
      },
    }
  ].filter(Boolean),
}
