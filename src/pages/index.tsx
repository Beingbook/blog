import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { Headline3, Body1, Body2 } from '../components/Typography';
import DateFormat from '../components/DateFormat';
import { spacing } from '../styled/utils';

const IndexPage = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query AllPosts {
        allMdx {
          edges {
            node {
              id
              frontmatter {
                title
                createdAt
              }
              excerpt
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );
  return (
    <>
      <Section>
        {allMdx.edges.map(({ node: post }: any) => {
          return (
            <Card key={post.id}>
              <CardHeader>
                <Headline3 as="h1">
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </Headline3>
                <Body2 as="div">
                  <DateFormat>{post.frontmatter.createdAt}</DateFormat>
                </Body2>
              </CardHeader>
              <CardBody>
                <Body1>{post.excerpt}</Body1>
              </CardBody>
            </Card>
          );
        })}
      </Section>
    </>
  );
};

const Section = styled.section`
  margin: ${spacing(4)} auto;
  max-width: ${({ theme }) => theme.maxContentWidth}px;
`;

const Card = styled.article``;

const CardHeader = styled.header`
  margin-bottom: ${spacing(2)};

  ${Headline3} {
    margin-bottom: ${spacing(2)};
  }
`;

const CardBody = styled.section``;

const CardActions = styled.div``;

export default IndexPage;
