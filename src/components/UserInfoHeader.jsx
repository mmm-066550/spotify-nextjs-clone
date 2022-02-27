import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../assets/styles/user_header.sass";
import { Link } from "react-router-dom";
import { setUser } from "../redux/actions";

export default connect((state) => state, { setUser })(function UserInfoHeader({
  user,
  setUser,
  scrollY,
}) {
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
                <i className="fal fa-chevron-left"></i>
              </button>
              <button className="navigate-btn nav-next">
                <i className="fal fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="user-actions-container">
              <div className="account_logout-btns">
                <Link to={"/account"} className="user-profile-link">
                  <div className="me-3 user-avatar-wrapper">
                    <img src={user?.images[0]?.url} alt="user-avatar" />
                  </div>
                  <span className="username">{user?.display_name}</span>
                </Link>
                <a
                  className="logout-link-btn"
                  href={"logout"}
                  onClick={(e) => {
                    e.preventDefault();
                    window.localStorage.setItem("token", null);
                    window.location.reload();
                  }}
                >
                  <i className="fal fa-power-off"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});
