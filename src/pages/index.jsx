import Head from "next/head";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>WatArrow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="home">
        <HomePage />
      </main>
    </>
  );
}
