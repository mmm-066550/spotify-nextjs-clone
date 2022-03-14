import React, { useState, useRef } from "react";
import styles from "./.module.sass";
import AppSidebar from "../AppSidebar";
import SignupBanner from "../SignupBanner";
import ActionsTopBar from "../ActionsTopBar";
import { useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/router";

export default function AppMain({ children }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const container = useRef(null);

  useEffect(() => {
    container.current.scrollTop = 0;
  }, [router]);

  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      setOpen(JSON.parse(window.localStorage.getItem("isAsideOpen")) || false);
    }, []);
    window.onresize = () => {
      if (window.innerWidth < 991) {
        if (open) setOpen(false);
      } else {
        if (!open) setOpen(true);
      }
    };
  }

  return (
    <main
      className={`${styles.app_main_area} ${open ? styles.aside_open : ""}`}
    >
      <div className={styles.app_main_top_section}>
        <AppSidebar
          open={open}
          setOpen={setOpen}
          style={styles.app_main_sidebar}
        />
        <div ref={container} className={styles.app_main_func_container}>
          <div className="position-absolute w-100">
            <ActionsTopBar />
            <div className={styles.container}>{children}</div>
          </div>
        </div>
      </div>
      <footer className={styles.app_main_bottom_section}>
        <SignupBanner />
      </footer>
    </main>
  );
}
