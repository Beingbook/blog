import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Header from "../Header";

import "./styles.scss";
import styles from "./styles.module.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <link href="//fonts.gstatic.com" rel="preconnect" />
        <link
          href="//fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={styles.wrapper}>
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
