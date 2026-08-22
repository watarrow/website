import Head from "next/head";
import { useState } from "react";
import { StlViewer } from "react-stl-viewer";
import FadeIn from "react-fade-in";
import Link from "next/link";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";

import WatArrow from "@/assets/watarrow-word-logo.svg";

export default function Planes() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useBetterMediaQuery("(max-width: 800px)");

  const DIRECTUS_CDN_URL = process.env.NEXT_PUBLIC_DIRECTUS_CDN_URL;
  const modelUrl = `${DIRECTUS_CDN_URL}/assets/74c94b09-df8c-48a3-8386-d5eccac3c33a.stl`;

  return (
    <>
      <Head>
        <title>WatArrow | Planes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="home">
        <div className="home-page-root">
          <div className="home-page-container">
            <div className="left">
              <FadeIn delay={150} transitionDuration={750} className="title">
                <div className="logo-container">
                  <WatArrow height="100%" />
                </div>
                <p>
                  Aircraft designed and built by student engineers at the
                  University of Waterloo.
                </p>
                <button className="button-container">
                  <Link href="/">Learn more</Link>
                </button>
              </FadeIn>

              <div className="statistics">
                <h2>DART</h2>
                <p>
                  DART is the second competition aircraft designed by WatArrow.
                  Built and tested in the course of over 8 months, the team
                  placed 3rd in the mission component and 5th overall at SAE
                  Aero Design East 2025.
                </p>
                <ul>
                  <li>1.3 kg dry mass</li>
                  <li>{"<"}5 ft takeoff distance</li>
                  <li>Molduar design for quick repairs</li>
                  <li>70 oz payload tank</li>
                </ul>

                <h3>CONTRIBUTORS</h3>
                <p>
                  Joshua Perry, Nicholas Iafrate, Thomas Kim, Henry Xi, Arman
                  Eklasi, Sayan Saha, Veronika Markovich, Lesley Lang, Riya
                  Vaidya, Derek Chu, Donald Alexander, Lucas Lu, Jerry Yan,
                  Kevin Gong, Sarah Gu
                </p>
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
                    url={modelUrl}
                    modelProps={{
                      color: "#805500",
                      scale: isMobile ? 0.65 : 1.5,
                      positionX: 0,
                      positionY: 0,
                      rotationZ: Math.PI / 6,
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
      </main>
    </>
  );
}
