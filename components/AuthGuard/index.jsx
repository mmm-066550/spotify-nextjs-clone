import React, { useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import LandingPage from "../LandingPage";
import { updateTokenState, getMe, getUserCountry } from "../../redux/actions";
import LoaderWrapper from "../LoaderWrapper";

export const AuthGuard = ({
  user,
  children,
  token,
  updateTokenState,
  getMe,
  getUserCountry,
}) => {
  const router = useRouter();

  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      if (window.localStorage.getItem("token") !== "null")
        updateTokenState(window.localStorage.getItem("token"));
      getUserCountry();
    }, []);
  }

  useEffect(() => {
    if (router.asPath.startsWith("/#access_token=")) {
      updateTokenState(
        router.asPath
          .replace("/#access_token=", "")
          .replace("&token_type=Bearer&expires_in=3600", "")
      );
      router.push("/");
    }
  }, [router.asPath]);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
      getMe(token);
    }
  }, [token]);

  if (!token) {
    return <LandingPage />;
  } else {
    if (user) {
      return children;
    } else {
      if (user === null) return <LoaderWrapper />;
      if (user === false) return <LandingPage />;
    }
  }
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = { updateTokenState, getMe, getUserCountry };
export default connect(mapStateToProps, mapDispatchToProps)(AuthGuard);
