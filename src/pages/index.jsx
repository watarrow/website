import Head from "next/head";
import ArticleGallery from "@/components/ArticleGallery";

import articles from "@/data/articles.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>WatArrow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="home">
        {/* Article Gallery will be used when we create a CMS for blogs. */}
        <ArticleGallery articles={articles} />
        {/* <TemporaryHomePage /> */}
      </main>
    </>
  );
}
