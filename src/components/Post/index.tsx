import React from "react";
import { graphql } from "gatsby";

import Layout from "../Layout";
import SEO from "../SEO";

import styles from "./styles.module.scss";

const PostShow: React.FC<{
  data: {
    markdownRemark: {
      fields: {
        slug: string;
      };
      frontmatter: {
        date?: string;
        spoiler: string;
        title: string;
      };
      html: string;
      timeToRead: number;
    };
  };
}> = ({
  data: {
    markdownRemark: {
      frontmatter: { date, spoiler, title },
      html,
      timeToRead,
    },
  },
}) => {
  return (
    <Layout>
      <SEO title={title} description={spoiler} />
      <article className={styles.article}>
        <header>
          <h1>{title}</h1>
          <span>
            {date && <time dateTime={date}>{date}</time>},{" "}
            {timeToRead}분
          </span>
        </header>
        <main dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
};

export default PostShow;

export const query = graphql`
  query Post($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date(formatString: "Y-MM-D")
        spoiler
        title
      }
      html
      timeToRead
    }
  }
`;
