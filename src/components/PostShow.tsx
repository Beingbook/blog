import React from "react";
import Layout from "./Layout";
import SEO from "./SEO";

const PostShow: React.FC<{
  pageContext: {
    frontmatter: {
      publishedAt: null | string;
      spoiler: string;
      title: string;
    };
  };
}> = ({
  pageContext: {
    frontmatter: { publishedAt, spoiler, title },
  },
  children,
}) => {
  return (
    <Layout>
      <SEO title={title} description={spoiler} />
      <article>
        <header>
          <hgroup>
            <h1>{title}</h1>
            <span>{spoiler}</span>
            <time dateTime={publishedAt}>{publishedAt}</time>
          </hgroup>
        </header>
        <section>{children}</section>
      </article>
    </Layout>
  );
};

export default PostShow;
