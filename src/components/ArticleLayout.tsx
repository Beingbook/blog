import * as React from 'react';
import { graphql } from 'gatsby';
// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';

import SEO from './SEO';

interface Props {
  data: {
    mdx: {
      id: string;
      frontmatter: {
        title: string;
        tags: string[];
      };
      code: {
        body: string;
      };
    };
  };
}
const ArticleLayout: React.FC<Props> = ({ data: { mdx } }) => {
  const { title, tags } = mdx.frontmatter;
  return (
    <>
      <SEO keywords={tags} />
      <Header>
        <Wrapper>
          <h1>{title}</h1>
          <ul>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </Wrapper>
      </Header>
      <Wrapper as="section">
        <MDXRenderer className="test">{mdx.code.body}</MDXRenderer>
      </Wrapper>
    </>
  );
};

const Header = styled.header`
  position: relative;
  height: 300px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxContentWidth}px;
`;

export default ArticleLayout;

export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        tags
      }
      code {
        body
      }
    }
  }
`;
