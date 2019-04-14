import * as React from 'react';
import { graphql } from 'gatsby';
// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

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
        </Wrapper>
      </Header>
      <Section>
        <Wrapper>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </Wrapper>
      </Section>
    </MDXProvider>
  );
};

const Header = styled.header`
  padding: ${spacing(4)} 0;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxContentWidth}px;
`;

const Section = styled.section`
  ${Headline1}, ${Headline2}, ${Headline3}, ${Headline4}, ${Headline5}, ${Headline6} {
    margin-bottom: 0.65em;
  }

  .gatsby-highlight {
    margin-left: -${spacing(2)};
    margin-right: -${spacing(2)};

    pre {
      @media (max-width: 768px) {
        border-radius: 0;
      }
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
        tags
      }
      code {
        body
      }
    }
  }
`;
