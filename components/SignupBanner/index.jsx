import React from "react";
import styles from "./.module.sass";

export default function SignupBanner() {
  return (
    <div className={`${styles.sign_up_banner} justify-content-lg-between`}>
      <div className="d-none d-lg-block">
        <span className={styles.overview_spotify}>preview of spotify</span>
        <p className={`m-0 mt-1 ${styles.banner_content}`}>
          Signup to get unlimited songs and prodcasts with occassional ads. No
          credit card needed
        </p>
      </div>
      <a href={"/"} target={"_blank"} className={styles.banner_signup_cta}>
        sign up free
      </a>
    </div>
  );
}
