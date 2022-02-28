import React from "react";
import { Link } from "react-router-dom";
import WorkComponent from "./WorkComponent";

export default function WorksRow({ title, works }) {
  return (
    <div className="tracks-row pt-4">
      <div className="row-header">
        <h5 className="tracks-row-title">{title}</h5>
        <Link className="see-all-link" to={"/"}>
          see all
        </Link>
      </div>
      <div className="row">
        {works.map((work) => {
          return <WorkComponent key={work.id} work={work} />;
        })}
      </div>
    </div>
  );
}
