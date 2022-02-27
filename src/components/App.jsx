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

///ACTIONS
import { setSpotifyToken, setUser, getMe } from "../redux/actions";

/// APP COMPONENT
const mapStateToProps = (state) => state;
const mapDispatchToProps = { setSpotifyToken, setUser, getMe };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function App({ setSpotifyToken, setUser, getMe, token }) {
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
  }, []);
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
  }, [hash]);
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
      getMe(token);
    }
  }, [token]);
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  return (
    <AuthGuard>
      <main id="app-container">
        <div id="app-main-area">
          <AppSidebar />
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
                  <Route
                    index
                    element={
                      <>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </>
                    }
                  />
                  <Route path="search" element={<>SEARCH</>} />
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
