import Head from "next/head";
import Link from "next/link";
import FadeIn from "react-fade-in/lib/FadeIn";

import SponsorList from "@/components/SponsorList";

import sponsors from "@/data/sponsors";

const Sponsor = () => {
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
            <h2>2024 SPONSORS</h2>
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
