import styles from "./AboutMe.module.css";
import heroImg from "../../assets/hero-img.png";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function AboutMe() {
  const { theme } = useTheme();

  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  const [text] = useTypewriter({
    words: ["Frontend Developer", "Flutter Developer", "Creative Coder"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const cursorColor = theme === "light" ? "#8b008b" : "#ffffff";

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture" />
      </div>
      <div className={styles.info}>
        <h1>
          Hi, I am <span className={styles.name}>Regina</span>
        </h1>
        <h2>
          a <span>{text}</span>
          <Cursor
            cursorBlinking="true"
            cursorStyle="|"
            cursorColor={cursorColor}
          />
        </h2>
        <span>
          <a href="https://github.com/Regi25?tab=repositories" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/regina-i-227920336/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Download CV</button>
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
