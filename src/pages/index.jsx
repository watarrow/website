import { useRef, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  useScroll,
  useMotionValueEvent,
  useInView,
} from "motion/react";
import { readItems } from "@directus/sdk";
import FadeIn from "react-fade-in";

import ImageCarousel from "@/components/ImageCarousel";
import ScrollArrow from "@/components/ScrollArrow";

import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";
import useWindowSize from "@/hooks/useWindowSize";

import WatArrow from "@/assets/watarrow-word-logo.svg";
import Arrow from "@/assets/logo-transparent-svg.svg";
import WeAreWatArrow from "@/assets/we-are-watarrow.svg";

import directus from "@/lib/directus";

const Team = ({ content }) => {
  const introRef = useRef();
  const structureRef = useRef();
  const aboutRef = useRef();
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start -15%", "end 115%"],
  });
  const [carasoulProgress, setCarasoulProgress] = useState(0);
  const windowSize = useWindowSize();
  const isMobile = useBetterMediaQuery("(max-width: 800px)");
  const isStructureInView = useInView(structureRef, { once: true });
  const isAboutInView = useInView(aboutRef, { once: true });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCarasoulProgress(latest);
  });

  const DIRECTUS_CDN_URL = process.env.NEXT_PUBLIC_DIRECTUS_CDN_URL;
  const SCALE = 0.67;
  const WIDTH = isMobile ? 300 : (windowSize.height * SCALE * 2) / 3;
  const HEIGHT = isMobile ? 450 : windowSize.height * SCALE;
  const GAP = isMobile ? 25 : 50;

  return (
    <>
      <Head>
        <title>WatArrow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="team-root">
        <div className="main-image-container">
          <Image
            width={9075}
            height={6047}
            sizes="100vw"
            src={`${DIRECTUS_CDN_URL}/assets/${content.main_image}`}
            alt="WatArrow SAE Aero Design East 2026 team photo"
            className="main-image main-image-desktop"
            draggable={false}
            priority={!isMobile}
          />
          <Image
            width={9075}
            height={6047}
            sizes="100vw"
            src={`${DIRECTUS_CDN_URL}/assets/${content.main_image_mobile}`}
            alt="WatArrow SAE Aero Design East 2026 team photo"
            className="main-image main-image-mobile"
            draggable={false}
            priority={isMobile}
          />
          <div className="text">
            <WatArrow />
            <p>
              Aircraft designed and built by student engineers at the University
              of Waterloo
            </p>
            {isMobile ? (
              <sub>Veronika Markovich, Lesley Lang, Riya Vaidya</sub>
            ) : (
              <>
                <sub style={{ display: "block" }}>
                  Sophia Yang, Sayan Saha, Lesley Lang, Virika Vadgama, Henry
                  Xi, Emma Keeping, Joshua Perry, Daniel Moorthy, Victor Radu,
                  Yang Li, Prahaas Kotni
                </sub>
                <sub style={{ display: "block" }}>
                  Veronika Markovich, Daria Tsybukova, Riya Vaidya, Samuel Ke,
                  Matthew Zhang
                </sub>
              </>
            )}
          </div>
          <ScrollArrow />
        </div>

        <div
          className="card-intro"
          ref={introRef}
          style={{
            height: `calc(${content.carasoul.length}00vh * 0.67)`,
          }}
        >
          <div className="center">
            <div style={{ width: WIDTH }}>
              <WeAreWatArrow />
            </div>
            <ImageCarousel
              className="carasoul"
              images={content.carasoul}
              width={WIDTH}
              height={HEIGHT}
              gap={GAP}
              progress={carasoulProgress}
            />
            <ScrollArrow />
          </div>
        </div>

        <div className="card-about">
          <div className="center" ref={aboutRef}>
            <FadeIn
              className="left"
              visible={isAboutInView}
              delay={150}
              transitionDuration={750}
            >
              <h2 className="title">ABOUT US</h2>

              <p>
                Founded in 2023, WatArrow started as a student design team at
                the University of Waterloo designing custom fixed-wing aircraft.
              </p>
              <p>
                We are committed to empowering students with
                invaluable real-world experience in aerospace engineering.
                Our mission is to provide a community where students can
                collaborate in the complete lifecycle of aircraft design—from
                conceptualization and manufacturing to flight testing.
              </p>
              <p>
                Since 2023, we have competed in SAE Aero Design East three times. For SAE Aero Design 2027, WatArrow will be
                competing in the Advanced Class.
              </p>
              <sub>
                Emma Keeping, Anastasia Kimovska, Arman Eklasi, Joshua Perry,
                Thomas Kim, Nicholas Iafrate, Henry Xi
              </sub>
            </FadeIn>
            <FadeIn
              className="right"
              visible={isAboutInView}
              delay={150}
              transitionDuration={750}
            >
              <Image
                width={640}
                height={800}
                src={`${DIRECTUS_CDN_URL}/assets/${content.about_image}`}
                alt="WatArrow origin members in front of a bay"
              />
            </FadeIn>
          </div>
        </div>

        <div className="card-comp">
          <Image
            width={9520}
            height={6336}
            style={{
              objectFit: "cover",
              objectPosition: "45% 50%",
              height: "100vh",
              width: "100%",
            }}
            src={`${DIRECTUS_CDN_URL}/assets/${content.comp_image}`}
            alt="WatArrow members prepare to fly at competition"
          />
          <div className="text">
            <h2>SAE AERO DESIGN 2026</h2>
            <p className="location">Lakeland, Florida, USA</p>
            <p className="info">Advanced Class - 12th Place</p>
            <p className="info">Micro Class - 7th Place</p>
          </div>
          <div className="bottom">
            <sub>
              Prahaas Kotni, Daria Tsybukova, Virika Vadgama, Veronika
              Markovich, Victor Radu
            </sub>
          </div>
          <ScrollArrow />
        </div>

        <div className="card-structure">
          <div className="center" ref={structureRef}>
            <FadeIn
              className="left"
              visible={isStructureInView}
              delay={150}
              transitionDuration={750}
            >
              <h2>TEAM STRUCTURE</h2>
              <div className="section">
                <h3>Captains</h3>
                <p>
                  Sayan Saha <span className="yellow">Co-Captain</span>
                </p>
                <p>
                  Riya Vaidya <span className="yellow">Co-Captain</span>
                </p>
              </div>
              <div className="section">
                <h3>Leads</h3>
                <p>
                  Yang Li{" "}
                  <span className="yellow">Autonomy & Avionics Lead</span>
                </p>
                <p>
                  Virika Vadgama{" "}
                  <span className="yellow">Structures Co-Lead</span>
                </p>
                <p>
                  Lesley Lang{" "}
                  <span className="yellow">Structures Co-Lead</span>
                </p>
                <p>
                  Victor Radu <span className="yellow">Flight Test Lead</span>
                </p>
                <p>
                  Owen Butler <span className="yellow">Business Lead</span>
                </p>
                <p>
                  Bader Aljabri <span className="yellow">Software & Infrastructure Lead</span>
                </p>
                <p>
                  Prahaas Kotni{" "}
                  <span className="yellow">Aerodynamics & Analysis Lead</span>
                </p>
                <p>
                  Matthew Zhang <span className="yellow">Wind Tunnel Lead</span>
                </p>
              </div>
              <div className="section">
                <h3>Competitions</h3>
                <p>
                  SAE Aero Design 2027 <span className="yellow">Advanced Class</span>
                </p>
              </div>
            </FadeIn>
            <FadeIn
              className="right"
              visible={isStructureInView}
              delay={150}
              transitionDuration={750}
            >
              <div className="container">
                <Arrow />
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="card-members">
          <Image
            width={9520}
            height={6336}
            style={{
              opacity: 0.67,
              objectFit: "cover",
              objectPosition: "64% 50%",
              height: "100vh",
              width: "100%",
            }}
            src={`${DIRECTUS_CDN_URL}/assets/${content.members_image}`}
            alt="WatArrow members staying cool with their hockey jerseys in the sun"
          />
          <div className="text">
            <h2>JOIN US</h2>
            <p>
              WatArrow is more than just about building planes. From movie
              nights, picnics, and traveling to competition, we facilitate the
              environment to build lasting friendships.
            </p>
            <p>
              Since 2023, WatArrow has grown from just 7 members to over 40
              members. In preparation for SAE Aero Design 2027, we anticipate
              even more exciting work that you can participate in! Apply now!
            </p>
            <div>
              <sub>Veronika Markovich, Daria Tsybukova, Virika Vadgama</sub>
            </div>
            <button className="basic-button">
              <Link href="/join">JOIN US</Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default Team;

export const getServerSideProps = async () => {
  const content = await directus.request(
    readItems("team_page", {
      fields: ["*", "carasoul.*"],
    }),
  );

  return {
    props: {
      content,
    },
  };
};
