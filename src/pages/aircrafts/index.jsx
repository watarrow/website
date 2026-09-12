import Head from "next/head";

import AircraftList from "@/components/AircraftList";

import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { normalizeAircraft } from "@/lib/aircrafts";
import { isProd } from "@/utils/environment";

export default function Aircrafts({ aircrafts }) {
  return (
    <>
      <Head>
        <title>WatArrow | Aircrafts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <AircraftList aircrafts={aircrafts} />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const aircrafts = await directus.request(
    readItems("Aircrafts", {
      fields: ["*", "Gallery.directus_files_id"],
      sort: ["sort"], // Drag-and-drop order set in Directus; new entries sort last
      ...(isProd() && {
        filter: {
          status: {
            _in: ["published", "PUBLISHED"],
          },
        },
      }),
    })
  );

  return {
    props: {
      aircrafts: aircrafts.map(normalizeAircraft),
    },
  };
};
