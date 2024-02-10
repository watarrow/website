import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import FadeIn from "react-fade-in/lib/FadeIn";

const links = [
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Join Us",
    href: "/join",
  },
];

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  const copyrightText = `WATARROW © ${new Date().getFullYear()}`;

  return (
    <FadeIn delay={150} transitionDuration={750}>
      <footer className="footer">
        {isMobile && <p className="copyright mobile">{copyrightText}</p>}
        <ul className="links-list">
          {isMobile || <li className="copyright">{copyrightText}</li>}
          {links.map((link, i) => (
            <li className="links-list-item" key={i}>
              <Link className="link" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </FadeIn>
  );
};

export default Footer;
