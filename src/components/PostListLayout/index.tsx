import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import styles from "./styles.module.scss";

import Layout from "../Layout";

const PostListLayout = ({ children }) => {
  return (
    <Layout>
      <nav className={styles.topic}>
        <ul>
          <li>
            <Link to="/" activeClassName={styles.activeTopic}>
              All
            </Link>
          </li>
          <li>
            <Link to="/tech" activeClassName={styles.activeTopic}>
              Tech
            </Link>
          </li>
          <li>
            <Link to="/life" activeClassName={styles.activeTopic}>
              Life
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </Layout>
  );
};

PostListLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostListLayout;
