import Image from "next/image";

import ScrollArrow from "./ScrollArrow";

const ArticleGallery = ({ articles }) => {
  return (
    <div className="article-gallery-container">
      {articles.map((article, i) => (
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
      ))}
    </div>
  );
};
export default ArticleGallery;
