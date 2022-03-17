import React from "react";
import styles from "./.module.sass";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function NavBtns() {
  return (
    <div className="d-none d-md-block me-4">
      <div className={styles.app_nav_btns_container}>
        <button title="Previous Page" disabled className={styles.app_nav_btn}>
          <FiChevronLeft />
        </button>
        <button title="Next Page" className={styles.app_nav_btn}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
