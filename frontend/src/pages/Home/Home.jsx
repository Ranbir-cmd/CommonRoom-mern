import React from "react";
import styles from "./Home.module.css";
import Card from "../../components/shared/card/Card";
import { Link } from "react-router-dom";
import Button from "../../components/shared/button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const startRegister = () => {
    navigate("/register");
  };

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to CommonRoom" icon="welcome">
        <p className={styles.text}>
          find out all kind of topics you love listening and love to talk about.
          You will find all of them here . So lets get started.
        </p>

        <Button onClick={startRegister} label="Get your username" />

        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signinStyle} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

const signinStyle = {
  fontWeight: "bold",
  textDecoration: "none",
};
export default Home;
