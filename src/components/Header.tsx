import Image from "next/image";

import styles from "components/Header.module.css";
import { Nav } from "components";

export const Header = () => {
  return (
    <div className={styles["Container"]}>
      <Nav />
    </div>
  );
};
