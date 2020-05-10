require("ts-node/register");

module.exports = {
  siteMetadata: {
    title: `Beingbook`,
    description: `남길 게 없어서 뭐라도 남기는 블로그`,
    author: `@beingbook`,
    siteUrl: `https://blog.beingbook.dev`,
    social: {
      twitter: "beingbook",
      github: "Beingbook",
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-138682989-1`,
        head: false,
      },
    },
    { resolve: `gatsby-plugin-sass` },
    { resolve: `gatsby-plugin-react-helmet` },
    { resolve: `gatsby-transformer-sharp` },
    { resolve: `gatsby-plugin-sharp` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`],
        defaultLayouts: {
          posts: require.resolve(`./src/components/Post`),
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 640,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Beingbook`,
        short_name: `BB`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tag-icon.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
    { resolve: `gatsby-plugin-sitemap` },
    { resolve: `gatsby-plugin-offline` },
  ],
};
