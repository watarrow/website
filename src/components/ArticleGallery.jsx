import Image from "next/image";

import TemporaryHomePage from "./TemporaryHomePage";

// import solidworks from "@/assets/solidworks.png";
// import team from "@/assets/team.jpg";
// import bomber from "@/assets/bomber.jpg";

const ArticleGallery = ({ articles }) => {
  return (
    <div className="article-gallery-container">
      <TemporaryHomePage />
      {articles.map((article, i) => (
        <div className="article-container" key={i}>
          {articles.background ? (
            <div
              className="article-background"
              style={{ backgroundColor: article.background }}
            />
          ) : (
            <Image src={article.image} alt={article.title} placeholder="blur" />
          )}
          <h1 className="article-title">{article.title}</h1>
        </div>
      ))}
      {/* <Image src={solidworks} alt="SOLIDWORKS Airplane" placeholder="blur" />
      <Image src={team} alt="SOLIDWORKS Airplane" placeholder="blur" />
      <Image src={bomber} alt="SOLIDWORKS Airplane" placeholder="blur" /> */}
    </div>
  );
};
export default ArticleGallery;
