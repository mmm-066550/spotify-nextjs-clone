import React, { useEffect, useState, useLayoutEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

/// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/normalize.sass";
import "../assets/styles/app.sass";

/// COMPONENTS
import AuthGuard from "./AuthGuard";
import AppSidebar from "./AppSidebar";
import SignupBanner from "./SignupBanner";
import UserInfoHeader from "./UserInfoHeader";

/// PAGET
import Home from "../pages/Home";
import Search from "../pages/Search";

///ACTIONS
import { setSpotifyToken, getMe } from "../redux/actions";

/// APP COMPONENT
const mapStateToProps = (state) => state;
const mapDispatchToProps = { setSpotifyToken, getMe };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function App({ setSpotifyToken, getMe, token }) {
  const [appMode, setAppMode] = useState(
    window.localStorage.getItem("app_mode") || "dark"
  );
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  useLayoutEffect(() => {
    document.body.classList.remove("dark_mode");
    document.body.classList.remove("light_mode");
    window.localStorage.setItem("app_mode", appMode);
    if (appMode === "dark") {
      document.body.classList.add("dark_mode");
    }
    if (appMode === "light") {
      document.body.classList.add("light_mode");
    }
  }, [appMode]);
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [scrollY, setscrollY] = useState(0);
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // GET SPOTIFY TOKEN FROM LOCALSTORAGE AT APP STARTUP
  useLayoutEffect(() => {
    if (
      window.localStorage.getItem("token") !== "null" &&
      window.localStorage.getItem("token") !== null
    ) {
      setSpotifyToken(window.localStorage.getItem("token"));
    }
  }, [setSpotifyToken]);
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
  }, [hash, setSpotifyToken, navigate]);
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
      getMe(token);
    }
  }, [token, getMe]);
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  return (
    <AuthGuard>
      <main id="app-container">
        <div id="app-main-area">
          <AppSidebar appMode={appMode} setAppMode={setAppMode} />
          <div
            onScroll={(e) => {
              setscrollY(e.target.scrollTop);
            }}
            id="app-main-content"
          >
            <div id="app">
              <UserInfoHeader scrollY={scrollY} />
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="search" element={<Search />} />
                  <Route path="collection" element={<>LIBRARY</>} />
                  <Route path="likes" element={<>LIKES</>} />
                  <Route path="account" element={<>ACCOUNT</>} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
        <div id="fixed-bottom-banner-area">
          <SignupBanner />
        </div>
      </main>
    </AuthGuard>
  );
});
