import React from "react";
import "../assets/styles/signup_banner.sass";

export default function SignupBanner() {
  return (
    <div id="sign-up-banner" className="d-none d-lg-flex">
      <div>
        <span className="overview-spotify">preview of spotify</span>
        <p className="m-0 mt-1 banner-content">
          Signup to get unlimited songs and prodcasts with occassional ads. No
          credit card needed
        </p>
      </div>
      <button className="spotify-btn banner-signup-cta">sign up free</button>
    </div>
  );
}
