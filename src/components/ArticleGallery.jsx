import Image from "next/image";
import FadeIn from "react-fade-in/lib/FadeIn";

import ScrollArrow from "./ScrollArrow";

const ArticleGallery = ({ articles }) => {
  return (
    <div className="article-gallery-container">
      {articles.length > 0 ? (
        articles.map((article, i) => (
          <div className="article-container" key={i}>
            <Image
              src={article.image}
              alt={article.title}
              placeholder="blur"
              className="article-image"
            />
            <h1 className="article-title">{article.title}</h1>
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
