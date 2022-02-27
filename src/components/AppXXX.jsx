import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/normalize.sass";
import "../assets/styles/app.sass";

// COMPONENTS
import AppSidebar from "./AppSidebar";
import SignupBanner from "./SignupBanner";
import UserInfoHeader from "./UserInfoHeader";
import { connect } from "react-redux";

// ACTIONS
import {
  setSpotifyToken,
  setUser,
  getMe,
  getNewReleases,
} from "../redux/actions";

export default connect((state) => state, {
  getNewReleases,
  setSpotifyToken,
  setUser,
  getMe,
})(function App({
  token,
  user,
  setSpotifyToken,
  setUser,
  getNewReleases,
  getMe,
}) {
  const { hash } = useLocation();
  const navigate = useNavigate();
  // GET SPOTIFY TOKEN FROM LOCALSTORAGE AT APP STARTUP
  useLayoutEffect(() => {
    if (
      window.localStorage.getItem("token") !== "null" &&
      window.localStorage.getItem("token") !== null
    ) {
      setSpotifyToken(window.localStorage.getItem("token"));
    }
    getNewReleases();
  }, []);
  // SET SPOTIFY TOKEN AT LOGIN OR SIGNUP
  useEffect(() => {
    if (hash && hash.startsWith("#access_token")) {
      setSpotifyToken(
        hash
          .substring(1)
          .split("&")
          .find((e) => {
            return e.startsWith("access_token");
          })
          .split("=")[1]
      );
      navigate("/");
    }
  }, [hash]);
  //
  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
      getMe(token);
    }
  }, [token]);

  const scrollArea = useRef(null);
  const [scrollY, setscrollY] = useState(0);
  useEffect(() => {
    scrollArea.current.onscroll = () => {
      setscrollY(scrollArea.current.scrollTop);
    };
  }, []);

  return (
    <main id="app-container">
      <div id="app-main-area">
        <AppSidebar />
        <div ref={scrollArea} id="app-main-content">
          <div id="app">
            <UserInfoHeader scrollY={scrollY} />
          </div>
        </div>
      </div>
      <div id="fixed-bottom-banner-area">
        {!user ? <SignupBanner /> : <></>}
      </div>
    </main>
  );
});
