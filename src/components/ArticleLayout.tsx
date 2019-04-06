import * as React from 'react';
import { graphql } from 'gatsby';
// @ts-ignore
import MDXRenderer from "gatsby-mdx/mdx-renderer";

interface Props {
  data: {
    mdx: {
      id: string;
      frontmatter: {
        title: string;
      };
      code: {
        body: string;
      };
    };
  };
}
const ArticleLayout: React.FC<Props> = ({ data: { mdx } }) => {
  return (
    <>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </>
  );
};

export default ArticleLayout;

export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;
