import React from "react";
import styles from "./.module.sass";
import AppLogo from "../../public/assets/icons/logo";
import AppIcon from "../../public/assets/icons/icon";
import ArrowLeft from "../../public/assets/icons/arrowLeft";
import ArrowRight from "../../public/assets/icons/arrowRight";
import DownloadIcon from "../../public/assets/icons/downloadIcon";
import AsideNavList from "../AsideNavList";
import Link from "next/link";
export default function ({ style, open, setOpen }) {
  return (
    <aside className={`${style} ${!open ? "align-items-center" : ""}`}>
      <div>
        <div
          className={`d-flex mt-4 container ${
            !open
              ? "flex-column-reverse align-items-center"
              : "justify-content-between "
          }`}
        >
          <Link href={"/"}>
            <a className={`${styles.logo_brand_link} ${!open ? "pt-3" : ""}`}>
              {open ? <AppLogo /> : <AppIcon />}
            </a>
          </Link>
          <button
            onClick={() => {
              setOpen(!open);
              localStorage.setItem("isAsideOpen", !open);
            }}
            className={`d-none d-lg-block ${styles.collapse_aside_btn}`}
          >
            {open ? <ArrowLeft /> : <ArrowRight />}
          </button>
        </div>
        <AsideNavList open={open} />
      </div>
      <div className={`${styles.download_app_area} mb-5 d-none d-lg-block`}>
        <Link href={"/download"}>
          <a className={styles.download_app_btn}>
            {open ? "Download App" : <DownloadIcon />}
          </a>
        </Link>
      </div>
    </aside>
  );
}
