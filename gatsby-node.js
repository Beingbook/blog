require('ts-node').register();

const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query getAllMdxPages {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              status
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    console.error(result.errors);
    throw result.errors;
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    if (node.frontmatter.status !== 'published') {
      return;
    }
    createPage({
      path: node.fields.slug,
      component: require.resolve(`./src/components/ArticleLayout`),
      context: {
        id: node.id,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({
      node,
      getNode,
      trailingSlash: true,
    });

    createNodeField({
      name: 'slug',
      node,
      value: `/posts${value}`,
    });
  }
};
