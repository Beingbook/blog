import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import SEO from '../components/SEO';

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
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );
  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <br />
      <br />
      <br />
      <Link to="/test">Test</Link>
      <section>
        {allMdx.edges.map(({ node: post }: any) => (
          <article key={post.id}>
            <header>
              <h1>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </h1>
            </header>
            <section>{post.excerpt}</section>
          </article>
        ))}
      </section>
    </>
  );
};

export default IndexPage;
