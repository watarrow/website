import Head from "next/head";
// import Image from "next/image";
import InDevelopment from "@/components/InDevelopment";

// import WeAreWatArrow from "@/assets/we-are-watarrow.svg";
// import wargBay from "@/assets/team/warg-bay-cropped.jpg";

const Team = () => {
  return (
    <>
      <Head>
        <title>WatArrow | Team</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <InDevelopment />
      {/* <main className="team-root">
        <div className="team-container">
          <div className="header">
            <WeAreWatArrow height="100%" className="we-are-watarrow" />
          </div>
          <Image
            src={wargBay}
            alt="WatArrow team photo"
            className="warg-bay"
            placeholder="blur"
          />
        </div>
      </main> */}
    </>
  );
};
export default Team;
