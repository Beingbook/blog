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
  mdComponents,
} from './Typography';
import { spacing } from '../styled/utils';
import Playground from './Playground';

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
    <MDXProvider components={mdComponents}>
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

const mdx2 = `
# Test

test doc
`;

const Header = styled.header`
  padding: ${spacing(4)} ${spacing(2)};
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