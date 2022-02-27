import React from "react";
import { SPOTIFY_LOGIN } from "../config";
import "../assets/styles/login.sass";

export default function Login() {
  return (
    <div id="app-login-wrapper">
      <i className="fab fa-spotify"></i>
      <button
        onClick={() => {
          window.location.assign(SPOTIFY_LOGIN);
        }}
      >
        LOG INTO SPOTIFY
      </button>
    </div>
  );
}
