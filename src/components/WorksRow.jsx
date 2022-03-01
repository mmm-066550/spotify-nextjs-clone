import React from "react";
import { Link } from "react-router-dom";
import WorkComponent from "./WorkComponent";

export default function WorksRow({ link, title, works }) {
  return (
    <div className="tracks-row pt-4">
      <div className="row-header">
        <h5 className="tracks-row-title">{title}</h5>
        {link ? (
          <Link className="see-all-link" to={link}>
            see all
          </Link>
        ) : null}
      </div>
      <div className="row">
        {works
          ? works.map((work) => {
              return (
                <WorkComponent
                  key={work?.played_at || work?.id}
                  work={work?.track?.album || work}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
