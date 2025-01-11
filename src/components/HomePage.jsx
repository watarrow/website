import { useState } from "react";
import { StlViewer } from "react-stl-viewer";
import FadeIn from "react-fade-in";
import Link from "next/link";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";

import WatArrow from "@/assets/watarrow-word-logo.svg";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useBetterMediaQuery("(max-width: 800px)");

  return (
    <div className="home-page-root">
      <div className="home-page-container">
        <div className="left">
          <FadeIn delay={150} transitionDuration={750} className="title">
            <div className="logo-container">
              <WatArrow height="100%" />
            </div>
            <p>
              Aircrafts designed and built by student engineers at the
              University of Waterloo.
            </p>
            <div className="button-container">
              <Link href="/contact">Learn more</Link>
            </div>
          </FadeIn>

          <div className="statistics">
            <h2>Eve</h2>
            <p>
              Eve was the first competition aircraft designed by WatArrow. Built
              and tested in the course of just two months, the team placed 10th
              out of 19th with the design in the 2024 SAE Aero Design East
              competition. Ansys CFD and FEA were used to optimize the
              aerodynamics and structure of the aircraft, while SOLIDWORKS
              simulation was used to run topological optimization on many parts
              of the aircraft.
            </p>
            <ul>
              <li>36-inch wingspan</li>
              <li>Topologically optimised tail and nosecone</li>
              <li>2.1 kg of thrust</li>
              <li>Biplane design for higher wing surface area</li>
              <li>68 oz payload tank</li>
            </ul>

            <h3>Contributors</h3>
            <ul>
              <li>Joshua Perry</li>
              <li>Emma Keeping</li>
              <li>Thomas Kim</li>
              <li>Arman Eklasi</li>
              <li>Henry Xi</li>
              <li>Nicholas Iafrate</li>
              <li>Anastasia Kimovska</li>
            </ul>
          </div>
        </div>

        <div className="right">
          <div className={`cover ${isLoaded ? "loaded" : ""}`}></div>
          <div className="stl-viewer-container">
            <FadeIn
              delay={750}
              style={{ height: "100%", width: "100%" }}
              transitionDuration={750}
            >
              <StlViewer
                url="/models/simplify_plane.stl"
                modelProps={{
                  color: "#805500",
                  scale: isMobile ? 0.65 : 1.5,
                  positionX: 0,
                  positionY: 0,
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

      <FadeIn delay={1000} transitionDuration={750}>
        <footer className="home-page-footer">{`WATARROW © ${new Date().getFullYear()}`}</footer>
      </FadeIn>
    </div>
  );
};
export default HomePage;
