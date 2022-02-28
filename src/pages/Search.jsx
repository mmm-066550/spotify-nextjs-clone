import React, { useLayoutEffect } from "react";

export default function Search() {
  useLayoutEffect(() => {
    document.title = "Spotify | Search";
  }, []);
  return (
    <div id="app-main-search-area" className="px-3 py-4">
      <div className="container">Search</div>
    </div>
  );
}
