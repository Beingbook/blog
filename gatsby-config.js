require('ts-node').register();

module.exports = {
  siteMetadata: {
    title: `Beingbook`,
    description: `About frontend engineering.`,
    author: `BaHwan Han <beingbook@gmail.com>`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        cacheId: 'offline-cache',
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    `gatsby-plugin-typescript`,
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
        name: `Beingbook Blog`,
        short_name: `Beingbook`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ab1142`,
        display: `minimal-ui`,
        icon: `src/images/tag-icon.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
  ],
};
