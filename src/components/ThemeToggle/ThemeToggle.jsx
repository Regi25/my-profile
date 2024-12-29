import { useEffect, useState } from "react";
import { useTheme } from "../../common/ThemeContext";
import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div className={styles.themeToggle} onClick={handleToggle}>
      <div
        className={`${styles.switch} ${isDark ? styles.dark : styles.light}`}
      ></div>
    </div>
  );
}

export default ThemeToggle;
