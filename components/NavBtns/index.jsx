import React from "react";
import styles from "./.module.sass";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function NavBtns() {
  return (
    <div className={styles.app_nav_btns_container}>
      <button disabled className={styles.app_nav_btn}>
        <FiChevronLeft />
      </button>
      <button className={styles.app_nav_btn}>
        <FiChevronRight />
      </button>
    </div>
  );
}
