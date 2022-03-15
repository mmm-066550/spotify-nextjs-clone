import React, { useState, useRef } from "react";
import styles from "./.module.sass";
import AppSidebar from "../AppSidebar";
import SignupBanner from "../SignupBanner";
import ActionsTopBar from "../ActionsTopBar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { FiChevronUp } from "react-icons/fi";
import { getBrowseCategories } from "../../redux/actions";
import { connect } from "react-redux";
import { useLayoutEffect } from "react";

export default connect((state) => state, { getBrowseCategories })(
  function AppMain({ token, countryCode, children, getBrowseCategories }) {
    const [scrollBtn, setscrollBtn] = useState(false);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const container = useRef(null);
    const [categoriesPerRender, _] = useState(1);
    const [offset, setOffset] = useState(5);

    useEffect(() => {
      container.current.scrollTop = 0;
    }, [router]);

    useLayoutEffect(() => {
      setOpen(JSON.parse(window.localStorage.getItem("isAsideOpen")) || false);
    }, []);

    if (typeof window !== "undefined") {
      window.onresize = () => {
        if (window.innerWidth < 991) {
          if (open) setOpen(false);
        } else {
          if (!open) setOpen(true);
        }
      };
      if (container.current)
        container.current.onscroll = () => {
          if (router.pathname === "/") {
            if (
              container?.current?.scrollHeight -
                container?.current?.offsetHeight ===
              container?.current?.scrollTop
            ) {
              if (categoriesPerRender * (offset + 1) <= 41)
                loadMoreCategories();
            }
          }
          if (container?.current?.scrollTop >= 400) setscrollBtn(true);
          if (container?.current?.scrollTop < 100) setscrollBtn(false);
        };
    }

    const loadMoreCategories = () => {
      setOffset(offset + 1);
      getBrowseCategories(
        token,
        countryCode,
        categoriesPerRender,
        categoriesPerRender * (offset + 1)
      );
    };

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
          <div ref={container} className={`${styles.app_main_func_container}`}>
            <div className="position-absolute w-100">
              <ActionsTopBar />
              <div className={styles.container}>
                <>
                  {scrollBtn ? (
                    <button
                      title="Scroll To The Top"
                      className={styles.scroll_top_btn}
                      onClick={() => (container.current.scrollTop = 0)}
                    >
                      <FiChevronUp />
                    </button>
                  ) : null}
                  {children}
                  {router.pathname === "/" &&
                  categoriesPerRender * (offset + 1) <= 41 ? (
                    <div className={styles.loading_more_spinner}>
                      <div
                        className={`spinner-grow ${styles.grow_spinner}`}
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : null}
                </>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.app_main_bottom_section}>
          <SignupBanner />
        </footer>
      </main>
    );
  }
);
