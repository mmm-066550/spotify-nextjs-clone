import React, { useEffect, useState } from "react";
import "../assets/styles/user_header.sass";
import { ReactComponent as ChevronLeft } from "../assets/images/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../assets/images/chevron-right.svg";

export default function UserInfoHeader({ scrollY }) {
  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    if (scrollY > 100) {
      setsticky(true);
    }
    if (scrollY < 100) {
      setsticky(false);
    }
  }, [scrollY]);

  return (
    <header
      id="user-actions_info-header"
      className={`py-4 px-3 ${sticky ? "sticky-top" : ""}`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="app-navigation-btns-container">
              <button className="navigate-btn nav-prev" disabled>
                <ChevronLeft />
              </button>
              <button className="navigate-btn nav-next">
                <ChevronRight />
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="user-actions-container">
              <div className="sign-up_in-btns">
                <button className="user-reg_log-btn signup-btn">sign up</button>
                <button className="user-reg_log-btn login-btn">log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
