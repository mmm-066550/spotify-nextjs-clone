import React from "react";

// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/normalize.sass";
import "../assets/styles/components.sass";
import "../assets/styles/app.sass";

// COMPONENTS
import AppSidebar from "./AppSidebar";

export default function App() {
  return (
    <main id="app-container">
      <div id="app-main-area">
        <AppSidebar />
        <div id="app-main-content"></div>
      </div>
      <div id="track-play-control-area"></div>
    </main>
  );
}
