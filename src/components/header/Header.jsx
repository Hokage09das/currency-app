import React from "react";

import { Link, useMatch } from "react-router-dom";
import { route } from "../../route/constants/route";

import styles from "./header.module.scss";

const CustomLink = ({ to, children, ...props }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      className={match ? `${styles.link} ${styles.active}` : styles.link}
      {...props}
    >
      {children}
    </Link>
  );
};

export const Header = () => {
  return (
    <header className={styles.header}>
      <CustomLink to={route.LIST}>List</CustomLink>
      <CustomLink to={route.CONVERTER}>Convert</CustomLink>
    </header>
  );
};
