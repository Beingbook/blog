import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query AllPosts {
        allMdx {
          edges {
            node {
              id
              frontmatter {
                title
                category
              }
              excerpt
            }
          }
        }
      }
    `,
  );
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <section>
        {allMdx.edges.map(({ node: post }) => (
          <article key={post.id}>
            <header>
              <h1>{post.frontmatter.title}</h1>
            </header>
            <section>{post.excerpt}</section>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default IndexPage;
