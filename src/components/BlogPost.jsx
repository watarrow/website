import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

const BlogPost = ({ blog }) => {
  const DIRECTUS_CDN_URL = process.env.NEXT_PUBLIC_DIRECTUS_CDN_URL;

  return (
    <div className="blog-post-root">
      <div className="blog-post-content">
        <h1 className="blog-post-title">{blog.title}</h1>
        <p className="blog-post-subtitle">{blog.subtitle}</p>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={`${DIRECTUS_CDN_URL}/assets/${blog.image}`}
          alt={blog.title}
          style={{ width: "100%", height: "auto" }}
          className="blog-post-image"
          draggable={false}
        />
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="react-markdown">
          {blog.markdown}
        </ReactMarkdown>
        <hr className="blog-post-break" />
        <p className="blog-post-tags-title">Tags</p>
        <div className="blog-post-tags-container">
          {blog.tags?.length > 0 &&
            blog.tags.map((tag) => (
              <span className="blog-post-tag" key={tag}>
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
