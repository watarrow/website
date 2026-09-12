import Head from "next/head";

import AircraftList from "@/components/AircraftList";

import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { normalizeAircraft } from "@/lib/aircraft";
import { isProd } from "@/utils/environment";

export default function Aircraft({ aircraft }) {
  return (
    <>
      <Head>
        <title>WatArrow | Aircraft</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <AircraftList aircraft={aircraft} />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const aircraftList = await directus.request(
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
        aircraft: (aircraftList || []).map(normalizeAircraft),
      },
    };
  } catch (error) {
    console.error("Failed to fetch aircraft from Directus:", error);
    return {
      props: {
        aircraft: [],
      },
    };
  }
};
