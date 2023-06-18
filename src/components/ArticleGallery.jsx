import Image from "next/image";

import solidworks from "@/assets/solidworks.png";
import team from "@/assets/team.jpg";
import bomber from "@/assets/bomber.jpg";

const ArticleGallery = ({ articles }) => {
  return (
    <div className="article-gallery-container">
      <Image src={solidworks} alt="SOLIDWORKS Airplane" placeholder="blur" />
      <Image src={team} alt="SOLIDWORKS Airplane" placeholder="blur" />
      <Image src={bomber} alt="SOLIDWORKS Airplane" placeholder="blur" />
    </div>
  );
};
export default ArticleGallery;
