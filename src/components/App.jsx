import React, { useEffect, useRef, useState } from "react";

// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/normalize.sass";
import "../assets/styles/app.sass";

// COMPONENTS
import AppSidebar from "./AppSidebar";
import SignupBanner from "./SignupBanner";
import UserInfoHeader from "./UserInfoHeader";

export default function App() {
  const scrollArea = useRef(null);
  const [scrollY, setscrollY] = useState(0);

  useEffect(() => {
    scrollArea.current.onscroll = () => {
      setscrollY(scrollArea.current.scrollTop);
    };
  }, []);

  return (
    <main id="app-container">
      <div id="app-main-area">
        <AppSidebar />
        <div ref={scrollArea} id="app-main-content">
          <div id="app">
            <UserInfoHeader scrollY={scrollY} />
            <div className="px-3 py-4">
              <div className="container">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
                inventore, ut perspiciatis quo dolorum dolorem accusantium
                maxime ratione itaque, voluptatem nisi maiores rem dicta nobis
                dolor, a sunt ex alias? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Odit blanditiis, exercitationem unde iusto,
                error magnam adipisci placeat possimus consequatur corrupti
                veritatis, nemo quibusdam voluptates perspiciatis vitae!
                Recusandae, quo. Perspiciatis, illum.
                <hr />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                laudantium saepe excepturi dolorum. Tempora temporibus sit omnis
                optio quo quod voluptatem nam? Quasi aliquam autem iste qui!
                Adipisci, maxime quod? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptas, maxime? Excepturi sapiente velit non
                obcaecati, amet aut iure hic esse maiores, omnis illo fugiat in
                officia ipsam cupiditate! Cupiditate, voluptatum!
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div id="fixed-bottom-banner-area">
        <SignupBanner />
      </div>
    </main>
  );
}
