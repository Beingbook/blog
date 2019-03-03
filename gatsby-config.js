module.exports = {
  siteMetadata: {
    title: `FE 블로그`,
    description: `프론트엔드 엔지니어링, 웹 개발, 제품 설계 등에 대한 이야기를 합니다.`,
    author: `@Beingbook`,
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
