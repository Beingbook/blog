module.exports = {
  siteMetadata: {
    title: `Beingbook`,
    description: `About frontend engineering.`,
    author: `@Beingbook`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`,
      },
    },
    `gatsby-mdx`,
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
        name: `Frontend Engineer Blog`,
        short_name: `FE Blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ab1142`,
        display: `minimal-ui`,
        icon: `src/images/tag-icon.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline',
  ],
};
