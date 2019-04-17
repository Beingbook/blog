import * as React from 'react';
import { graphql } from 'gatsby';
// @ts-ignore
import { MDXRenderer } from 'gatsby-mdx';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import styled, { createGlobalStyle } from 'styled-components';

import SEO from './SEO';
import {
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  mdComponents,
} from './Typography';
import { spacing } from '../styled/utils';
import CodeBlock from './CodeBlock';

interface Props {
  data: {
    mdx: {
      id: string;
      frontmatter: {
        title: string;
        description: string;
      };
      code: {
        body: string;
      };
    };
  };
}
const ArticleLayout: React.FC<Props> = ({ data: { mdx } }) => {
  const { title, description } = mdx.frontmatter;
  return (
    <MDXProvider
      components={{
        ...mdComponents,
        pre: (props: any) => <React.Fragment {...props} />,
        code: CodeBlock,
      }}
    >
      <SEO description={description} />
      <GlobalStyle />
      <Header>
        <Wrapper>
          <Headline1>{title}</Headline1>
        </Wrapper>
      </Header>
      <Main>
        <Wrapper>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </Wrapper>
      </Main>
    </MDXProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  .highlight-code-line {
    background-color: rgba(0, 0, 0, 0.2);
    display: block;
    margin-right: ${spacing(-2)};
    margin-left: ${spacing(-2)};
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid ${({ theme }) => theme.color.primary};

    &::after {
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }
`;

const Header = styled.header`
  padding: ${spacing(4)} 0;
`;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Main = styled.main`
  ${Headline1}, ${Headline2}, ${Headline3}, ${Headline4}, ${Headline5}, ${Headline6} {
    margin-bottom: 0.65em;
  }

  .prism-code {
    @media (max-width: 860px) {
      margin-left: ${spacing(-2)};
      margin-right: ${spacing(-2)};
      border-radius: 0;
    }
  }
`;

export default ArticleLayout;

export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
      }
      code {
        body
      }
    }
  }
`;
