import React from "react";
import styles from "./WelcomeStyles.module.css";
import selfiepic from '../../assets/selfie.jpg'

function Welcome() {
  return (
    <section id="welcome">
      <div className={styles.colorModeContainer}>
        <img className={styles.welcome} src={selfiepic} alt="David McCabe's Profile picture"/>
      </div>
    </section>
  );
}

export default Welcome;
