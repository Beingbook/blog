import * as React from 'react';
import { graphql } from 'gatsby';
// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
// @ts-ignore
import { MDXProvider } from '@mdx-js/tag';
import styled from 'styled-components';

import SEO from './SEO';
import {
  Headline3,
  Headline1,
  Headline2,
  Headline4,
  Headline5,
  Headline6,
  Body1,
  ButtonText,
} from './Typography';
import { spacing } from '../styled/utils';

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
    <MDXProvider components={components}>
      <SEO keywords={tags} />
      <Header>
        <Wrapper>
          <Headline1>{title}</Headline1>
          <ul>
            {tags.map((tag) => (
              <li key={tag}>
                <ButtonText>{tag}</ButtonText>
              </li>
            ))}
          </ul>
        </Wrapper>
      </Header>
      <Wrapper as="section">
        <MDXRenderer className="test">{mdx.code.body}</MDXRenderer>
      </Wrapper>
    </MDXProvider>
  );
};

const components = {
  h1: Headline1,
  h2: Headline2,
  h3: Headline3,
  h4: Headline4,
  h5: Headline5,
  h6: Headline6,
  p: Body1,
};

const Header = styled.header`
  padding: ${spacing(4)} ${spacing(2)};
  position: relative;

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    /* background-color: #ff9d2f; */
  }
`;

const Wrapper = styled.div`
  position: relative;
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
