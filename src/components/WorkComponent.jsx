import React from "react";
import "../assets/styles/work-component.sass";
import { Link } from "react-router-dom";

export default function WorkComponent({ work }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2_5">
      <div className="work-component">
        <div
          className={`work-cover-area mb-1 ${
            work?.type === "artist" ? "circled" : ""
          }`}
        >
          <Link to={"/"}>
            <img
              src={
                work?.icons?.["0"]?.url ||
                work?.images[1]?.url ||
                work?.images[0]?.url
              }
              alt="work-cover"
              className="work-img"
            />
          </Link>
          <button className="play-track-btn">
            <i className="fas fa-play"></i>
          </button>
        </div>
        <Link to={"/"}>
          <h6 className="mt-4 mb-1 work-title">{work?.name}</h6>
          <p className="mb-3 work-info">
            {work?.description ||
              work?.release_date ||
              work?.type ||
              "Category"}
          </p>
        </Link>
      </div>
    </div>
  );
}
