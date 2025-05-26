import { useRef, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
} from "motion/react";
import { readItems } from "@directus/sdk";
import FadeIn from "react-fade-in";

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
        <title>WatArrow | Team</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="team-root">
        <div className="main-image-container">
          <Image
            width={9075}
            height={6047}
            sizes="100vw"
            src={`${DIRECTUS_CDN_URL}/assets/${content.main_image}`}
            alt="WatArrow SAE Aero Design East 2025 team photo"
            className="main-image main-image-desktop"
            draggable={false}
            priority={!isMobile}
          />
          <Image
            width={9075}
            height={6047}
            sizes="100vw"
            src={`${DIRECTUS_CDN_URL}/assets/${content.main_image_mobile}`}
            alt="WatArrow SAE Aero Design East 2025 team photo"
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
              <sub>Joshua Perry</sub>
            ) : (
              <>
                <sub style={{ display: "block" }}>
                  Lesley Lang, Nicholas Iafrate, Henry Xi, Donald Alexander,
                  Veronika Markovich
                </sub>
                <sub style={{ display: "block" }}>
                  Derek Chu, Sayan Saha, Joshua Perry, Riya Vaidya, Arman Eklasi
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
            <motion.div
              className="carasoul"
              animate
              style={{
                width: WIDTH,
                transform: `translateX(-${
                  carasoulProgress *
                  ((content.carasoul.length - 1) * (WIDTH + GAP))
                }px)`,
                gap: GAP,
              }}
            >
              {content.carasoul.map((image, i) => (
                <Image
                  width={600}
                  height={900}
                  style={{ objectFit: "cover", maxHeight: HEIGHT }}
                  src={`${DIRECTUS_CDN_URL}/assets/${image.directus_files_id}`}
                  alt=""
                  key={image.directus_files_id}
                />
              ))}
            </motion.div>
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
                the University of Waterloo designing aircraft with a focus on
                aerodynamics.
              </p>
              <p>
                At WatArrow, we are committed to empowering students with
                invaluable real-world experience in aerospace engineering.
              </p>
              <p>
                Our mission is to provide a community where students can
                collaborate in the complete lifecycle of aircraft design—from
                conceptualization and manufacturing to flight testing.
              </p>
              <p>
                Since 2023, we have competed in SAE Aero Design East twice, both
                in the micro class. For SAE Aero Design 2026, WatArrow will be
                competing in both the micro class and the advanced class.
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
            style={{ objectFit: "cover", height: "100vh", width: "100%" }}
            src={`${DIRECTUS_CDN_URL}/assets/${content.comp_image}`}
            alt="WatArrow members watch their aircraft fly at competition"
          />
          <div className="text">
            <h2>SAE AERO DESIGN 2025</h2>
            <p className="location">Fort Worth, Texas, USA</p>
            <p className="info">Micro Class - 3rd Place Mission</p>
            <p className="info">Micro Class - 5th Place Overall</p>
          </div>
          <div className="bottom">
            <sub>
              Donald Alexander, Veronika Markovich, Henry Xi, Nicholas Iafrate
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
                <h3>Captain</h3>
                <p>
                  Joshua Perry <span className="yellow">Captain</span>
                </p>
              </div>
              <div className="section">
                <h3>Directors</h3>
                <p>
                  Thomas Kim <span className="yellow">Business Director</span>
                </p>
                <p>
                  Sayan Saha <span className="yellow">Technical Director</span>
                </p>
              </div>
              <div className="section">
                <h3>Leads</h3>
                <p>
                  Lesley Lang <span className="yellow">Structures Lead</span>
                </p>
                <p>
                  Veronika Markovich{" "}
                  <span className="yellow">Structures Lead</span>
                </p>
                <p>
                  Sarah Gu <span className="yellow">Propulsion Lead</span>
                </p>
                <p>
                  Riiya Vaidya <span className="yellow">Aerodynamics Lead</span>
                </p>
              </div>
              <div className="section">
                <h3>Competitions</h3>
                <p>
                  SAE Aero Design <span className="yellow">Micro Class</span>
                </p>
                <p>
                  SAE Aero Design <span className="yellow">Advanced Class</span>
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
              Since 2023, WatArrow has grown from just 7 members to over 25
              members. In preparation for SAE Aero Design 2026, we anticipate
              even more exciting work that you can participate in! Apply now!
            </p>
            <div>
              <sub>Lesley Lang, Derek Chu, Riya Vaidya</sub>
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
    })
  );

  return {
    props: {
      content,
    },
  };
};
