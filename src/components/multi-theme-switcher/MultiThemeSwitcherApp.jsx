import { useState } from "react";
import styles from "./multiswitcher.module.css";

function MultiThemeSwitcherApp() {
  const [theme, setTheme] = useState("light");

  const switchChangeHandler = (value) => {
    setTheme(value);

    document.documentElement.setAttribute("data-theme", value);
    document.documentElement.classList.add("in-transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("in-transition");
    }, 1000);
  };
  return (
    <div className={styles["theme-switcher"]}>
      <fieldset
        aria-label="theme switcher"
        role="radiogroup"
        className={styles["theme-switcher-card"]}
      >
        <legend>
          <h2>Choose a Theme</h2>
        </legend>
        <div className={styles["c-toggle"]}>
          {[
            { value: "light" },
            { value: "dark" },
            { value: "pink" },
            { value: "blue" },
            { value: "yellow" },
          ].map((input) => (
            <div key={input.value} className={styles["input-wrapper"]}>
              <input
                type="radio"
                name={input.value}
                id={input.value}
                value="light"
                onChange={() => switchChangeHandler(input.value)}
                checked={theme === input.value}
              />
              <label htmlFor={input.value} data-color={input.value}>
                <span className={styles["sr-only"]}>{input.value}</span>
              </label>
            </div>
          ))}

          {/* <div className={styles["input-wrapper"]}>
            <input
              type="radio"
              name="theme"
              id="dark"
              value="dark"
              onChange={() => switchChangeHandler("dark")}
              checked={theme === "dark"}
            />
            <label htmlFor="dark" data-color="dark">
              <span className={styles["sr-only"]}>Dark</span>
            </label>
          </div>
          <div className={styles["input-wrapper"]}>
            <input
              type="radio"
              name="theme"
              id="pink"
              value="pink"
              onChange={() => switchChangeHandler("pink")}
              checked={theme === "pink"}
            />
            <label htmlFor="pink" data-color="pink">
              <span className={styles["sr-only"]}>Pink</span>
            </label>
          </div>
          <div className={styles["input-wrapper"]}>
            <input
              type="radio"
              name="theme"
              id="blue"
              value="blue"
              onChange={() => switchChangeHandler("blue")}
              checked={theme === "blue"}
            />
            <label htmlFor="blue" data-color="blue">
              <span className={styles["sr-only"]}>Blue</span>
            </label>
          </div>

          <div className={styles["input-wrapper"]}>
            <input
              type="radio"
              name="theme"
              id="yellow"
              value="yellow"
              onChange={() => switchChangeHandler("yellow")}
              checked={theme === "yellow"}
            />
            <label htmlFor="yellow" data-color="yellow">
              <span className={styles["sr-only"]}>Blue</span>
            </label>
          </div> */}
        </div>
      </fieldset>
    </div>
  );
}

export default MultiThemeSwitcherApp;
