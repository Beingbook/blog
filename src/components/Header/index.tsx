import { Link } from "gatsby";
import React from "react";

import styles from "./styles.module.scss";

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
);

export default Header;
