import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={logoStyle} to="/">
        <img src="/images/logo.png" alt="logo" />
        <span style={logoText}>CommonRoom</span>
      </Link>
    </nav>
  );
};

// style
const logoStyle = {
  color: "#fff",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  fontSize: "22px",
  fontWeight: "bold",
};
const logoText = {
  marginLeft: "10px",
};

export default Navigation;
