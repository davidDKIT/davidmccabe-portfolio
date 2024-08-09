import React from "react";
import styles from "./WelcomeStyles.module.css";
import selfiepic from "../../assets/selfie.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";

import GithubLight from "../../assets/github-light.svg";
import GithubDark from "../../assets/github-dark.svg";

import cv from "../../assets/davidmccabe_cv_12_07_2024.pdf";
import { useTheme } from "../../common/ThemeContext";

function Welcome() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;

  const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;

  const GithubIcon = theme === 'light' ? GithubLight : GithubDark;

  return (
    <section id="welcome" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.welcome}
          src={selfiepic}
          alt="David McCabe's Profile picture"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
        
      </div>
      <div className={styles.info}>
        <h1>
          David <br /> McCabe
        </h1>
        <h2>Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/david-mccabe-57a63923b/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/davidDKIT" target="_blank">
            <img src={GithubIcon} alt="Github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Graduate BSc. Computing in Software Development student with hands-on
          experience in programming and development in professional
          environments. Keen on starting a profession after receiving my degree
          and to broaden my area of knowledge.
        </p>
        <a href={cv} download>
          <button className="hover">Download CV</button>
        </a>
      </div>
    </section>
  );
}

export default Welcome;