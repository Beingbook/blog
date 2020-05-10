import React from "react";
import { graphql } from "gatsby";

import SEO from "../SEO";
import { PostCard } from "../PostCard";

const HomePage: React.FC<{
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          frontmatter: {
            published: string | null;
            spoiler: string;
            title: string;
          };
          timeToRead: number;
          fields: {
            slug: string;
          };
        };
      }>;
    };
  };
}> = ({ data: { allMarkdownRemark } }) => {
  const posts = allMarkdownRemark.edges.map(x => x.node);
  return (
    <section>
      <SEO title="Home" />
      {posts.map(post => (
        <PostCard
          key={post.fields.slug}
          {...post.frontmatter}
          link={post.fields.slug}
          timeToRead={post.timeToRead}
        />
      ))}
    </section>
  );
};

export default HomePage;

export const query = graphql`
  query AllPostsQuery($topic: String!) {
    allMarkdownRemark(
      filter: { fields: { slug: { glob: $topic } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "Y-MM-D")
            spoiler
            title
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;
