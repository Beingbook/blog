import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import SEO from '../components/SEO';
import styled from 'styled-components';

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
                tags
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
      <SEO title="Home" />
      <Section>
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
      </Section>
    </>
  );
};

const Section = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxContentWidth}px;
`;

export default IndexPage;