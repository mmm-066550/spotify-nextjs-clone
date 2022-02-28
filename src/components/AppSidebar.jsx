import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/sidebar.sass";
import { Collapse } from "reactstrap";
import { useLocation } from "react-router-dom";
import { ReactComponent as LogoWhite } from "../assets/images/logo-white.svg";
import { ReactComponent as LogoIcon } from "../assets/images/logo-icon.svg";
import { ReactComponent as HomeIcon } from "../assets/images/home.svg";
import { ReactComponent as LikeIcon } from "../assets/images/like.svg";
import { ReactComponent as SearchIcon } from "../assets/images/search.svg";
import { ReactComponent as PlusIcon } from "../assets/images/plus.svg";
import { ReactComponent as LibraryIcon } from "../assets/images/library.svg";
import { ReactComponent as ChevronLeft } from "../assets/images/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../assets/images/chevron-right.svg";
import { ReactComponent as DownloadIcon } from "../assets/images/download-icon.svg";

export default function AppSidebar({ appMode, setAppMode }) {
  const navList = useRef();
  const location = useLocation();
  const [isOpen, setisOpen] = useState(null);

  useLayoutEffect(() => {
    setisOpen(JSON.parse(window.localStorage.getItem("sidebarState")) || false);
  }, []);

  useEffect(() => {
    [...navList.current.children].forEach((el) => {
      el.classList.remove("active");
    });
    if (!location.pathname.split("/")[1]) {
      navList.current.children[0].classList.add("active");
    } else {
      [...navList.current.children].forEach((item) => {
        if (item.dataset.navlink === location.pathname.split("/")[1]) {
          item.classList.add("active");
        }
      });
    }
  }, [location]);

  return (
    <>
      <Collapse className={isOpen ? "open" : ""} horizontal>
        <aside id="app-left-sidebar">
          <div className="container py-4">
            <div
              className={`d-flex ${
                !isOpen
                  ? "justify-content-center flex-column-reverse align-items-center"
                  : "justify-content-between"
              }`}
            >
              <Link to="/" className="app-logo-home-link">
                {isOpen ? (
                  <LogoWhite className="app-logo" />
                ) : (
                  <LogoIcon className="app-icon mt-4" />
                )}
              </Link>
              <button
                className="collapse-btn d-none d-md-block"
                onClick={() => {
                  window.localStorage.setItem("sidebarState", !isOpen);
                  setisOpen(!isOpen);
                }}
              >
                {isOpen ? (
                  <ChevronLeft className="left" />
                ) : (
                  <ChevronRight className="right" />
                )}
              </button>
            </div>
          </div>
          <div className="app-navigation-list-container pt-1">
            <ul ref={navList} className="app-navigation-list">
              <li className="app-nav-item">
                <Link
                  to={"/"}
                  className={`app-nav-link ${
                    isOpen ? "" : "justify-content-center"
                  }`}
                >
                  <HomeIcon className={isOpen ? "icon me-2" : "icon"} />
                  {!isOpen ? null : <span>home</span>}
                </Link>
              </li>
              <li data-navlink="search" className="app-nav-item">
                <Link
                  to={"/search"}
                  className={`app-nav-link ${
                    isOpen ? "" : "justify-content-center"
                  }`}
                >
                  <SearchIcon className={isOpen ? "icon me-2" : "icon"} />
                  {!isOpen ? null : <span>search</span>}
                </Link>
              </li>
              <li data-navlink="collection" className="app-nav-item">
                <Link
                  to={"/collection"}
                  className={`app-nav-link ${
                    isOpen ? "" : "justify-content-center"
                  }`}
                >
                  <LibraryIcon className={isOpen ? "icon me-2" : "icon"} />
                  {!isOpen ? null : <span>library</span>}
                </Link>
              </li>
              <li className="app-nav-item">
                <hr />
              </li>
              <li className="app-nav-item">
                <Link
                  to="/"
                  className={`app-nav-link ${
                    isOpen ? "" : "justify-content-center"
                  }`}
                >
                  <PlusIcon className={isOpen ? "icon me-2" : "icon"} />
                  {!isOpen ? null : <span>create playlist</span>}
                </Link>
              </li>
              <li data-navlink="likes" className="app-nav-item">
                <Link
                  to={"/likes"}
                  className={`app-nav-link ${
                    isOpen ? "" : "justify-content-center"
                  }`}
                >
                  <LikeIcon className={isOpen ? "icon me-2" : "icon"} />
                  {!isOpen ? null : <span>liked songs</span>}
                </Link>
              </li>
              <li className="app-nav-item">
                <hr />
              </li>
              <li className="app-nav-item">
                <button
                  className={`app-mode-btn`}
                  onClick={() => {
                    if (appMode === "dark") {
                      setAppMode("light");
                    } else {
                      setAppMode("dark");
                    }
                  }}
                >
                  <i
                    className={`fal fa-${
                      appMode === "dark" ? "sun" : "moon"
                    } me-2`}
                  ></i>
                  {!isOpen ? null : (
                    <span>{appMode === "dark" ? "Light" : "Dark"} Mode</span>
                  )}
                </button>
              </li>
            </ul>
          </div>
          <div className="py-5 text-center d-none d-lg-block">
            <Link to="/" className="spotify-btn download-app-btn">
              {isOpen ? <span>Download App</span> : <DownloadIcon />}
            </Link>
          </div>
        </aside>
      </Collapse>
    </>
  );
}
