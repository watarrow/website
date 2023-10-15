import { useState } from "react";
import { StlViewer } from "react-stl-viewer";
import FadeIn from "react-fade-in";
import Link from "next/link";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";

import FadeInOut from "./FadeInOut";
// import ScrollArrow from "./ScrollArrow";

import WatArrow from "@/assets/watarrow-word-logo.svg";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useBetterMediaQuery("(max-width: 800px)");

  return (
    <div className="home-page-root">
      <div className="home-page-container">
        {/* <FadeIn delay={150} transitionDuration={750} className="left"> */}
        <div className="left">
          <div className="logo-container">
            <WatArrow height="100%" />
          </div>
          <p>
            Aircrafts designed and built by student engineers at the University
            of Waterloo.
          </p>
          <div className="button-container">
            <Link href="/about">Learn more</Link>
          </div>
        </div>
        {/* </FadeIn> */}

        <div className="right">
          <div className={`cover ${isLoaded ? "loaded" : ""}`}></div>
          <div className="stl-viewer-container">
            <FadeIn
              delay={150}
              style={{ height: "100%", width: "100%" }}
              transitionDuration={750}
            >
              <StlViewer
                url="/models/plane.stl"
                modelProps={{
                  color: "#cd8900",
                  scale: isMobile ? 0.8 : 2,
                  positionY: isMobile ? null : 50,
                  rotationZ: Math.PI / 8,
                }}
                orbitControls
                className="stl-viewer"
                onFinishLoading={() => setIsLoaded(true)}
              />
            </FadeIn>
          </div>
        </div>
        <div className="spacer"></div>
      </div>

      {/* add scroll arrow when articles are added */}
      {/* <ScrollArrow /> */}
    </div>
  );
};
export default HomePage;
