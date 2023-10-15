import FadeIn from "react-fade-in/lib/FadeIn";
import Image from "next/image";

import uwaterloo from "@/assets/uwaterloo.png";

const About = () => {
  return (
    <div className="about-root">
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <div className="left">
              <FadeIn
                className="text-container"
                delay={75}
                transitionDuration={750}
              >
                <h1>ABOUT</h1>
                <p>
                  WatArrow is a new design team at the University of Waterloo
                  that focuses on the design of small airplanes to compete in
                  the SAE Aero Design competition.
                </p>
                <p>
                  We design, build, test, and compete with our electric
                  competition aircraft. Everything that our team produces is
                  in-house. We produce our own designs, perform our own
                  machining, and perform our own wind tunnel testing.
                </p>
                <p>
                  We will be competing at SAE Aero Design East in 2024 and are
                  currently ramping up operations. We will be recruiting members
                  in January. Stay tuned!
                </p>
              </FadeIn>
            </div>
            <div className="right">
              <FadeIn
                delay={375}
                transitionDuration={750}
                className="logo-container"
              >
                <Image
                  src={uwaterloo}
                  alt={"University of Waterloo Logo"}
                  className="uwaterloo-logo"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
