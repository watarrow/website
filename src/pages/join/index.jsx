import Link from "next/link";
import FadeIn from "react-fade-in";
import Head from "next/head";

const Join = () => {
  return (
    <>
      <Head>
        <title>WatArrow | Join Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="join-root">
        <FadeIn delay={150} transitionDuration={750} className="join-content">
          <div className="header">
            <h1>JOIN US</h1>
            <p>
              We′re thrilled that you′re considering joining WatArrow! As we
              grow our team, we can use all the help we can get. We have a lot
              going on from sponsorships, software, and most importantly
              engineering! Regardless of your background, there will be a place
              for you here and we can′t wait for you to be a part of the team!
            </p>
          </div>
          <div className="general-interest-form">
            <h2>APPLY NOW</h2>
            <p>
              Ready to join the team? Apply through our general interest form
              below. In the form, you can choose which part of the team you′re
              most interested in, whether that′s engineering, software,
              business, or anything else. We′ll review your application and
              reach out with next steps!
            </p>
            <div className="basic-button">
              <Link href="https://forms.gle/NjSRLQ4k9VWdeHFK8">Apply</Link>
            </div>
          </div>
        </FadeIn>
      </main>
    </>
  );
};
export default Join;
