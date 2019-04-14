require('ts-node').register();

module.exports = {
  siteMetadata: {
    title: `Beingbook`,
    description: `About frontend engineering.`,
    author: `BaHwan Han <beingbook@gmail.com>`,
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: '÷',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
    `gatsby-plugin-offline`,
  ],
};
