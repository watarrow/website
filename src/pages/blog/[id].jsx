import Head from "next/head";

import directus from "@/lib/directus";
import { readItem } from "@directus/sdk";
import { isProd } from "@/utils/environment";

import BlogPost from "@/components/BlogPost";

export default function BlogPostPage({ blog }) {
  return (
    <>
      <Head>
        <title>WatArrow | {blog.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <BlogPost blog={blog} />
      </main>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const blog = await directus.request(
    readItem("blogs", id, {
      fields: ["*"],
      sort: ["sort", "-date_created"], //Sort by sort field and creation date descending
      ...(isProd() && {
        filter: {
          status: {
            _eq: "PUBLISHED",
          },
        },
      }),
    })
  );

  return {
    props: {
      blog,
    },
  };
};
