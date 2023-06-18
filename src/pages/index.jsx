import Head from "next/head";
import Image from "next/image";
import ArticleGallery from "@/components/ArticleGallery";

export default function Home() {
  return (
    <>
      <Head>
        <title>WatArrow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="home">
        <ArticleGallery />
      </main>
    </>
  );
}
