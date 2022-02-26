import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/sidebar.sass";

import { Collapse } from "reactstrap";

import { ReactComponent as Logo_White } from "../assets/images/logo-white.svg";
import { ReactComponent as Logo_Icon } from "../assets/images/logo-icon.svg";
import { ReactComponent as HomeIcon } from "../assets/images/home.svg";
import { ReactComponent as LikeIcon } from "../assets/images/like.svg";
import { ReactComponent as SearchIcon } from "../assets/images/search.svg";
import { ReactComponent as PlusIcon } from "../assets/images/plus.svg";
import { ReactComponent as LibraryIcon } from "../assets/images/library.svg";
import { ReactComponent as Chevron_Left } from "../assets/images/chevron-left.svg";
import { ReactComponent as Chevron_Right } from "../assets/images/chevron-right.svg";
import { ReactComponent as Download_Icon } from "../assets/images/download-icon.svg";

export default function AppSidebar() {
  const [isOpen, setisOpen] = useState(true);

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
                  <Logo_White className="app-logo" />
                ) : (
                  <Logo_Icon className="app-icon mt-4" />
                )}
              </Link>
              <button
                className="collapse-btn"
                onClick={() => {
                  setisOpen(!isOpen);
                }}
              >
                {isOpen ? <Chevron_Left /> : <Chevron_Right />}
              </button>
            </div>
          </div>
          <div className="app-navigation-list-container pt-1">
            <ul className="app-navigation-list">
              <li className="active app-nav-item">
                <Link
                  to={"/"}
                  className={`app-nav-link ${
                    isOpen ? "" : "justify-content-center"
                  }`}
                >
                  <HomeIcon className={isOpen ? "icon me-3" : "icon"} />
                  {!isOpen ? null : <span>home</span>}
                </Link>
              </li>
              <li className="app-nav-item">
                <Link
                  to={"/search"}
                  className={`app-nav-link ${
                    isOpen ? "" : "justify-content-center"
                  }`}
                >
                  <SearchIcon className={isOpen ? "icon me-3" : "icon"} />
                  {!isOpen ? null : <span>search</span>}
                </Link>
              </li>
              <li className="app-nav-item">
                <Link
                  to={"/library"}
                  className={`app-nav-link ${
                    isOpen ? "" : "justify-content-center"
                  }`}
                >
                  <LibraryIcon className={isOpen ? "icon me-3" : "icon"} />
                  {!isOpen ? null : <span>library</span>}
                </Link>
              </li>
              <li className="app-nav-item">
                <hr />
              </li>
              <li className="app-nav-item">
                <a
                  href="#"
                  className={`app-nav-link ${
                    isOpen ? "" : "justify-content-center"
                  }`}
                >
                  <PlusIcon className={isOpen ? "icon me-3" : "icon"} />
                  {!isOpen ? null : <span>create playlist</span>}
                </a>
              </li>
              <li className="app-nav-item">
                <Link
                  to={"/likes"}
                  className={`app-nav-link ${
                    isOpen ? "" : "justify-content-center"
                  }`}
                >
                  <LikeIcon className={isOpen ? "icon me-3" : "icon"} />
                  {!isOpen ? null : <span>liked songs</span>}
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-5 text-center">
            <a href="/" className="spotify-btn download-app-btn">
              {isOpen ? <span>DOWNLOAD NOW</span> : <Download_Icon />}
            </a>
          </div>
        </aside>
      </Collapse>
    </>
  );
}
