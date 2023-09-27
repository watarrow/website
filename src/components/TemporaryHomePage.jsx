import { StlViewer } from "react-stl-viewer";
import FadeIn from "react-fade-in";
import Link from "next/link";

import WatArrow from "@/assets/watarrow-word-logo.svg";

const TemporaryHomePage = () => {
  return (
    <div className="temporary-home-page-root">
      <div className="home-page-container">
        <div className="left">
          <FadeIn delay={33}>
            <div className="logo-container">
              <WatArrow height="100%" />
            </div>
            <div className="text-container">
              <p>
                Aircrafts designed and built by student engineers at the
                University of Waterloo.
              </p>
            </div>
            <div className="button-container">
              <Link href="/about">Learn more</Link>
            </div>
          </FadeIn>
        </div>
        <div className="right">
          <div className="stl-viewer-container">
            <StlViewer
              url={"/models/plane.stl"}
              style={{
                height: "100%",
                width: "100%",
              }}
              modelProps={{
                color: "#cd8900",
                scale: 2,
                positionY: 50,
                rotationZ: Math.PI / 8,
              }}
              orbitControls
              className="stl-viewer-desktop"
            />
            {/* MOBILE */}
            <StlViewer
              url={"/models/plane.stl"}
              style={{
                height: "100%",
                width: "100%",
              }}
              modelProps={{
                color: "#cd8900",
                scale: 1,
                rotationZ: Math.PI / 8,
              }}
              // orbitControls
              className="stl-viewer-mobile"
            />
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
};
export default TemporaryHomePage;
