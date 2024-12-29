import React, { useState } from "react";
import styles from "./switcher.module.css";

function ThemeSwitcherApp() {
  const [theme, setTheme] = useState("light");

  const handleThemeSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className={styles.switherSection}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperHeader}>
          <div
            className={styles.customSwitcher}
            onClick={handleThemeSwitch}
          ></div>
        </div>
        <div className={styles.wrapperContent}>
          <h1>Hello world</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitcherApp;
