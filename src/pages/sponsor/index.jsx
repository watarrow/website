import Head from "next/head";
import Link from "next/link";
import FadeIn from "react-fade-in/lib/FadeIn";

import SponsorList from "@/components/SponsorList";

import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

const Sponsor = ({ sponsors }) => {
  const DIRECTUS_CDN_URL = process.env.NEXT_PUBLIC_DIRECTUS_CDN_URL;

  return (
    <>
      <Head>
        <title>WatArrow | Sponsor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="sponsors-root">
        <FadeIn
          delay={100}
          transitionDuration={700}
          className="sponsors-container"
        >
          <div className="header">
            <h1>SPONSOR</h1>
            <p>
              Our sponsors make our team possible. The sponsorship funds are
              used towards the research and development of our competition
              aircraft, in-house tools and infrastructure, and team expansion
              initiatives.
            </p>
            <div className="basic-button">
              <Link href="https://uwaterloo.ca/sedra-student-design-centre/donate">
                Donate
              </Link>
            </div>
          </div>

          <div className="section">
            <h2>SPONSOR PACKAGE</h2>
            <p>
              Are you interested in sponsoring us? Take a look at our sponsor
              package for more information about WatArrow, how your funding
              supports us, and our sponsorship tiers.
            </p>
            <button className="button-container">
              <Link
                href={`${DIRECTUS_CDN_URL}/assets/93a005d7-4991-4499-921f-e04475561ffe.pdf`}
                target="_blank"
              >
                SPONSOR PACKAGE
              </Link>
            </button>
          </div>

          <div className="section">
            <h2>OUR SPONSORS</h2>
            <p>We appreciate your support!</p>
          </div>
          <SponsorList sponsors={sponsors} />

          <div className="get-in-touch">
            <h2>GET IN TOUCH</h2>
            <p>
              Contact us at{" "}
              <Link className="email" href="mailto:waterlooarrow@gmail.com">
                business@watarrow.com
              </Link>{" "}
              for more information!
            </p>
          </div>
        </FadeIn>
      </main>
    </>
  );
};
export default Sponsor;

export const getServerSideProps = async () => {
  const sponsors = await directus.request(
    readItems("sponsor_tiers", {
      sort: ["sort"],
      fields: "*.*",
    })
  );

  return {
    props: {
      sponsors,
    },
  };
};
