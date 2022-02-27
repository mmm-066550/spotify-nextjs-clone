import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import Login from "../pages/Login";

export default connect((state) => state)(function AuthGuard({
  token,
  user,
  children,
}) {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  useLayoutEffect(() => {
    if (!token) {
      setisLoggedIn(false);
    }
    if (token) {
      if (user) {
        setisLoggedIn(true);
      }
      if (user === false) {
        setisLoggedIn(false);
      }
      if (user === null) {
        setisLoggedIn(null);
      }
    }
  }, [token, user]);

  if (isLoggedIn === null) {
    return <>LOADING</>;
  }
  if (isLoggedIn === false) {
    return <Login />;
  }
  if (isLoggedIn) {
    return children;
  }
});
