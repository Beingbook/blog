import React from "react";
import { Link } from "gatsby";

import styles from "./styles.module.scss";

export const PostCard: React.FC<{
  title: string;
  spoiler: string;
  date?: string;
  link: string;
  timeToRead: number;
}> = ({ title, date, spoiler, timeToRead, link }) => {
  return (
    <article className={styles.card}>
      <header>
        <h3>
          <Link to={link}>{title}</Link>
        </h3>
        <span>
          <time dateTime={date}>{date}</time>, {timeToRead}분
        </span>
      </header>
      <p>{spoiler}</p>
    </article>
  );
};
