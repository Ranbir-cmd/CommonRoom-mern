import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{label}</span>
      <img className={styles.arrow} src="/images/arrow.png" />
    </button>
  );
};

export default Button;
