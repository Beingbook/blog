const { createFilePath } = require(`gatsby-source-filesystem`);

const removeTrailingSlash = path =>
  path === `/` ? path : path.replace(/\/$/, ``);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = removeTrailingSlash(
      createFilePath({ node, getNode, basePath: `pages` })
    );
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  createPage({
    path: "/",
    component: require.resolve("./src/components/HomePage"),
    context: {
      topic: "**/*",
    },
  });
  createPage({
    path: "/tech",
    component: require.resolve("./src/components/HomePage"),
    context: {
      topic: "/tech/**",
    },
  });
  createPage({
    path: "/life",
    component: require.resolve("./src/components/HomePage"),
    context: {
      topic: "/life/**",
    },
  });

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve("./src/components/Post"),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const oldPage = Object.assign({}, page);
  // Remove trailing slash unless page is /
  page.path = removeTrailingSlash(page.path);
  if (page.path !== oldPage.path) {
    // Replace old page with new page
    deletePage(oldPage);
    createPage(page);
  }
};
