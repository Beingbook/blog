import * as React from 'react';
import { graphql } from 'gatsby';
// @ts-ignore
import { MDXRenderer } from 'gatsby-plugin-mdx';
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
  Body1,
} from './Typography';
import { spacing } from '../styled/utils';
import CodeBlock from './CodeBlock';

interface Props {
  data: {
    mdx: {
      id: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        description: string;
      };
      body: string;
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
        blockquote: Blockquote,
      }}
    >
      <SEO description={description} title={title} slug={mdx.fields.slug} />
      <GlobalStyle />
      <article>
        <Header>
          <Wrapper>
            <Headline1>{title}</Headline1>
          </Wrapper>
        </Header>
        <Main>
          <Wrapper>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Wrapper>
        </Main>
        <footer>
          <Body1>이 글이 도움이 되었으면 좋겠습니다. 😎</Body1>
          <Body1>
            잘못된 정보나 오타가 있다면{' '}
            <a href="https://github.com/beingbook/blog/issues">Github</a> 또는{' '}
            <a href="https://twitter.com/beingbook">Twitter</a>로 제보해주세요.
            최대한 빠르게 반영하도록 하겠습니다.
          </Body1>
        </footer>
      </article>
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

const Blockquote = styled.blockquote`
  margin-left: 0;
  margin-right: 0;
  padding: ${spacing(2)};
  background: #607d8b;
  color: rgba(255, 255, 255, 0.88);
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
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
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
      body
    }
  }
`;
