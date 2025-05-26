import Image from "next/image";
import Link from "next/link";
import FadeIn from "react-fade-in";

import ScrollArrow from "./ScrollArrow";

const ArticleGallery = ({ articles }) => {
  const DIRECTUS_CDN_URL = process.env.NEXT_PUBLIC_DIRECTUS_CDN_URL;

  return (
    <div className="article-gallery-container">
      {articles.length > 0 ? (
        articles.map((article, i) => (
          <div className="article-container" key={i}>
            <Image
              fill
              src={`${DIRECTUS_CDN_URL}/assets/${article.image}`}
              alt={article.title}
              className="article-image"
              draggable="false"
            />
            <div className="article-info">
              <h1 className="article-title">{article.title}</h1>
              {article.subtitle && (
                <p className="article-subtitle">{article.subtitle}</p>
              )}
              <button className="button-container">
                <Link href={`/blog/${article.id}`}>Read Blog</Link>
              </button>
            </div>
            {i == articles.length - 1 || <ScrollArrow />}
          </div>
        ))
      ) : (
        <FadeIn delay={150} transitionDuration={750}>
          <div className="no-articles-container">
            <p className="no-articles">
              It looks like we don′t have any posts at this time. Please come
              back another time!
            </p>
          </div>
        </FadeIn>
      )}
    </div>
  );
};
export default ArticleGallery;
