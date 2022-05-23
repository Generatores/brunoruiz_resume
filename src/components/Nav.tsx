import styles from "components/Nav.module.css";

import { NavButton } from "components";

export const Nav = () => {
  return (
    <div className={styles["Container"]}>
      <NavButton ButtonPath="/" ButtonText="Bruno Ruiz" />
      <NavButton ButtonPath="/My-Scholarship" ButtonText="My Scholarship" />
      <NavButton
        ButtonPath="/Professional-Career"
        ButtonText="Professional Career"
      />
      <NavButton ButtonPath="/Projects" ButtonText="Projects" />
      <NavButton ButtonPath="/Contact-me" ButtonText="Contact me" />
    </div>
  );
};
