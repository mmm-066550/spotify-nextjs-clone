import React, { useLayoutEffect } from "react";
// import WorksRow from "../components/WorksRow";

export default function Search() {
  useLayoutEffect(() => {
    document.title = "Spotify | Search";
  }, []);
  return (
    <div id="app-main-search-area" className="px-3 py-4">
      <div className="container">{/* <WorksRow title={"Browse all"} /> */}</div>
    </div>
  );
}
