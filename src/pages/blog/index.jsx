import Head from "next/head";

import ArticleGallery from "@/components/ArticleGallery";

import articles from "@/data/articles";

const Blog = () => {
  return (
    <>
      <Head>
        <title>WatArrow | Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ArticleGallery articles={articles} />
      </main>
    </>
  );
};
export default Blog;
